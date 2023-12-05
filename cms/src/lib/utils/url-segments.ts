export function urlSegments(pathname: string) {
  return pathname
    .split('/')
    .filter(Boolean)
    .map((value) => ({
      label: value
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      value
    }));
}
