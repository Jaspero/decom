<script lang="ts">
  import Meta from '$lib/meta/Meta.svelte';
  import '../core.pcss';
  import '../normalize.pcss';
  import '@jaspero/web-components/dist/alert.wc';
  import '@jaspero/web-components/dist/confirm.wc';
  import '@jaspero/web-components/dist/select.wc';
  import '@jaspero/web-components/dist/toggle.wc';
</script>

<slot />

<Meta />
