export default {
	index: {
		title: 'Обо мне',
		type: 'page',
		theme: {
			layout: 'full',
			pagination: false,
			timestamp: false,
			toc: false
		}
	},
	portfolio: {
		title: 'Портфолио',
		type: 'menu',
    items: {
      projects: {
        title: '→ Проекты',
        href: '/projects'
			},
			docs: {
        title: '→ Документы',
        href: '/docs'
			}
		}
	},
		skills: {
		title: 'Навыки',
		type: 'menu',
    items: {
			'moya-spetsializatsiya': {
        title: '→ Моя специализация',
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
	projects: {
		title: 'Проекты',
		display: 'hidden'
	},
	docs: {
		title: 'Документы',
		display: 'hidden'
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