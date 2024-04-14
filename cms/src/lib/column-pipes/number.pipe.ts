const formater = new Intl.NumberFormat();

export function numberPipe(value: number) {
  return formater.format(value);
}
