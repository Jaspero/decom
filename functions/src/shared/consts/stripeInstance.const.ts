import Stripe from 'stripe';
import { ENV_CONFIG } from './env-config.const';

export const stripeInstance = new Stripe(ENV_CONFIG.stripe_key, {apiVersion: '2023-08-16'});
