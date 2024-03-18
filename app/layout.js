import "./assets/css/main.css";
// import { dir } from 'i18next'
// import { languages } from '../i18n/settings'
import Header from "./Base/Header";
import Footer from "./Base/Footer";
import { getFooter, getHeader, getJobsCount, getServicesMenu } from "./lib/endpoints";
import { GoogleTagManager } from '@next/third-parties/google'

// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }))
// }

export const metadata = {
  title: "Digiblend",
  description: "Generated by create next app",
};

export const revalidate = 0

export default async function RootLayout({ children }) {
  const footerResult = await getFooter()
  const headerResult = await getHeader()
  const menu = await getServicesMenu()
  const numOfJobs = await getJobsCount()
  return (
    // <html lang={lng} dir={dir(lng)}>
    <html lang='en'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Inter:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="./images/favicon.svg" type="image/x-icon" />
      </head>
      <body>
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W77M74P"
          height="0" width="0" className="gtm"></iframe></noscript> */}
        <Header item={headerResult.data?.attributes} servicesMenu={menu.data?.attributes} />
        {children}
        <Footer item={footerResult.data?.attributes} totalJobs={numOfJobs.data?.length} />
        <GoogleTagManager gtmId="GTM-W77M74P" />
      </body>
    </html>
  );
}