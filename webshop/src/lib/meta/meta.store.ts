import { writable } from 'svelte/store';
import type { Meta } from './meta.interface';

export const META_SUFFIX = ` - Jaspero`;

export const meta = writable<Meta>({ title: 'Home' });
