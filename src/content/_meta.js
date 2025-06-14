export default {
	index: {
		title: 'Главная',
		type: 'page',
		display: 'hidden',
		theme: {
			layout: 'full',
			pagination: false,
			timestamp: false,
			toc: false,
			sidebar: false
		}
	},
	about: {
		title: 'Обо мне',
		type: 'page',
		theme: {
			pagination: false,
			sidebar: true
		}
	},
	portfolio: {
		title: 'Портфолио',
		type: 'page'
	},
	'knowledge-base': {
		title: 'База знаний',
		type: 'page'
	},
	blog: {
		title: 'Блог',
		type: 'page'
	},
	faq: {
		title: 'FAQ',
		type: 'page'
	},
	contacts: {
		title: 'Контакты',
		display: 'hidden',
		theme: {
			breadcrumb: false,
			pagination: false,
			sidebar: false,
			timestamp: false,
			toc: false
		}
	}
}