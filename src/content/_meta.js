export default {
	index: {
		title: 'Обо мне',
		type: 'page',
		theme: {
			layout: 'full',
			pagination: false,
			timestamp: false,
			toc: false,
			sidebar: false
		}
	},
	portfolio: {
		title: 'Портфолио',
		type: 'page'
	},
	skills: {
		title: 'Навыки',
		type: 'menu',
    items: {
			'index': {
        title: '→ Умения и навыки',
        href: '/skills'
			},
      'dokumentirovaniye-programmnykh-produktov': {
        title: '→ Документирование программных продуктов',
        href: '/skills/dokumentirovaniye-programmnykh-produktov'
			},
			'sozdaniye-kontenta': {
        title: '→ Создание контента для интерфейсов и баз знаний',
        href: '/skills/sozdaniye-kontenta'
			},
      'sostavleniye-yuridicheskikh-dokumentov': {
        title: '→ Составление юридических документов',
        href: '/skills/sostavleniye-yuridicheskikh-dokumentov'
			},
			'razrabotka-saytov-s-dokumentatsiyey': {
        title: '→ Вёрстка сайтов с документацией',
        href: '/skills/razrabotka-saytov-s-dokumentatsiyey'
			}
		}
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