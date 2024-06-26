export function formatEmail(email: string) {
  const formated = email.toLowerCase().trim();

  const [em, domain] = formated.split('@');

  return [em.replace(/\./g, ''), domain].join('@');
}
