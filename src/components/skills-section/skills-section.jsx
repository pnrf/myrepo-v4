import styles from './skills-section.module.css'

export default function SkillsSection() {
  return (
		<section className={styles['skills-section']}>
			<h2 className={styles['skills-section__heading']}>Обо мне</h2>
			<div className={styles['skills-section__container']}>
				<div className={styles['skills-section__card']}>
					<ul className={styles['skills-section__card-list']}>
						<li className={styles['skills-section__card-list-item']}>Документирую программные продукты</li>
						<li className={styles['skills-section__card-list-item']}>Создаю контент для интерфейсов и баз знаний</li>
						<li className={styles['skills-section__card-list-item']}>Составляю юридические документы</li>
						<li className={styles['skills-section__card-list-item']}>Верстаю сайты с документацией</li>
						{/* <li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/about/razrabotka-saytov-s-dokumentatsiyey'>Помогаю публиковать документацию в сети</a></li> */}
					</ul>
					<a href='/about'>Подробнее →</a>
				</div>
			</div>
		</section>
  )
}