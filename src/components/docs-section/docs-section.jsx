import styles from '../portfolio-section/portfolio-section.module.css'

export default function DocsSection() {
  return (
		<section className={styles['portfolio-section']}>
			<h2 className={styles['portfolio-section__heading']}>Документы</h2>
			<div className={styles['portfolio-section__container']}>

				<div className={styles['portfolio-section__card']}>
					<h3 className={styles['portfolio-section__card-title']}>Технические документы</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							{/* <p className={styles['portfolio-section__card-list-item']}>Комплексная информационная система медицинского центра</p> */}
							<br />
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='https://drive.google.com/file/d/16OCnFD6tYP3QDlVScs__JUQhpsILeLZO/view?usp=share_link' target="_blank">Описание программы</a> ↗</li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='https://drive.google.com/file/d/1Yv3s0gPDHekN2_OKb9_uxEgpz9ihEHIs/view?usp=sharing' target="_blank">Описание процессов жизненного цикла</a> ↗</li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='https://drive.google.com/file/d/1twqfreyo5l2q_VVE6RVsSiFhCdx9RULh/view?usp=sharing' target="_blank">Ведомость эксплуатационных документов</a> ↗</li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='https://drive.google.com/file/d/1sjZrKdc1PT-WDwxrhp8rWChtETTFNMDX/view?usp=sharing' target="_blank">Протокол валидации</a> ↗</li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='https://drive.google.com/file/d/1TQ-lL82ISj4GEHU_Sa_5x9wCN1HYSXhM/view?usp=sharing' target="_blank">Журнал версий программы</a> ↗</li>
						</ul>
						<a href='/portfolio/tech-docs'>Все документы →</a>
					</div>
				</div>

				<div className={styles['portfolio-section__card']}>
					<h3 className={styles['portfolio-section__card-title']}>Юридические документы</h3>
					<div className={styles['portfolio-section__card-content']}>
						<ul className={styles['portfolio-section__card-list']}>
							{/* <p className={styles['portfolio-section__card-list-item']}>Сервисы искусственного интеллекта для лучевой диагностики</p> */}
							<br />
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='https://drive.google.com/file/d/17T1_agwfsjth9y1BWagh5hPNK5QmwLdJ/view?usp=share_link' target="_blank">Лицензионный договор ↗</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='https://drive.google.com/file/d/1mWDlv3rsMiPzGtQgjTyisWqu39tUjoz7/view?usp=share_link' target="_blank">Договор на разработку документов ↗</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='https://drive.google.com/file/d/1LtgEzN39jF89N_RTLl_A7JTaNZVOH1X-/view?usp=share_link' target="_blank">Дополнительное соглашение ↗</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='https://drive.google.com/file/d/16QpAkJR25ulz-IeC2Zc9fkreWypIFWi6/view?usp=share_link' target="_blank">Дорожная карта по участию в конкурсе ↗</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='https://drive.google.com/file/d/1iD13v6h418dl907kpD50I7YqdQ_k42NR/view?usp=share_link' target="_blank">Соглашение о конфиденциальности ↗</a></li>
							<li className={styles['portfolio-section__card-list-item']}><a className={styles['portfolio-section__link']} href='https://drive.google.com/file/d/1Xwc9n2IOcIFJMQ8yq5l-ru4iUblv0BV2/view?usp=share_link' target="_blank">Сопроводительное письмо ↗</a></li>
						</ul>
						<a href='/portfolio/legal-docs'>Все документы →</a>
					</div>
				</div>

			</div>
		</section>
  )
}