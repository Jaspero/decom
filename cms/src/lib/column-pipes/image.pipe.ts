export function imagePipe() {
  return (value) =>
    `<img src="${
      value || '/images/placeholder.png'
    }" style="width: 40px; height: 40px; object-fit: cover" />`;
}
