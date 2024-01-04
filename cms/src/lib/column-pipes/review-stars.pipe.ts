export function reviewStarsPipe() {
  return (averageRating: number) =>
    `<review-star-rating value="${averageRating}"></review-star-rating>`;
}

