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
							<p className={styles['hero-section__text']}>Разрабатываю документацию и базы знаний по&nbsp;программным продуктам. Веду техноблог.</p>
							<p className={styles['hero-section__text']}>Сменил профессию в&nbsp;2023&nbsp;году. До&nbsp;этого 20 лет работал корпоративным юристом.</p>
						</div>
					</div>
					<div className={styles['hero-section__buttons']}>
						<a className={styles['hero-section__button']} href="https://drive.google.com/file/d/17TNkScriiVo_6XiaOGdx-vZXWjfukT-U/view?usp=share_link" target="_blank">Резюме ↗</a>
						<a className={styles['hero-section__button']} href="https://t.me/yuptechwriter" target="_blank">Telegram ↗</a>
					</div>
				</div>
				<div className={styles['hero-section__image-wrapper']}>
				</div>
			</div>
		</section>
  )
}