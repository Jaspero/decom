export function toStripeFormat(amount: number) {
  return parseFloat((amount * 100).toFixed(0));
}
