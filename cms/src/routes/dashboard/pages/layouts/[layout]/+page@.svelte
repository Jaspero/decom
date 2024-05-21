<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Button from '$lib/Button.svelte';
  import type FormModule from '$lib/FormModule.svelte';
  import { CONFIG } from '$lib/consts/config.const';
  import PageBuilderHeader from '$lib/page-builder/PageBuilderHeader.svelte';
  import PageBuilderSidebar from '$lib/page-builder/PageBuilderSidebar.svelte';
  import type { PageBuilderForm } from '$lib/page-builder/page-builder-form.interface';
  import type { Popup } from '$lib/page-builder/popup.interface';
  import { renderGrapes } from '$lib/page-builder/render-grapes';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { confirmation } from '$lib/utils/confirmation';
  import { db } from '$lib/utils/firebase';
  import { urlSegments } from '$lib/utils/url-segments';
  import type { ModularView, ModuleRender } from '@jaspero/modular';
  import { random } from '@jaspero/utils';
  import { renderAlert } from '@jaspero/web-components/dist/render-alert.js';
  import { DocumentSnapshot, deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
  import { onMount } from 'svelte';

  export let data: {
    col: string;
    items: any[];
    popups: Popup[];
    metaItems: any[];
    value: any;
    snap?: DocumentSnapshot;
    json?: any;
    forms: PageBuilderForm[];
  };

  let saveLoading = false;
  let formModule: FormModule;
  let pageBuilderEl: HTMLDivElement;
  let grapesInstance: any;
  let navigate = $page.params.id;
  let activeSidebar = 'page-settings';
  let renderedFormModules: {
    [key: string]: {
      view: ModularView;
      render: ModuleRender;
    };
  } = {};

  $: segments = urlSegments($page.url.pathname);
  $: back =
    '/' +
    segments
      .slice(0, segments.length - 1)
      .map((it) => it.value)
      .join('/');

  $: if (navigate) {
    render();
  }
  $: if (formModule) {
    renderedFormModules[formModule.id as string] = {
      render: formModule.render!,
      view: formModule.view!
    };
  }

  async function submit() {
    saveLoading = true;

    let id = data.snap?.id || data.value.id;

    for (const key in renderedFormModules) {
      if (!renderedFormModules[key].render.isValid()) {
        renderAlert({
          title: 'Errr',
          message: `The page isn't valid. Please make sure to fill out all required fields.`,
          state: 'error'
        });
        saveLoading = false;
        return;
      }
    }

    for (const key in renderedFormModules) {
      await renderedFormModules[key].render.save(id);
      await renderedFormModules[key].render.getValue();
    }

    const lastUpdatedOn = new Date().toISOString();

    data.value.lastUpdatedOn = lastUpdatedOn;

    if (!id) {
      id = `lpl-${random.string(24)}`;
    }

    const json = grapesInstance.getProjectData();
    const html = grapesInstance.getHtml();
    const css = grapesInstance.getCss();
    const toUpdate = [
      setDoc(doc(db, data.col, id, 'content', 'json'), json),
      setDoc(doc(db, data.col, id, 'content', 'html'), {
        content: html,
        lastUpdatedOn
      }),
      setDoc(doc(db, data.col, id, 'content', 'css'), { content: css, lastUpdatedOn })
    ];

    if (data.snap) {
      delete data.value.id;

      await alertWrapper(
        Promise.all([updateDoc(data.snap.ref, data.value), ...toUpdate]),
        'Document updated successfully',
        undefined,
        () => (saveLoading = false)
      );
    } else {
      const { id: dId, ...dt } = data.value;

      await alertWrapper(
        Promise.all([setDoc(doc(db, data.col, id), dt), ...toUpdate]),
        'Document created successfully',
        undefined,
        () => (saveLoading = false)
      );
    }

    saveLoading = false;

    goto(back);
  }

  function deleteItem() {
    confirmation(async ({ confirmed }) => {
      if (!confirmed) {
        return;
      }

      await alertWrapper(deleteDoc(doc(db, data.col, data.value.id)), `Item deleted successfully`);

      goto(back);
    });
  }

  function render() {
    grapesInstance = renderGrapes(
      pageBuilderEl,
      grapesInstance,
      data.json,
      data.popups,
      data.forms
    );
  }

  onMount(() => {
    render();
  });
</script>

<PageBuilderHeader {grapesInstance}>
  <a title="Back" class="material-symbols-outlined" href={back}>arrow_back</a>
</PageBuilderHeader>

<section>
  <PageBuilderSidebar
    {grapesInstance}
    value={data.value}
    items={data.items}
    popups={data.popups}
    forms={data.forms}
    bind:activeSidebar
    bind:formModule
  />
  <main>
    <div bind:this={pageBuilderEl} />
  </main>
</section>

<footer>
  <div>
    {#if data.snap}
      <Button type="button" color="warn" on:click={deleteItem}>Delete</Button>
    {/if}
    <div class="flex-1" />
    <Button href={back} variant="outlined" color="secondary">Cancel</Button>
    &nbsp;
    <Button
      type="submit"
      form="form"
      variant="filled"
      color="secondary"
      loading={saveLoading}
      on:click={submit}>Save</Button
    >
  </div>
</footer>

<svelte:head>
  <title>Landing Page Layout - {CONFIG.title}</title>
</svelte:head>

<style lang="postcss">
  section {
    height: calc(100vh - 110px);
    display: flex;
  }

  .material-symbols-outlined {
    @apply hover:bg-primary/[8%] duration-200;
    padding: 0.2rem;
  }

  main {
    width: 100%;
    padding: 0.5rem;
  }

  :global(.gjs-cv-canvas) {
    width: 100%;
    height: 100%;
    top: 0;
  }

  footer {
    @apply border-t;
  }

  footer {
    @apply bg-white;
    height: 55px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
  }

  footer > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
</style>
