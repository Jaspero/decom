export function paginateArray<T = any>(arr: T[], size = 10) {
  const pages = [];

  let pageSize = 0;
  let items = [...arr];

  while (items.length) {
    pages.push(items.splice(0, size));
    pageSize++;
  }

  return {
    pageSize,
    pages
  };
}
