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
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='#'>Разработка ИИ-сервисов</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='#'>Автоматизация процесса разработки</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='#'>Оптимизация процессов документирования</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='#'>Разработка информационной системы</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='#'>Регистрация ПО в реестре Минцифры</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='#'>Регистрация программ в Росреестре</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='#'>Регистрация ПО в Росздравнадзоре</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='#'>Участие в конкурсах на получение гранта</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='#'>Подготовка к участию в госзакупках</a></li>
						</ul>
						<a href='/portfolio/projects'>Все проекты →</a>
					</div>
				</div>
				<div className={styles['portfolio-section__card']}>
					<h3 className={styles['portfolio-section__card-title']}>Документы</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/rukovodstvo-po-ekspluatatsii-po'>Руководство по эксплуатации ПО</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/opisaniye-protsessov-zhiznennogo-tsikla'>Описание процессов жизненного цикла</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/opisaniye-funktsionalnykh-kharakteristik'>Описание функциональных характеристик</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/obrazets-litsenzionnogo-dogovora'>Образец лицензионного договора</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/tekhnicheskiye-usloviya'>Технические условия (ТУ)</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/tekhnicheskiye-zadaniya-na-programmnyy-kompleks'>Технические задания (ТЗ, ЧТЗ)</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/dorozhnaya-karta-po-uchastiyu-v-konkurse'>Дорожная карта по участию в конкурсе</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='/portfolio/docs/sbornik-istoriy-tekhpisateley'>Сборник историй технических писателей</a></li>
						</ul>
						<a href='/portfolio/docs'>Все документы →</a>
					</div>
				</div>
			</div>
		</section>
  )
}