import HeroSection from '../hero-section/hero-section.jsx'
import SkillsSection from '../skills-section/skills-section.jsx'
import PortfolioSection from '../portfolio-section/portfolio-section.jsx'
import BlogSection from '../blog-section/blog-section.jsx'

import styles from './main-page.module.css'

export default function MainPage() {
	return (
		<div className={styles['main-page']}>
			<HeroSection />
			<SkillsSection />
			<PortfolioSection />
			<BlogSection />
		</div>
	)
}