import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className='home-hero-module'>
      <div className="grid-container full hero full-background pinned">

      <div className="grid-x ">
          <div className="cell large-12 ">

            <div className="hero-content">
              <div className="media-module">
                {coverImage && (
                  <CoverImage title={title} coverImage={coverImage} slug={slug} />
                )}
              </div>
            </div>
          </div>
          </div>
      </div>
      <div className="captions">
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell">

              <div className="grid-x">
                <div className="cell large-5 small-6">
                  <div className="captions--textarea">
                    <h2><Link
                      href={`/posts/${slug}`}
                      className="hover:underline"
                      dangerouslySetInnerHTML={{ __html: title }}
                    ></Link></h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: excerpt }}
                    />
                    <a href={`/posts/${slug}`} className="block-btn-cta">Read more</a>
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
