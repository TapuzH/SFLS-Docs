// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import starlightKbd from 'starlight-kbd'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightThemeRapide(),
				starlightKbd({
          				types: [
            					{ id: 'mac', label: 'macOS', default: true },
            					{ id: 'windows', label: 'Windows' },
          				],
        			}),
			],
			title: '上外附中技术档案库',
			social: [{ icon: 'information', label: '官网', href: 'https://www.sfls.cn' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
