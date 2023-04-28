import Footer from './Footer';
import Navbar from './Navbar';

import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href='/images/favicon.ico' />
        <title>Pokédex - Next.js</title>
      </Head>
      <Navbar />
      <main className="min-h-[75vh] flex flex-col justify-center">{children}</main>
      <Footer />
    </>
  )
}

export default Layout;