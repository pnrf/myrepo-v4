import styles from './guide-cards.module.css'

export default function GuideCards() {
	return (
		<div className={styles.cards}>

			<div className={styles.wrapper}>
				<div className={styles.container}>
					{/* <div className={styles.type_wrapper}>
						<div className={styles.type_icon}>
						<svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.5 16.5H15.5M11 20V20.5C11 21.0523 11.4477 21.5 12 21.5H13C13.5523 21.5 14 21.0523 14 20.5V20M18 10C18 11.94 17.3978 12.9767 16.4272 14.3368C15.8273 15.1773 15.5 16.1794 15.5 17.212V18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H10.5C9.94772 19.5 9.5 19.0523 9.5 18.5V17.212C9.5 16.1794 9.17266 15.1773 8.57284 14.3368C7.60216 12.9767 7 11.94 7 10C7 7 9.5 4.5 12.5 4.5C15.5 4.5 18 7 18 10Z" stroke="#121923" strokeWidth="1.2"></path> </g></svg>
						</div>
						<span className={styles.type}>информация</span>
					</div> */}
					<h3 className={styles.title}>Общее</h3>
					<p className={styles.subtitle}>Технические страницы</p>
					<ul className={styles.list}>
						<li><a href="/knowledge-base/disclaimer">Дисклеймер</a></li>
						<li><a href="/knowledge-base/glossary">Глоссарий</a></li>
						<li><a href="/knowledge-base/useful-links">Полезные ссылки</a></li>
					</ul>
				</div>
			</div>

			<div className={styles.wrapper}>
				<div className={styles.container}>
					{/* <div className={styles.type_wrapper}>
						<div className={styles.type_icon}>
							<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.003 3A7.646 7.646 0 0 0 12.5 5.277 7.646 7.646 0 0 0 6.997 3a7.532 7.532 0 0 0-5.833 2.686.79.79 0 0 0-.164.493v13.59a.833.833 0 0 0 .499.755.894.894 0 0 0 .879-.083A8.187 8.187 0 0 1 7 19.033a7.832 7.832 0 0 1 5.153 1.841l.31.355.384-.355A7.832 7.832 0 0 1 18 19.034a8.185 8.185 0 0 1 4.624 1.41.903.903 0 0 0 .875.081.834.834 0 0 0 .501-.755V6.179a.79.79 0 0 0-.161-.49A7.536 7.536 0 0 0 18.003 3zM2 19.49V6.24A6.53 6.53 0 0 1 6.997 4 6.568 6.568 0 0 1 12 6.244v13.253a9.16 9.16 0 0 0-5-1.464 9.266 9.266 0 0 0-5 1.456zm21 0a9.262 9.262 0 0 0-5-1.457 9.16 9.16 0 0 0-5 1.464V6.244a6.697 6.697 0 0 1 10-.005z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
						</div>
						<span className={styles.type}>сборник</span>
					</div> */}
					<h3 className={styles.title}>Концепции</h3>
					<p className={styles.subtitle}>Методики</p>
					<ul className={styles.list}>
						<li><a href="/knowledge-base/concepts/bem">БЭМ</a></li>
						<li><a href="/knowledge-base/concepts/bpmn">BPMN</a></li>
						<li><a href="/knowledge-base/concepts/docs-as-code">Docs-As-Code</a></li>
						<li><a href="/knowledge-base/concepts/pixel-perfect">Pixel Perfect</a></li>
						<li><a href="/knowledge-base/concepts/rest-api">REST API</a></li>
						<li><a href="/knowledge-base/concepts/uml">UML</a></li>
					</ul>
				</div>
			</div>

			<div className={styles.wrapper}>
				<div className={styles.container}>
					{/* <div className={styles.type_wrapper}>
						<div className={styles.type_icon}>
							<svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5 10V14M12.5 17V15.5M14.2483 5.64697L20.8493 17.5287C21.5899 18.8618 20.6259 20.5 19.101 20.5H5.89903C4.37406 20.5 3.41013 18.8618 4.15072 17.5287L10.7517 5.64697C11.5137 4.27535 13.4863 4.27535 14.2483 5.64697Z" stroke="#121923" strokeWidth="1.2"></path> </g></svg>
						</div>
						<span className={styles.type}>правила</span>
					</div> */}
					<h3 className={styles.title}>Нормативы</h3>
					<p className={styles.subtitle}>ГОСТы, ISO/IEC</p>
					<ul className={styles.list}>
						<li><a href="/knowledge-base/standards/professional-standard-of-a-technical-writer">Профстандарт</a></li>
						<li><a href="/knowledge-base/standards/gost-2">ГОСТ 2 (ЕСКД)</a></li>
						<li><a href="/knowledge-base/standards/gost-19">ГОСТ 19 (ЕСПД)</a></li>
						<li><a href="/knowledge-base/standards/gost-34">ГОСТ 34 (КСАС)</a></li>
					</ul>
				</div>
			</div>

			<div className={styles.wrapper_tech}>
				<div className={styles.container}>
					{/* <div className={styles.type_wrapper}>
						<div className={styles.type_icon}>
							<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.003 3A7.646 7.646 0 0 0 12.5 5.277 7.646 7.646 0 0 0 6.997 3a7.532 7.532 0 0 0-5.833 2.686.79.79 0 0 0-.164.493v13.59a.833.833 0 0 0 .499.755.894.894 0 0 0 .879-.083A8.187 8.187 0 0 1 7 19.033a7.832 7.832 0 0 1 5.153 1.841l.31.355.384-.355A7.832 7.832 0 0 1 18 19.034a8.185 8.185 0 0 1 4.624 1.41.903.903 0 0 0 .875.081.834.834 0 0 0 .501-.755V6.179a.79.79 0 0 0-.161-.49A7.536 7.536 0 0 0 18.003 3zM2 19.49V6.24A6.53 6.53 0 0 1 6.997 4 6.568 6.568 0 0 1 12 6.244v13.253a9.16 9.16 0 0 0-5-1.464 9.266 9.266 0 0 0-5 1.456zm21 0a9.262 9.262 0 0 0-5-1.457 9.16 9.16 0 0 0-5 1.464V6.244a6.697 6.697 0 0 1 10-.005z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
						</div>
						<span className={styles.type}>сборник</span>
					</div> */}
					<h3 className={styles.title}>Технологии</h3>
					<p className={styles.subtitle}>ПО, фреймворки, языки</p>
					<div className={styles.list_container}>
						<ul className={styles.list}>
							<li><a href="/knowledge-base/services/can-i-include">Can I include</a></li>
							<li><a href="/knowledge-base/services/can-i-use">Can I use</a></li>
							<li><a href="/knowledge-base/services/confluence">Confluence</a></li>
							<li><a href="/knowledge-base/services/figma">Figma</a></li>
							<li><a href="/knowledge-base/services/github">Github</a></li>
							<li><a href="/knowledge-base/services/jira">Jira</a></li>
							<li><a href="/knowledge-base/services/obsidian">Obsidian</a></li>
							<li><a href="/knowledge-base/services/sphinx">Sphinx</a></li>
							<li><a href="/knowledge-base/services/storybook">Storybook</a></li>
							<li><a href="/knowledge-base/services/vs-code">VS Code</a></li>
						</ul>
						<ul className={styles.list}>
							<li><a href="/knowledge-base/technologies/api">API</a></li>
							<li><a href="/knowledge-base/technologies/bash">Bash</a></li>
							<li><a href="/knowledge-base/technologies/css">CSS</a></li>
							<li><a href="/knowledge-base/technologies/expressjs">Express.js</a></li>
							<li><a href="/knowledge-base/technologies/git">Git</a></li>
							<li><a href="/knowledge-base/technologies/html">HTML</a></li>
							<li><a href="/knowledge-base/technologies/javascript">JavaScript</a></li>
							<li><a href="/knowledge-base/technologies/json">JSON</a></li>
							<li><a href="/knowledge-base/technologies/markdown">Markdown</a></li>
							<li><a href="/knowledge-base/technologies/nextjs">Next.js</a></li>
						</ul>
						<ul className={styles.list}>
							<li><a href="/knowledge-base/technologies/nextra">Nextra</a></li>
							<li><a href="/knowledge-base/technologies/nodejs">Node.js</a></li>
							<li><a href="/knowledge-base/technologies/reactjs">React.js</a></li>
							<li><a href="/knowledge-base/technologies/typescript">TypeScript</a></li>
							<li><a href="/knowledge-base/technologies/xml">XML</a></li>
						</ul>
					</div>
				</div>
			</div>

		</div>
	)
}
