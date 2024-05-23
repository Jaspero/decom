import Stripe from 'stripe';

export const stripeInstance = new Stripe('', {apiVersion: '2024-04-10'});
