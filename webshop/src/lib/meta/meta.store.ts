import {writable} from 'svelte/store';

export const META_SUFFIX = ` - Jaspero`;

export const meta = writable<{
	title: string;
	description?: string;
	keywords?: string;
	author?: string;
	structured?: string;
	noIndex?: boolean;
	og?: {
		title?: string;
		description?: string;
		image?: string;
		type?: string;
	}
}>({title: 'Home'});