export default {
	index: {
		title: 'Обо мне',
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
	skills: {
		title: 'Навыки',
		type: 'page'
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