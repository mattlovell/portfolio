import Link from 'next/link'
import Image from 'next/image';
import logoImg from '../public/logos/MattLovell.png';
export default function Navigation() {
  return (
    <header>
        <div className="grid-container">
          <div className="grid-x">
              <div className="cell">
                <div className="">
                    <nav className='navigation '>
                    <Link  className="homepage-link" href={`/`}>
                        <div className='logo'>
                            <Image 
                            src={logoImg} alt="Logo"
                            width={50}
                            height={50}></Image>
                            <span>MJLOVELL</span>

                        </div>
                      </Link>
                      <div className="mobile-nav-trigger">
                          <button className="hamburger hamburger--spin" type="button">
                            <span className="hamburger-box">
                              <span className="hamburger-inner"></span>
                            </span>
                          </button>
                        </div>
                        <ul className="primary-navigation vertical medium-horizontal menu ">
                          <li><Link href="/about">About Me</Link></li>
                          <li><a title="Get in touch" href="mailto:me@mjlovell.com">Contact</a></li>
                        </ul>

                    </nav>
                </div>
            </div>
        </div>
        </div>
    </header>
  )
}
