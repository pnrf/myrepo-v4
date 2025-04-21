import styles from './hero-section.module.css'

export default function HeroSection() {
  return (
		<section className={styles['hero-section']}>
			<div className={styles['hero-section__content']}>
				<div className={styles['hero-section__text-wrapper']}>
					<h1 className={styles['hero-section__title']}>Юрий Панкратов</h1>
					<h2 className={styles['hero-section__subtitle']}>технический писатель</h2>
					<p className={styles['hero-section__text']}>Работаю в&nbsp;ИТ с&nbsp;2023&nbsp;года. Разрабатываю техническую и&nbsp;юридическую документацию по&nbsp;программным продуктам. Пишу тексты.</p>
					<p className={styles['hero-section__text']}>Сделал этот сайт для поиска работы. Собрал на&nbsp;нем свое портфолио и&nbsp;завел блог.</p>
				</div>
				<div className={styles['hero-section__image-wrapper']}>
					<img className={styles['hero-section__image']} src="https://github.com/pnrf/myrepo/blob/main/images/portfolioPics/hero-section/yup-hero-section-02.png?raw=true" alt="Фоновое фото" />
				</div>
			</div>
			<div className={styles['hero-section__buttons']}>
				<a className={styles['hero-section__button']} href="https://drive.google.com/file/d/1gNXqrc9GDDaJc6u33emLr8UHspgW9PDH/view?usp=share_link" target="_blank">Резюме ↗</a>
				<a className={styles['hero-section__button']} href="/contacts">Контакты</a>
			</div>
		</section>
  )
}