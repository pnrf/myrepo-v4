import styles from './portfolio-section.module.css'

export default function PortfolioSection() {
  return (
		<section className={styles['portfolio-section']}>
			<h2 className={styles['portfolio-section__heading']}>Портфолио</h2>
			<div className={styles['portfolio-section__container']}>
				<div className={`${styles['portfolio-section__card']}`}>
					<h3 className={styles['portfolio-section__card-title']}>Проекты</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='portfolio/projects/razrabotka-ii-servisov'>Разработка ИИ-сервисов</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='portfolio/projects/razrabotka-meditsinskoy-infosistemy'>Проектирование инфосистемы</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='portfolio/projects/registratsiya-po-v-reyestre-mintsifry'>Регистрация ПО в Минцифры</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='portfolio/projects/registratsiya-po-v-roszdravnadzore'>Регистрация ПО в Росздравнадзоре</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='portfolio/projects/registratsiya-po-v-rospatente'>Регистрация ПО в Роспатенте</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='portfolio/projects/uchastiye-v-grantovykh-konkursakh'>Участие в грантовых конкурсах</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='portfolio/projects/podgotovka-k-uchastiyu-v-goszakupkakh'>Подготовка к участию в госзакупках</a></li>
						</ul>
						<a href='/portfolio/projects'>Все проекты →</a>
					</div>
				</div>
				<div className={styles['portfolio-section__card']}>
					<h3 className={styles['portfolio-section__card-title']}>Документы</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/rukovodstvo-po-ekspluatatsii-po'>Руководство по эксплуатации ↗</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/opisaniye-protsessov-zhiznennogo-tsikla'>Описание жизненного цикла ↗</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/opisaniye-funktsionalnykh-kharakteristik'>Описание характеристик ПО ↗</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/obrazets-litsenzionnogo-dogovora'>Лицензионный договор ↗</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/tekhnicheskiye-usloviya'>Технические условия (ТУ) ↗</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/tekhnicheskiye-zadaniya-na-programmnyy-kompleks'>Технические задания (ТЗ, ЧТЗ) ↗</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/dorozhnaya-karta-po-uchastiyu-v-konkurse'>Дорожная карта конкурса</a></li>
						</ul>
						<a href='/portfolio/docs'>Все документы →</a>
					</div>
				</div>
			</div>
		</section>
  )
}