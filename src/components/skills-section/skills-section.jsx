import styles from './skills-section.module.css'

export default function SkillsSection() {
  return (
		<section className={styles['skills-section']}>
			<h2 className={styles['skills-section__heading']}>Обо мне</h2>
			<div className={styles['skills-section__container']}>
				<div className={styles['skills-section__card']}>
					<ul className={styles['skills-section__card-list']}>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/about/dokumentirovaniye-programmnykh-produktov'>Документирую программные продукты</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/about/sozdaniye-kontenta'>Создаю контент для интерфейсов и баз знаний</a></li>
						<li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/about/sostavleniye-yuridicheskikh-dokumentov'>Составляю юридические документы</a></li>
						{/* <li className={styles['skills-section__card-list-item']}><a className={styles['skills-section__link']} href='/about/razrabotka-saytov-s-dokumentatsiyey'>Помогаю публиковать документацию в сети</a></li> */}
					</ul>
					<a href='/about'>Подробнее →</a>
				</div>
			</div>
		</section>
  )
}