export function mailtoPipe() {
  return (value: string) => {
    if (value) {
      return `<a href="mailto:${value}" style="text-decoration: underline">${value}</a>`;
    }
    return '-';
  };
}
