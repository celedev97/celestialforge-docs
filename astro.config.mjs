// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://celedev97.github.io',
	base: '/celestialforge-docs',
	integrations: [
		starlight({
			title: 'CelestialForge Docs',
			logo: { src: './src/assets/logo.webp' },
			sidebar: [
				{ label: 'Skill System', items: [{ autogenerate: { directory: 'skill-system' } }] },
			],
		}),
	],
});
