<script lang="ts">
  export let table = false;
</script>

<div class="bg-white overflow-hidden rounded border border-[#D6D6D6]">
  <div class="flex flex-col gap-4 p-6">
    {#if $$slots.title}
      <div class="flex items-center gap-4">
        {#if $$slots.emoji}
          <slot name="emoji" />
        {/if}
        <h1 class="text-2xl font-bold flex-1">
          <slot name="title" />
        </h1>
        {#if $$slots.headerAction}
          <slot name="headerAction" />
        {/if}
      </div>
    {/if}

    {#if $$slots.subtitle}
      <slot name="subtitle" />
    {/if}
  </div>

  {#if $$slots.default}
    <div class:p-6={!table} class:overflow-x-auto={table}>
      <slot />
    </div>
  {/if}

  {#if $$slots.footerAction}
    <div class="flex flex-wrap gap-6 p-6 border-t">
      <slot name="footerAction" />
    </div>
  {/if}
</div>
