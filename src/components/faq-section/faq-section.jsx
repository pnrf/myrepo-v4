import styles from '../blog-section/blog-section.module.css'
import faqStyles from './faq-section.module.css'


export default function FaqSection() {
  return (
		<section className={styles['blog-section']}>
			<h2 className={styles['blog-section__heading']}>FAQ</h2>
			<div className={styles['blog-section__container']}>
				<div className={styles['blog-section__card']}>
					<details className={faqStyles['faq-section__details']}>
						<summary className={faqStyles['faq-section__summary']}>Чем вы можете нам помочь? </summary>
							<div>- Врач-рентгенолог при проведении инструментального обследования пациента.</div>
					</details>
					<details className={faqStyles['faq-section__details']}>
						<summary className={faqStyles['faq-section__summary']}>Какой у вас опыт работы в сфере IT?</summary>
							<div>
								- Врач-рентгенолог при проведении инструментального обследования пациента.  
								- Врач-рентгенолог при проведении инструментального обследования пациента.  
								- Врач-рентгенолог при проведении инструментального обследования пациента.  
								- Врач-рентгенолог при проведении инструментального обследования пациента.  
							</div>
					</details>
					<a href='/faq' className={faqStyles['faq-section__link']}>Ответы на все вопросы →</a>
				</div>
			</div>
		</section>
  )
}
