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
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/rukovodstvo-po-ekspluatatsii-po'>Руководство по эксплуатации</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/opisaniye-protsessov-zhiznennogo-tsikla'>Описание жизненного цикла</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/opisaniye-funktsionalnykh-kharakteristik'>Описание характеристик ПО</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/obrazets-litsenzionnogo-dogovora'>Лицензионный договор</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/tekhnicheskiye-usloviya'>Технические условия (ТУ)</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/tekhnicheskiye-zadaniya-na-programmnyy-kompleks'>Технические задания (ТЗ, ЧТЗ)</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/dorozhnaya-karta-po-uchastiyu-v-konkurse'>Дорожная карта конкурса</a></li>
						</ul>
						<a href='/portfolio/docs'>Все документы →</a>
					</div>
				</div>
				<div className={styles['portfolio-section__card']}>
					<h3 className={styles['portfolio-section__card-title']}>Продукты</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/products/mis'>Медицинская инфосистема</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/products/ai-services'>ИИ-сервисы для медицины</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/products/portfolio-website'>Мой репозиторий</a></li>
							{/* <li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/products/nextra/about-nextra'>Nextra 3.x</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/products/movies-explorer'>Movies Explorer</a></li> */}
						</ul>
						<a href='/portfolio/products'>Все продукты →</a>
					</div>
				</div>
				<div className={styles['portfolio-section__card']}>
					<h3 className={styles['portfolio-section__card-title']}>Проекты</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/projects/proyektirovaniye-mis'>Проектирование инфосистемы</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/projects/dokumentirovaniye-ii-servisov'>Регистрация ИИ-сервисов в реестрах</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/projects/dokumentirovaniye-ii-servisov'>Разработка сайта-портфолио</a></li>
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
				</div>
			</div>
		</section>
  )
}