import styles from './skills-section.module.css'

export default function SkillsSection() {
  return (
		<section className={styles['skills-section']}>
			<h2 className={styles['skills-section__heading']}>Умения и навыки</h2>
			<div className={styles['skills-section__container']}>
				<div className={styles['skills-section__card']}>
					<ul className={styles['skills-section__card-list']}>
						<li className={styles['skills-section__card-list-item']}>Документирование программных продуктов</li>
						<li className={styles['skills-section__card-list-item']}>Создание контента для баз знаний (wiki)</li>
						<li className={styles['skills-section__card-list-item']}>Публикация документов в сети (SSG)</li>
						{/* <li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/about/legal-documents-development'>Составление юридических документов</a></li> */}
					</ul>
					<a href='/about'>Обо мне →</a>
				</div>
			</div>
		</section>
  )
}