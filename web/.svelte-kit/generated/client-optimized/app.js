export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')
];

export const server_loads = [];

export const dictionary = {
		"/blog": [~3],
		"/blog/authors": [~7],
		"/blog/authors/[id]": [~8],
		"/blog/page/[page]": [~9],
		"/blog/[category]": [~4],
		"/blog/[category]/page/[page]": [~6],
		"/blog/[category]/[id]": [~5],
		"/sitemap-hidden": [~10],
		"/[...url]": [~2]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';