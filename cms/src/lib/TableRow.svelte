<tr>
  <slot />
</tr>

<style lang="postcss">
  tr {
    @apply even:bg-fg odd:bg-white;
  }
</style>
