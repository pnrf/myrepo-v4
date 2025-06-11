import styles from '../blog-section/blog-section.module.css'

export default function BlogSection() {
  return (
		<section className={styles['blog-section']}>
			<h2 className={styles['blog-section__heading']}>Ответы</h2>
			<div className={styles['blog-section__container']}>
				<div className={styles['blog-section__card']}>
					
					<a href='/faq'>Все ответы →</a>
				</div>
			</div>
		</section>
  )
}
