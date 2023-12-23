<script lang="ts">
  import Button from '$lib/Button.svelte';
  import BlogAuthor from '$lib/blog/BlogAuthor.svelte';
  import {meta} from '$lib/meta/meta.store';
  import type {BlogArticle} from '$lib/types/blog/blog-article.interface';
  import type {BlogComment} from '$lib/types/blog/blog-comment.interface';
  import {authenticated, db} from '$lib/utils/firebase';
  import {fromIso} from '$lib/utils/format-date';
  import {cleanSlug} from '@jaspero/utils';
  import {
    QueryDocumentSnapshot,
    collection,
    getDocs,
    limit,
    orderBy,
    startAt,

    type DocumentData,

    addDoc,

    updateDoc,

    doc




  } from 'firebase/firestore';
  import {onMount} from 'svelte';
  import {alertWrapper} from '$lib/utils/alert-wrapper';
  import type {User} from '$lib/types/user.interface';

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

  meta.set(data.meta);

  function editComment() {}

  function deleteComment() {}

  async function saveComment() {
    loading = true;

    await alertWrapper(
      selectedComment ? 
      updateDoc(
        doc(db, 'blog-articles', data.id, 'blog-comments', selectedComment),
        {comment}
      ) :
      addDoc(
        collection(db, 'blog-articles', data.id, 'blog-comments'),
        {
          author: ($authenticated as User).id,
          comment,
          createdOn: new Date().toISOString()
        }
      ),
      'Comment saved',
      '',
      () => loading = false
    )

    selectedComment = null;
    comment = '';
    loading = false;
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
    comments.push(
      ...docs.slice(0, itemsPerPage).map((doc) => ({ id: doc.id, ...(doc.data() as any) }))
    );
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
        <span>{comment.authorName}</span>
        <span>{fromIso(comment.createdOn)}</span>
        <div>{comment.content}</div>
        {#if $authenticated && comment.author === $authenticated.id}
          <Button on:click={editComment}>Edit</Button>
          <Button on:click={deleteComment}>Delete</Button>
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

{#if $authenticated}
  <form on:submit|preventDefault={saveComment}>
    <textarea bind:value={comment} rows="5" required placeholder="Add a comment" />
    <Button type="submit" {loading}>Save</Button>
  </form>
{:else}
  <p>Sign in to comment</p>
  <Button href="/sign-in">Sign In</Button>
{/if}
