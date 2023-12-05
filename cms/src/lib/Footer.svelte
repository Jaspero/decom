<script lang="ts">
  import Link from '$lib/Link.svelte';
</script>

<footer
  class="border-t border-t-primary-200 px-4 py-12 flex flex-col items-center gap-4 text-center"
>
  <Link href="/legal/terms-and-conditions">Terms & Conditions</Link>
  <p>
    © {new Date().getFullYear()} GlycanAge. All rights reserved. For any inquires, contact <Link
      href="mailto:info@glycanage.com">info@glycanage.com</Link
    >
  </p>
</footer>
