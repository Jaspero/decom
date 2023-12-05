export function unflatten(data: any) {
  const result = {};

  for (var i in data) {
    const keys = i.split('/');
    keys.reduce(
      (r: any, e, j) =>
        r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? data[i] : {}) : []),
      result
    );
  }

  return result;
}
