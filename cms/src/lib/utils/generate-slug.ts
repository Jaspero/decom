export function generateSlug(value: string) {
  if (!value) {
    return '';
  }

  let r = value.trim().replace(/ /g, '-').toLowerCase();

  [
    { value: 'č', replace: 'c' },
    { value: 'ć', replace: 'c' },
    { value: 'ž', replace: 'z' },
    { value: 'đ', replace: 'd' },
    { value: 'š', replace: 's' }
  ].forEach((e) => (r = r.replace(new RegExp(e.value, 'g'), e.replace)));

  return r.replace(/[^A-Za-z0-9\-\_]+/g, '');
}
