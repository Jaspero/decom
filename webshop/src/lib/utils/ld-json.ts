export function ldJson(structured?: string) {
  if (structured) {
    return structured.includes('<script')
      ? structured
      : `<script type="application/ld+json">${structured}</script>`;
  }

  return '';
}
