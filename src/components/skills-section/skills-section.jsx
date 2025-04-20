import styles from './skills-section.module.css'

export default function SkillsSection() {
  return (
		<section className={styles['skills-section']}>
			<h2 className={styles['skills-section__heading']}>Специализация</h2>
			<div className={styles['skills-section__container']}>
				<div className={styles['skills-section__card']}>
					<ul className={styles['skills-section__card-list']}>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/skills/dokumentirovaniye-programmnykh-produktov'>Документирование программных продуктов</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/skills/sozdaniye-kontenta'>Создание контента для интерфейсов и баз знаний</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/skills/sostavleniye-yuridicheskikh-dokumentov'>Составление юридических документов</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/skills/razrabotka-saytov-s-dokumentatsiyey'>Разработка сайтов с документацией</a></li>
					</ul>
					<a href='/skills'>Подробнее →</a>
				</div>
			</div>
		</section>
  )
}