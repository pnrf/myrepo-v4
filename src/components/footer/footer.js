import styles from './footer.module.css'

export default function MyFooter() {
  return (
		<div className={styles['footer__container']}>
			<div>
				<p className={styles['footer__text']}>Myrepo.ru – сайт-портфолио технического писателя</p>
				<p className={`${styles['footer__text']} ${styles['footer__text-margins']}`}>© 2024-{new Date().getFullYear()}{', Панкратов Ю.А.'} {' Все права защищены'} </p>
				<p className={styles['footer__text']}>Сайт работает на <a href="https://github.com" target="_blank"> Github</a>, <a href="https://vercel.com" target="_blank">Vercel</a>, <a href="https://react.dev" target="_blank"> React</a>, <a href="https://nextjs.org" target="_blank"> Next.js</a> и <a href="https://nextra.site" target="_blank"> Nextra</a></p>
				<p className={styles['footer__text']}>Возрастные ограничения и применимое право:</p>
				<div className={styles['footer__icons-wrapper']}>
					<span className={`${styles['footer__icon']} ${styles['footer__icon_highlight']}`}>18+</span>
					<span className={styles['footer__icon']}>РФ</span>
				</div>
			</div>
		</div>
  )
}