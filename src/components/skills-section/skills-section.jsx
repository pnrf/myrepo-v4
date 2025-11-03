import styles from './skills-section.module.css'

export default function SkillsSection() {
  return (
		<section className={styles['skills-section']}>
			<h2 className={styles['skills-section__heading']}>Умения и навыки</h2>
			<div className={styles['skills-section__container']}>
				<div className={styles['skills-section__card']}>
					<ul className={styles['skills-section__card-list']}>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/about/software-documentation-development'>Документирование программ и систем</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/about/wiki-content-development'>Разработка и ведение баз знаний (wiki)</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/about/legal-documents-development'>Составление юридических документов</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/about/documents-publishing'>Вёрстка и публикация документов в сети</a></li>
					</ul>
					<a href='/about'>Обо мне →</a>
				</div>
			</div>
		</section>
  )
}