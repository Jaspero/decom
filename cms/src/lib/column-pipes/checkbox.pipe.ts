export function checkboxPipe(collection: string, key: string) {
  return (id: string, row: any) =>
    `<column-toggle id="${id}" collection="${collection}" key="${key}" value="${row[key]}"></column-toggle>`;
}
