import { writable } from 'svelte/store';
import type { Meta } from './meta.interface';
import { CONFIG } from '../consts/config.const';

export const META_SUFFIX = ` | ${CONFIG.title}`;

export const meta = writable<Meta>({ title: 'Home' });
