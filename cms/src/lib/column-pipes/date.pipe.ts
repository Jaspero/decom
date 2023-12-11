export function datePipe(value: number) {
  return new Date(value).toLocaleDateString();
}
