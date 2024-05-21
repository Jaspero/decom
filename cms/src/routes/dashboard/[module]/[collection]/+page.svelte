<script lang="ts">
  import CommonDataTablePage from '$lib/common/CommonDataTablePage.svelte';
  import type { CommonDataTablePageData } from '$lib/common/common-data-table-page';

  export let data: CommonDataTablePageData;
</script>

<CommonDataTablePage {data} />
