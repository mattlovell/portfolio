import Image from 'next/image';
import scrollImg from '../public/logos/scrolldown.png';

export default function Intro() {
  return (
    <div className='home-hero-module'>
    <div className="grid-container full hero full-background pinned">

    <div className="grid-x ">
        <div className="cell large-12 ">

          <div className="hero-content">
            <div className="media-module blank">


            </div>
          </div>
        </div>
        </div>
    </div>
    <div className="captions">
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell">

            <div className="grid-x align-center-middle text-center">
              <div className="cell small-12">
                <div className="captions--textarea">
                  <h1>Works & Works in Progress</h1>
                  <h2>Scroll down to see what I've been making</h2>
                </div>
              </div>
              <div className='cell small-12'>
                <div className='grid-x align-center-middle'>
                <Image
                    src={scrollImg} alt="Logo"
                    width={50}
                    height={50}></Image>
                </div>

              </div>
              </div>
            </div>
          </div>
         </div>
        </div>
       </div>
  )
}
