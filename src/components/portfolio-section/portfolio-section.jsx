import styles from './portfolio-section.module.css'

export default function PortfolioSection() {
  return (
		<section className={styles['portfolio-section']}>
			<h2 className={styles['portfolio-section__heading']}>Проекты</h2>
			<div className={styles['portfolio-section__container']}>

				<article className={styles['portfolio-section__card']}>
					<a href='/portfolio/corp-wiki'>
						<h3 className={styles['portfolio-section__card-title']}>Корпоративная wiki</h3>
						<p className={styles['portfolio-section__card-list-item']}>База знаний для аналитиков, Data Scientists и разработкиков</p>
					</a>
				</article>

				<article className={styles['portfolio-section__card']}>
					<a href='/portfolio/llm'>
						<h3 className={styles['portfolio-section__card-title']}>Large Language Model</h3>
						<p className={styles['portfolio-section__card-list-item']}>Большая языковая модель, адаптированная для научно-технической сферы</p>
					</a>
				</article>

				<article className={styles['portfolio-section__card']}>
					<a href='/portfolio/mis/about-project'>
						<h3 className={styles['portfolio-section__card-title']}>Медицинская инфосистема</h3>
						<p className={styles['portfolio-section__card-list-item']}>Комплексная информационная система медицинского центра</p>
					</a>
				</article>

				<article className={styles['portfolio-section__card']}>
					<a href='/portfolio/ai-services/about-project'>
						<h3 className={styles['portfolio-section__card-title']}>ИИ-сервисы в MedTech</h3>
						<p className={styles['portfolio-section__card-list-item']}>Сервисы искусственного интеллекта для лучевой диагностики (компьютерное зрение)</p>
					</a>
				</article>

				<article className={styles['portfolio-section__card']}>
					<a href='/portfolio/portfolio-website/about-project'>
						<h3 className={styles['portfolio-section__card-title']}>Мой репозиторий</h3>
						<p className={styles['portfolio-section__card-list-item']}>Сайт-портфолио технического писателя с базой знаний и техноблогом</p>
					</a>
				</article>

				<article className={`${styles['portfolio-section__card']} ${styles['portfolio-section__card_highlight']}`}>
					<a href='/portfolio/movies-explorer/about-project'>
						<h3 className={`${styles['portfolio-section__card-title']} ${styles['portfolio-section__card-title_highlight']}`}>Movies Explorer</h3>
						<p className={styles['portfolio-section__card-list-item']}>Веб-приложение с личным кабинетом для просмотра каталога фильмов</p>
					</a>
				</article>
			</div>
		</section>
  )
}