import styles from './portfolio-section.module.css'

export default function PortfolioSection() {
  return (
		<section className={styles['portfolio-section']}>
			<h2 className={styles['portfolio-section__heading']}>Личные проекты</h2>
			<div className={styles['portfolio-section__container']}>

				<article className={styles['portfolio-section__card']}>
					<a href='/portfolio/docs-on-demand'>
						<h3 className={styles['portfolio-section__card-title']}>Документы на заказ</h3>
						<p className={styles['portfolio-section__card-list-item']}>Оптимизирую процесс заказной разработки технической и юридической документации</p>
					</a>
				</article>

				<article className={`${styles['portfolio-section__card']} ${styles['portfolio-section__card_highlight']}`}>
					<a href='/portfolio/docs-as-code'>
						<h3 className={`${styles['portfolio-section__card-title']} ${styles['portfolio-section__card-title_highlight']}`}>Docs-As-Code</h3>
						<p className={styles['portfolio-section__card-list-item']}>Изучаю новые технологии для автоматизации процесса документирования</p>
					</a>
				</article>

				<article className={styles['portfolio-section__card']}>
					<a href='/portfolio/ui-components'>
						<h3 className={styles['portfolio-section__card-title']}>UI-компоненты</h3>
						<p className={styles['portfolio-section__card-list-item']}>Разрабатываю и тестирую UI-компоненты в сервисе Storybook</p>
					</a>
				</article>

				<article className={`${styles['portfolio-section__card']} ${styles['portfolio-section__card_highlight']}`}>
					<a href='/portfolio/portfolio-website/about-project'>
						<h3 className={`${styles['portfolio-section__card-title']} ${styles['portfolio-section__card-title_highlight']}`}>Мой репозиторий</h3>
						<p className={styles['portfolio-section__card-list-item']}>Разрабатываю для себя сайт-портфолио с базой знаний и блогом</p>
					</a>
				</article>

				<article className={`${styles['portfolio-section__card']} ${styles['portfolio-section__card_highlight']}`}>
					<a href='/portfolio/second-brain'>
						<h3 className={`${styles['portfolio-section__card-title']} ${styles['portfolio-section__card-title_highlight']}`}>Второй мозг</h3>
						<p className={styles['portfolio-section__card-list-item']}>Веду домашнюю базу знаний в Obsidian. Применяю концепции Second Brain и P.A.R.A.</p>
					</a>
				</article>

				<article className={styles['portfolio-section__card']}>
					<a href='/portfolio/python-study'>
						<h3 className={styles['portfolio-section__card-title']}>Изучение Python</h3>
						<p className={styles['portfolio-section__card-list-item']}>Осваиваю Python и основные библиотеки для сбора, анализа и визуализации данных</p>
					</a>
				</article>

				<article className={styles['portfolio-section__card']}>
					<a href='/portfolio/book-of-stories'>
						<h3 className={styles['portfolio-section__card-title']}>Сборник историй</h3>
						<p className={styles['portfolio-section__card-list-item']}>Оформил сборник историй технических писателей "Как войти в профессию"</p>
					</a>
				</article>

				<article className={styles['portfolio-section__card']}>
					<a href='/portfolio/movies-explorer/about-project'>
						<h3 className={styles['portfolio-section__card-title']}>Movies Explorer</h3>
						<p className={styles['portfolio-section__card-list-item']}>Сделал веб-приложение с личным кабинетом. Дипломный проект в Яндекс Практикуме</p>
					</a>
				</article>

				<article className={styles['portfolio-section__card']}>
					<a href='/portfolio/draft-laws'>
						<h3 className={styles['portfolio-section__card-title']}>Законопроекты</h3>
						<p className={styles['portfolio-section__card-list-item']}>Участвовал в качестве гражданского эксперта в разработке законопроектов (Сколково)</p>
					</a>
				</article>

				<article className={styles['portfolio-section__card']}>
					<a href='/portfolio/legal-practice'>
						<h3 className={styles['portfolio-section__card-title']}>Юридическая практика</h3>
						<p className={styles['portfolio-section__card-list-item']}>Занимался частной юридической практикой. Арендовал офис в Москва-Сити</p>
					</a>
				</article>
			</div>
		</section>
  )
}