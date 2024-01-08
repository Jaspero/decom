import { getThumb } from '$lib/utils/get-thumb';
import type { ProductInfo } from '$lib/types/product/product-info.interface';
import type { ProductReviews } from '$lib/types/product/product-reviews.interface';
import { firestore } from '$lib/utils/firebase-admin';

let _data: {
  product: ProductInfo;
  reviews: ProductReviews[];
};

async function product(productId: string) {
  const fs = firestore;

  const productDoc = await fs.collection('products').doc(productId).get();
  const productData = productDoc.data();

  if (productData) {
    if (productData.image) {
      productData.thumb = getThumb(productData.image, 'thumb_s_');
      productData.image = getThumb(productData.image, 'thumb_m_');
    }

    // Add the product ID to the productData
    productData.id = productDoc.id;

    const reviewsCollectionRef = fs.collection('products').doc(productId).collection('reviews');
    const reviewsQuerySnapshot = await reviewsCollectionRef.get();
    const reviewsData = reviewsQuerySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    reviewsData.forEach((review) => {
      console.log(review);
    });

    return { product: productData, reviews: reviewsData };
  }

  return null;
}


export async function productData(id: string) {
  if (_data) {
    return _data;
  }

  _data = await product(id);

  return _data;
}
