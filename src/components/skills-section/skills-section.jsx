import styles from './skills-section.module.css'

export default function SkillsSection() {
  return (
		<section className={styles['skills-section']}>
			<h2 className={styles['skills-section__heading']}>Умения и навыки</h2>
			<div className={styles['skills-section__container']}>
				<div className={styles['skills-section__card']}>
					<ul className={styles['skills-section__card-list']}>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/about/dokumentirovaniye-programmnykh-produktov'>Документирование программных продуктов</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/about/sozdaniye-kontenta'>Управление знаниями о продукте</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/about/sostavleniye-yuridicheskikh-dokumentov'>Составление юридических документов</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/about/razrabotka-saytov'>Публикация документации в сети</a></li>
					</ul>
					<a href='/about'>Обо мне →</a>
				</div>
			</div>
		</section>
  )
}