import { Footer, Layout, Navbar, LastUpdated } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Logo from '../components/logo/logo.js'
import MyFooter from '../components/footer/footer.js'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const navbar = (
	<Navbar 
		logo={<Logo />}
		projectLink="https://github.com/pnrf"
		chatLink="https://t.me/yuptechwriter"
		chatIcon={<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)"></circle> <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse"> <stop stopColor="#37BBFE"></stop> <stop offset="1" stopColor="#007DBB"></stop> </linearGradient> </defs> </g></svg>}
	/>
)
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="ru"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
				faviconGlyph="🐀"
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={<Banner storageKey="some-key">⚙️ Сайт находится в стадии разработки.</Banner>}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/pnrf/myrepo-v4"
          footer={<Footer>{<MyFooter />}</Footer>}
					search={<Search placeholder="Поиск по сайту..." />}
					themeSwitch={({dark: 'Темная тема', light: 'Светлая тема', system: 'Системная тема'})}
					editLink={null}
					feedback={{content: null}}
					lastUpdated={<LastUpdated locale="ru">Обновлено:</LastUpdated>}
					sidebar={{defaultMenuCollapseLevel: 1, autoCollapse: true}}
					toc={{title: "На странице", backToTop: "Прокрутить вверх"}}
				>
          {children}
        </Layout>
      </body>
    </html>
  )
}