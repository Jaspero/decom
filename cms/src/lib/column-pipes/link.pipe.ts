export function linkPipe() {
  return (value: string) => {
    if (value) {
      return `<a href="${value}" target="_blank" rel="noreferrer noopener" style="text-decoration: underline">${value}</a>`;
    }
    return '-';
  };
}
