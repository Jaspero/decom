export function telPipe() {
  return (value: string) => {
    if (value) {
      return `<a href="tel:${value}" style="text-decoration: underline">${value}</a>`;
    }
    return '-';
  };
}
