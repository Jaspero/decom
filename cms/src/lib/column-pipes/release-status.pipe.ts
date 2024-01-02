export function releaseStatusPipe() {
  return (lastUpdatedOn: number) => `<column-status d="${lastUpdatedOn}"></column-status>`;
}
