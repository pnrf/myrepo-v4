import styles from './footer.module.css'

export default function MyFooter() {
  return (
		<div className={styles['footer__container']}>
			<div>
				<p className={styles['footer__text']}>Myrepo.ru – сайт-портфолио технического писателя</p>
				<p className={`${styles['footer__text']} ${styles['footer__text-margins']}`}>© 2024-{new Date().getFullYear()}{', Панкратов Ю.А.'} {' Все права защищены'} </p>
				<p className={styles['footer__text']}>Сайт работает на <a className={styles['footer__link']} href="https://github.com" target="_blank" rel="nofollow"> Github</a>, <a className={styles['footer__link']} href="https://vercel.com" target="_blank" rel="nofollow">Vercel</a>, <a className={styles['footer__link']} href="https://react.dev" target="_blank" rel="nofollow"> React</a>, <a className={styles['footer__link']} href="https://nextjs.org" target="_blank" rel="nofollow"> Next.js</a> и <a className={styles['footer__link']} href="https://nextra.site" target="_blank" rel="nofollow"> Nextra</a></p>
				<p className={styles['footer__text']}>Изображение на главной странице со <a className={styles['footer__link']} href="https://storyset.com/illustration/researching/bro#647F94FF&hide=&hide=simple" target="_blank" rel="nofollow">Storyset by Freepik</a></p>
				<p className={`${styles['footer__text']} ${styles['footer__text-margins']}`}>Контент составлен не без помощи <a className={styles['footer__link']} href="https://ya.ru/ai/art" target="_blank" rel="nofollow">YandexART</a> и <a className={styles['footer__link']} href="https://ya.ru/ai/gpt" target="_blank" rel="nofollow">YandexGPT</a></p>
				<p className={styles['footer__text']}><a className={styles['footer__link']} href="/terms-of-use">Правила сайта</a>, Политика конфиденциальности</p>
				<p className={styles['footer__text']}>Возрастные ограничения и применимое право:</p>
				<div className={styles['footer__icons-wrapper']}>
					<span className={`${styles['footer__icon']} ${styles['footer__icon_highlight']}`}>18+</span>
					<span className={styles['footer__icon']}>РФ</span>
				</div>
			</div>
		</div>
  )
}
