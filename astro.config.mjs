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
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/TapuzH/SFLS-docs'
				},
				{
					icon: 'information',
					label: '学校官网',
					href: 'https://sfls.cn'
				}
			],
			sidebar: [
				{ label: '总则', link: "/main" },
				{
					label: '灯光与灯控台',
					autogenerate: { directory: 'lighting' },
				}
			],
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN', // lang 是 root 语言必须的
				},
			},
		}),
	],
});
