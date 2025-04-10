import styles from './skills-section.module.css'

export default function SkillsSection() {
  return (
		<section className={styles['skills-section']}>
			<h2 className={styles['skills-section__heading']}>Умения и навыки</h2>
			<div className={styles['skills-section__container']}>
				<div className={styles['skills-section__card']}>
					<ul className={styles['skills-section__card-list']}>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='#'>Документирование программных продуктов</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='#'>Публикация технической документации в интернете</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='#'>Создание контента для интерфейсов и баз знаний</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='#'>Составление юридических документов</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='#'>Вёрстка сайтов и веб-приложений по дизайн-макету</a></li>
					</ul>
					<a href='/skills'>Подробнее →</a>
				</div>
			</div>
		</section>
  )
}