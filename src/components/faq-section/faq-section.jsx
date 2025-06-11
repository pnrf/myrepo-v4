import styles from '../blog-section/blog-section.module.css'

export default function FaqSection() {
  return (
		<section className={styles['blog-section']}>
			<h2 className={styles['blog-section__heading']}>FAQ</h2>
			<div className={styles['blog-section__container']}>
				<div className={styles['blog-section__card']}>
					<ul className={styles['blog-section__card-list']}>
						<li className={styles['blog-section__card-list-item']}><a className={styles['blog-section__link']} href='/faq/qqq'>Чем вы можете нам помочь?</a></li>
						<li className={styles['blog-section__card-list-item']}><a className={styles['blog-section__link']} href='/faq/qqq'>Какой у вас опыт работы в сфере IT?</a></li>
					</ul>
					<a href='/faq'>Ответы на все вопросы →</a>
				</div>
			</div>
		</section>
  )
}
