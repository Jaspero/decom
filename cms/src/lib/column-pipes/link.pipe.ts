export function linkPipe() {
  return (value) => {
    if (value) {
      return `<a href="${value}" target="_blank" rel="noreferrer noopener" style="text-decoration: underline">${value}</a>`;
    }
    return '-';
  };
}
