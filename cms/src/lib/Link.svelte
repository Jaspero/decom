<script lang="ts">
  export let href: string;
  export let hreflang: string | null = null;
  export let target: '_blank' | '_self' | '_parent' | '_top' | null = null;
  export let rel:
    | 'alternate' /* Link to an alternative page (ex. translated page) */
    | 'author' /* Link to the author of the document */
    | 'bookmark' /* Useless */
    | 'external' /* Indicates that the referenced document is not part of the same site as the current document */
    | 'help' /* Provides a link to a help document */
    | 'license' /* Provides a link to licensing information for the document */
    | 'next' /* Provides a link to the next document in the series */
    | 'prev' /* The previous document in a selection */
    | 'nofollow' /* Use the nofollow value when other values don't apply, and you'd rather Google not associate your site with, or crawl the linked page from, your site. */
    | 'noopener noreferrer' /* When linking to an external website, using noopener and noreferrer improves user privacy and security */
    | 'search' /* Links to a search tool for the document */
    | 'tag'
    | null =
    null; /* Specifies that the linked page contains the tag, keyword, or subject of the current page. */
  export let download: boolean | null = null;

  export let color: 'orange' | 'blue' = 'orange';
</script>

<a {href} {hreflang} {target} {rel} {download} class="color-{color}">
  <slot />
</a>

<style lang="postcss">
  a {
    @apply text-secondary font-bold underline inline;
  }

  .color-secondary {
    @apply text-secondary;
  }

  .color-blue {
    @apply text-blue-500;
  }
</style>
