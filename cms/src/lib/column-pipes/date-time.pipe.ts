export function dateTimePipe(value: number) {
  return new Date(value).toLocaleString();
}
