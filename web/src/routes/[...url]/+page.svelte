<script lang="ts">
  import { classList } from '$lib/actions/class-list';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { meta } from '$lib/meta/meta.store';

  export let data: {
    content: string;
    title: string;
    image?: string;
    meta: {
      description: string;
      keywords: string;
      structured: string;
      title?: string;
    };
    renderLayout?: boolean;
  };

  const classes: string[] = [];

  meta.set({ title: data.title, ...data.meta });

  if (!data.renderLayout) {
    classes.push('standalone');
  }

  if (browser) {
    pageSetup();
  }

  function pageSetup() {
    let first = true;

    page.subscribe((page) => {
      document.querySelectorAll<HTMLAnchorElement>('[data-pblink]').forEach((el) => {
        const containes = el.classList.contains('active');
        const href = el.getAttribute('href');

        if (containes && href !== page.url.pathname) {
          el.classList.remove('active');
        } else if (!containes && href === page.url.pathname) {
          el.classList.add('active');
        }
      });

      if (!first) {
        meta.set({ title: data.title, ...data.meta });
      }

      first = false;
    });
  }
</script>

{@html data.content}

<svelte:body use:classList={classes} />
