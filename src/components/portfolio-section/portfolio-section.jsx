import styles from './portfolio-section.module.css'

export default function PortfolioSection() {
  return (
		<section className={styles['portfolio-section']}>
			<h2 className={styles['portfolio-section__heading']}>Портфолио</h2>
			<div className={styles['portfolio-section__container']}>
				<div className={styles['portfolio-section__card']}>
					<h3 className={styles['portfolio-section__card-title']}>Документы</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/life-cycle-description'>Описание жизненного цикла</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/functional-characteristics-description'>Описание характеристик ПО</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/user-manual'>Руководство по эксплуатации</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/technical-requirements'>Технические условия (ТУ)</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/technical-specification'>Техническое задание (ТЗ)</a></li>
						</ul>
						<a href='/portfolio'>Все документы →</a>
					</div>
				</div>
				<div className={styles['portfolio-section__card']}>
					<h3 className={styles['portfolio-section__card-title']}>Продукты</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/products/movies-explorer'>Веб-приложение Movies Explorer</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/products/ai-services'>ИИ-сервисы для лучевой диагностики</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/products/mis'>Информационная система медцентра</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/products/portfolio-website'>Сайт-портфолио "Мой репозиторий"</a></li>
						</ul>
						<a href='/portfolio'>Все продукты →</a>
					</div>
				</div>
				{/* <div className={styles['portfolio-section__card']}>
					<h3 className={styles['portfolio-section__card-title']}>Проекты</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/projects/proyektirovaniye-mis'>Проектирование медицинской системы</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/projects/dokumentirovaniye-ii-servisov'>Документирование ИИ-сервисов</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='#'>Проектирование программного комплекса</a></li>
						</ul>
						<a href='/portfolio/projects'>Все проекты →</a>
					</div>
				</div>
				<div className={`${styles['portfolio-section__card']} ${styles['portfolio-section__card_highlight']}`}>
					<h3 className={`${styles['portfolio-section__card-title']} ${styles['portfolio-section__card-title_highlight']}`}>База знаний</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link-highlight']} href='/knowledge-base/concepts/bem'>Концепции</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link-highlight']} href='/knowledge-base/standards/gost-2'>Нормативы</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link-highlight']} href='/knowledge-base/services/can-i-include'>Сервисы</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link-highlight']} href='/knowledge-base/technologies/api'>Технологии</a></li>
						</ul>
						<a href='/knowledge-base'>К содержанию →</a>
					</div>
				</div> */}
			</div>
		</section>
  )
}