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
          navbar={<Navbar logo={<Logo />}/>}
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