import vikeReact from 'vike-react/config';
import type { Config } from 'vike/types';
import Head from './HeadDefault.js';
import Layout from './LayoutDefault.js';

// Default config (can be overridden by pages)
export default {
	Layout,
	Head,

	// <title>
	title: 'My Vike App',
	extends: vikeReact
} satisfies Config;
