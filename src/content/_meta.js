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
	'terms-of-use': {
		title: 'Правила сайта',
		type: 'page',
		display: 'hidden'
	}
}