import styles from './blog-section.module.css'

export default function BlogSection() {
  return (
		<section className={styles['blog-section']}>
			<h2 className={styles['blog-section__heading']}>Блог</h2>
			<div className={styles['blog-section__container']}>
				<div className={styles['blog-section__card']}>
					<ul className={styles['blog-section__card-list']}>
						<li className={styles['blog-section__card-list-item']}><a className={styles['blog-section__link']} href='/blog/articles/kak-rabotat-s-yandex-gpt'>Как работать с YandexGPT</a><span className={styles['blog-section__card-list-item-date']}> – Июнь 01, 2025</span></li>
						<li className={styles['blog-section__card-list-item']}><a className={styles['blog-section__link']} href='/blog/articles/kak-sdelat-sayt-s-tekhnicheskoy-dokumentatsiyey'>Как сделать сайт с документацией (пошаговая инструкция)</a><span className={styles['blog-section__card-list-item-date']}> – Апрель 10, 2025</span></li>
						<li className={styles['blog-section__card-list-item']}><a className={styles['blog-section__link']} href='/blog/articles/zachem-tekhpisatelyu-sayt-portfolio'>Зачем техническому писателю сайт-портфолио</a><span className={styles['blog-section__card-list-item-date']}> – Март 14, 2025</span></li>
						<li className={styles['blog-section__card-list-item']}><a className={styles['blog-section__link']} href='/blog/articles/kto-takoy-tekhnicheskiy-pisatel'>Кто такой технический писатель</a><span className={styles['blog-section__card-list-item-date']}> – Февраль 26, 2025</span></li>
					</ul>
					<a href='/blog'>Перейти в блог →</a>
				</div>
			</div>
		</section>
  )
}
