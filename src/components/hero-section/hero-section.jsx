import styles from './hero-section.module.css'

export default function HeroSection() {
  return (
		<section className={styles['hero-section']}>
			<div className={styles['hero-section__content']}>
				<div className={styles['hero-section__container']}>
					<div className={styles['hero-section__text-wrapper']}>
						<h1 className={styles['hero-section__title']}>Юрий Панкратов</h1>
						<h2 className={styles['hero-section__subtitle']}>технический писатель</h2>
						<div className={styles['hero-section__text-block']}>
							<p className={styles['hero-section__text']}>Работаю в&nbsp;ИТ с&nbsp;2023&nbsp;года. Тимлид (4 чел).</p>
							<p className={styles['hero-section__text']}>Разрабатываю техническую и юридическую документацию по&nbsp;программным продуктам. Создаю контент для&nbsp;баз знаний.</p>
						</div>
					</div>
					<div className={styles['hero-section__buttons']}>
						<a className={styles['hero-section__button']} href="https://drive.google.com/file/d/12PZjcYksHuzUeSC7Oz-d2TpI6AWqy2um/view?usp=share_link" target="_blank">Резюме ↗</a>
						<a className={styles['hero-section__button']} href="https://t.me/yuptechwriter" target="_blank">Контакты ↗</a>
					</div>
				</div>
				<div className={styles['hero-section__image-wrapper']}>
				</div>
			</div>
		</section>
  )
}