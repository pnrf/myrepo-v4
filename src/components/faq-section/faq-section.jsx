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
							<div>
								<p>1. <a className={faqStyles['faq-section__link']} href='/about/dokumentirovaniye-programmnykh-produktov'>задокументировать ваш программный продукт</a></p>
								<p>2. <a className={faqStyles['faq-section__link']} href='/about/sozdaniye-kontenta'>создать контент для вашей внутренней базы знаний</a></p>
								<p>3. <a className={faqStyles['faq-section__link']} href='/about/sostavleniye-yuridicheskikh-dokumentov'>составить юридические документы</a></p>
								<p>4. <a className={faqStyles['faq-section__link']} href='/about/razrabotka-saytov'>опубликовать документы в сети</a></p>
						</div>
					</details>
					<details className={faqStyles['faq-section__details']}>
						<summary className={faqStyles['faq-section__summary']}>Какой у вас опыт работы в сфере IT?</summary>
							<div>
								<p>- Работаю в ИТ с 2023 года. Есть опыт документирования ИИ-сервисов и медицинской информационной системы. Опыт ведения внутренней базы знаний о продукте.</p>
								<p>- До этого 20 лет отработал корпоративным юристом в торгово-производственных и консалтинговых компаниях. Составлял юридические документы.</p>
							</div>
					</details>
					<details className={faqStyles['faq-section__details']}>
						<summary className={faqStyles['faq-section__summary']}>Если не секрет, почему удалёнка?</summary>
							<div>
								<p>- Жаль тратить время на дорогу. Ездил в офис на Павелецкой, выходило 4 часа в день (туда-обратно).</p>
								<p>- В летне-осенний период живу на даче. Мотаться в Москву возможности нет.</p>
							</div>
					</details>
					<details className={faqStyles['faq-section__details']}>
						<summary className={faqStyles['faq-section__summary']}>Почему решили сменить профессию?</summary>
							<div>
								<p>2020 год с его пандемией Covid-19 оказался для меня переломной точкой. Много боли, смертей. Я всерьез задумался, чем хочу заниматься в последующие годы своей жизни. Продолжать практиковать юриспруденцию или попробовать свои силы в другой профессии.</p>
								<p>Находясь на самоизоляции, смог спокойно все обдумать и скорректировать свои жизненные планы.</p>
							</div>
					</details>
					<details className={faqStyles['faq-section__details']}>
						<summary className={faqStyles['faq-section__summary']}>Что вас мотивирует в работе?</summary>
							<div>
								<p>- возможность получения нового опыта;</p>
								<p>- развитие профессиональных умений и навыков;</p>
								<p>- работа в команде и общение с умными людьми;</p>
								<p>- возможность планировать свой рабочий график;</p>
								<p>- достойный заработок.</p>
							</div>
					</details>
					<details className={faqStyles['faq-section__details']}>
						<summary className={faqStyles['faq-section__summary']}>Есть ли у вас хобби?</summary>
							<div>
								<p>- рисование, резьба по дереву;</p>
								<p>- отдых на природе с семьей и друзьями, дача;</p>
								<p>- фильмы, сериалы, мультфильмы, книги;</p>
								<p>- разработка своего сайта.</p>
							</div>
					</details>
					<a href='/faq' className={faqStyles['faq-section__link-margins']}>Ответы на все вопросы →</a>
				</div>
			</div>
		</section>
  )
}
