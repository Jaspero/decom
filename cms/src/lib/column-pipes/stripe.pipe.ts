export function stripePipe() {
  return (value: number, row: any) => {
    if (!value) {
      return '-';
    }

    const formater = new Intl.NumberFormat('en-ie', {
      style: 'currency',
      currency: row.currency
    });

    return formater.format(value / 100);
  };
}
