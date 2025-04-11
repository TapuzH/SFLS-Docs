// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import starlightKbd from 'starlight-kbd'
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightThemeRapide(),
				starlightKbd({
					globalPicker: false,
					types: [
						{ id: 'ma2', label: 'grandMA2', default: true },
					],
				}),
				starlightSidebarTopics([
					{
						label: '总则',
						link: '/main',
						icon: 'open-book',
						items: [
							{
								label: '文档库使用指南',
								autogenerate: { directory: 'overview' },
							},
						],
					},
					{
						label: '灯光与灯控台',
						link: '/lighting/overview',
						icon: 'seti:smarty',
						items: [
							{
								label: '基础灯光知识',
								autogenerate: { directory: 'lighting/basic' },
							},
							{
								label: '灯控台操作指南',
								autogenerate: { directory: 'lighting/console' },
							},
						],
					},
					{
						label: '麦克风与调音台',
						link: '/audio/overview',
						icon: 'seti:audio',
						items: [
							{
								label: '基础音频知识',
								autogenerate: { directory: 'audio/knowledge' },
							},
						],
					},
					{
						label: 'LED大屏与播控',
						link: '/screen_and_media/overview',
						icon: 'laptop',
						items: [
							{
								label: '基础播控知识',
								autogenerate: { directory: 'screen_and_media/knowledge' },
							},
						],
					},
					{
						label: '直播、转播与摄像机',
						link: '/livestream/overview',
						icon: 'rss',
						items: [
							{
								label: '基础直播知识',
								autogenerate: { directory: 'livestream/knowledge' },
							},
						],
					},
				]),
			],
			title: '上外附中技术档案库',
			logo: {
				light: './src/assets/logo-name-blue.png',
				dark: './src/assets/logo-white.png',
				replacesTitle: true,
			},
			customCss: [
				'./src/styles/custom.css',
			],
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
			// sidebar: [
			// 	{ label: '总则', link: "/main" },
			// 	{
			// 		label: '灯光与灯控台',
			// 		autogenerate: { directory: 'lighting' },
			// 	},
			// 	{
			// 		label: '麦克风与调音台',
			// 		autogenerate: { directory: 'audio' },
			// 	},
			// 	{
			// 		label: 'LED大屏与播控',
			// 		autogenerate: { directory: '' }
			// 	}
			// ],
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN', // lang 是 root 语言必须的
				},
			},
			components: {
				// Override the default `Sidebar` component with a custom one.
				// Sidebar: './src/components/Sidebar.astro',
			},
		}),
	],
});
