export function reviewStarsPipe() {
  return (averageRating: number) =>
    `<jp-review-star-rating value="${averageRating}"></jp-review-star-rating>`;
}

