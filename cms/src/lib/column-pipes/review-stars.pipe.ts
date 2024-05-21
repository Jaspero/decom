export function reviewStarsPipe() {
  return (averageRating: number) =>
    `<jp-review-star-rating value="${averageRating}" starsInput="{enableStarsInput}"></jp-review-star-rating>`;
}
