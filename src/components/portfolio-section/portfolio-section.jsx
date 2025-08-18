import styles from './portfolio-section.module.css'

export default function PortfolioSection() {
  return (
		<section className={styles['portfolio-section']}>
			<h2 className={styles['portfolio-section__heading']}>Портфолио</h2>
			<div className={styles['portfolio-section__container']}>

				<div className={styles['portfolio-section__card']}>
					<h3 className={styles['portfolio-section__card-title']}>Инфосистема</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<p className={styles['portfolio-section__card-list-item']}>Комплексная информационная система медицинского центра</p>
							<br />
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/mis/about-project'>Описание проекта</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/mis/intro'>Описание инфосистемы</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/mis/normatives'>Перечень нормативов</a></li>
						</ul>
					</div>
				</div>

				<div className={styles['portfolio-section__card']}>
					<h3 className={styles['portfolio-section__card-title']}>ИИ-сервисы</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<p className={styles['portfolio-section__card-list-item']}>Сервисы искусственного интеллекта для лучевой диагностики</p>
							<br />
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/ai-services/about-project'>Описание проекта</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/ai-services/intro'>Описание ИИ-сервиса</a></li>
							<li className={`${styles['portfolio-section__card-list-item']} ${styles['portfolio-section__card-list-item_highlight']}`}><a className={styles['portfolio-section__link']} href='/portfolio/ai-services/documents-list'>Примеры документов</a></li>
						</ul>
					</div>
				</div>

				<div className={styles['portfolio-section__card']}>
					<h3 className={styles['portfolio-section__card-title']}>Мой репозиторий</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<p className={styles['portfolio-section__card-list-item']}>Сайт-портфолио технического писателя с базой знаний и блогом</p>
							<br />
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/portfolio-website/about-project'>Описание проекта</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/portfolio-website/intro'>Описание сайта</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/portfolio-website/technical-specification'>Техническое задание</a></li>
						</ul>
					</div>
				</div>

				<div className={`${styles['portfolio-section__card']} ${styles['portfolio-section__card_highlight']}`}>
					<h3 className={`${styles['portfolio-section__card-title']} ${styles['portfolio-section__card-title_highlight']}`}>Movies Explorer</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<p className={styles['portfolio-section__card-list-item']}>Веб-приложение с личным кабинетом для просмотра каталога фильмов</p>
							<br />
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link-highlight']} href='/portfolio/movies-explorer/about-project'>Описание проекта</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link-highlight']} href='/portfolio/movies-explorer/intro'>Описание веб-приложения</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link-highlight']} href='/portfolio/movies-explorer/api-specification'>Описание REST API</a></li>
						</ul>
					</div>
				</div>

				{/* <div className={styles['portfolio-section__card']}>
					<h3 className={styles['portfolio-section__card-title']}>Movies Explorer</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<p className={styles['portfolio-section__card-list-item']}>Веб-приложение с личным кабинетом для просмотра каталога фильмов</p>
							<br />
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link-highlight']} href='/portfolio/movies-explorer/about-project'>Описание проекта</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link-highlight']} href='/portfolio/movies-explorer/intro'>Описание веб-приложения</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link-highlight']} href='/portfolio/movies-explorer/api-specification'>Описание API</a></li>
						</ul>
					</div>
				</div> */}

				{/* <div className={styles['portfolio-section__card']}>
					<h3 className={styles['portfolio-section__card-title']}>UI-компоненты</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<p className={styles['portfolio-section__card-list-item']}>Документация по веб-компонентам в Storybook.js.org</p>
							<br />
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='#'>Описание проекта</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='#'>Ссылка на документацию</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='#'>Ссылка на программный код</a></li>
						</ul>
					</div>
				</div>

				<div className={`${styles['portfolio-section__card']} ${styles['portfolio-section__card_highlight']}`}>
					<h3 className={`${styles['portfolio-section__card-title']} ${styles['portfolio-section__card-title_highlight']}`}>Подборки</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<p className={styles['portfolio-section__card-list-item']}>Сборник материалов для быстрого к ним доступа и просмотра</p>
							<br />
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link-highlight']} href='#'>Технические документы</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link-highlight']} href='#'>Юридические документы</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link-highlight']} href='#'>Схемы и диаграммы</a></li>
						</ul>
					</div>
				</div> */}

			</div>
		</section>
  )
}