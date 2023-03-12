import Footer from './footer'
import Meta from './meta'
import Navigation from './navigation'
import ScrollLink from '../components/scrolllink'
import Image from 'next/image';
import scrollImg from '../public/logos/scrolldown.png';
export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen" id="top">
        <Navigation></Navigation>
        <main>{children}</main>
        <ScrollLink className='pinned-to-bottom backgroundWhite' href="#top">
          <Image
                    src={scrollImg} alt="Up"
                    width={10} className="rotate180"></Image></ScrollLink>
      </div>
      <Footer />
    </>
  )
}
