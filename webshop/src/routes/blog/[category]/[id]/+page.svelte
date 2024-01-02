<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Dialog from '$lib/Dialog.svelte';
  import BlogAuthor from '$lib/blog/BlogAuthor.svelte';
  import { meta } from '$lib/meta/meta.store';
  import type { BlogArticle } from '$lib/types/blog/blog-article.interface';
  import type { BlogComment } from '$lib/types/blog/blog-comment.interface';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { confirmation } from '$lib/utils/confirmation';
  import { authenticated, db, user } from '$lib/utils/firebase';
  import { fromIso } from '$lib/utils/format-date';
  import { cleanSlug } from '@jaspero/utils';
  import type { User } from 'firebase/auth';
  import {
    QueryDocumentSnapshot,
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    limit,
    orderBy,
    startAt,
    updateDoc
  } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import Recaptcha from '$lib/Recaptcha.svelte';
  import { page } from '$app/stores';

  export let data: BlogArticle;

  const { author, content, image, imageAlt } = data;
  const itemsPerPage = 10;

  let comments: BlogComment[];
  let hasMore: boolean;
  let ref: QueryDocumentSnapshot<any>;
  let comment = '';
  let loading = false;
  let commentsLoading = false;
  let selectedComment: string | null;
  let commentDialog = false;
  let recaptchaVerify: () => Promise<string>;

  meta.set(data.meta);

  function openDialog() {
    selectedComment = null;
    comment = '';
    commentDialog = true;
  }

  function editComment(item: BlogComment) {
    selectedComment = item.id;
    comment = item.comment;
    commentDialog = true;
  }

  function deleteComment(comment: BlogComment) {
    confirmation(async ({ confirmed }) => {
      if (!confirmed) {
        return;
      }

      await alertWrapper(
        deleteDoc(doc(db, 'blog-aricles', data.id, 'blog-comments', comment.id)),
        `Comment deleted successfully`
      );

      comments.splice(comments.indexOf(comment), 1);
      comments = [...comments];
    });
  }

  async function saveComment() {
    loading = true;

    const authorName = $user?.name || ($authenticated as User).displayName || 'Anonymous';
    const added = {
      author: ($authenticated as User).uid,
      authorName,
      comment,
      createdOn: new Date().toISOString()
    };

    const resp = await alertWrapper(
      recaptchaVerify().then(
        () =>
          (selectedComment
            ? updateDoc(doc(db, 'blog-articles', data.id, 'blog-comments', selectedComment), {
                comment,
                authorName
              })
            : addDoc(collection(db, 'blog-articles', data.id, 'blog-comments'), added)) as any
      ),
      'Comment saved',
      '',
      () => (loading = false)
    );

    if (selectedComment) {
      const index = comments.findIndex((it) => it.id === selectedComment);
      comments[index].comment = comment;
      comments[index].authorName = authorName;
    } else {
      comments = [{ id: resp.id, ...added }, ...comments];
    }

    comments = [...comments];

    selectedComment = null;
    comment = '';
    loading = false;
    commentDialog = false;
  }

  async function loadComments() {
    const queries: any[] = [
      collection(db, 'blog-articles', data.id, 'blog-comments'),
      orderBy('createdOn', 'desc')
    ];

    if (ref) {
      queries.push(startAt(ref));
    }

    queries.push(limit(itemsPerPage + 1));

    const { docs } = await getDocs(
      // @ts-ignore
      ...queries
    );

    hasMore = docs.length === itemsPerPage + 1;
    ref = docs[docs.length - 1];
    comments = [
      ...(comments || []),
      ...docs.slice(0, itemsPerPage).map((doc) => ({ id: doc.id, ...(doc.data() as any) }))
    ];
  }

  onMount(async () => {
    await loadComments();
  });
</script>

<div class="grid">
  <div class="col-8 col-s-10 col-xs-12">
    <p>{data.title}</p>
    {#if data.description}
      {data.description}
    {/if}

    <div class="flex fw-wrap">
      {#if author}
        <BlogAuthor
          type="read-more"
          name={author.name}
          image={author.image}
          link="/blog/authors/{cleanSlug(author.name)}"
        />
      {/if}
    </div>
  </div>
</div>

<div class="grid">
  <div class="col-8 col-s-10 col-xs-12">
    {#if image}
      <img src={image} alt={imageAlt} />
    {/if}

    <hr />

    <div class="article-global-selector">
      {@html content}
    </div>

    <div class="flex fw-wrap">
      {#if author}
        <BlogAuthor
          type="read-more"
          name={author.name}
          link="/blog/authors/{cleanSlug(author.name)}"
          image={author.image}
          about={author.about}
        />
      {/if}
    </div>
  </div>
</div>

<h4>Comments</h4>

{#if comments}
  {#if comments.length}
    {#each comments as comment}
      <div>
        <span>{comment.authorName || ''}</span>
        <span>{fromIso(comment.createdOn)}</span>
        <div>{comment.comment}</div>
        {#if $authenticated && comment.author === $authenticated.uid}
          <Button on:click={() => editComment(comment)} label="Edit" />
          <Button on:click={() => deleteComment(comment)} label="Delete" />
        {/if}
      </div>
      {#if hasMore}
        <Button on:click={loadComments} loading={commentsLoading}>Load more</Button>
      {/if}
    {/each}
  {:else}
    <p>No comments yet</p>
  {/if}
{:else}
  <p>comments loading</p>
{/if}
<Button on:click={openDialog} label="Add a comment" />

<Dialog bind:showing={commentDialog}>
  {#if $authenticated}
    <form on:submit|preventDefault={saveComment}>
      <textarea bind:value={comment} rows="5" required placeholder="Add a comment" />
      <Button type="submit" {loading} label="Save" />
    </form>
  {:else}
    <p>Sign in to comment</p>
    <Button href="/sign-in?forward={encodeURIComponent($page.url.pathname)}" label="Sign In" />
  {/if}
</Dialog>

<Recaptcha bind:verify={recaptchaVerify} />
