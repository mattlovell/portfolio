import CoverImage from './cover-image'
import Captions from './captions'
export default function PostPreview({
  title,
  coverImage,
  excerpt,
  date,
  slug,
  customStyling
})
 {

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
      <Captions title={title} excerpt={excerpt} customStyling={customStyling} slug={slug} />

    </div>


  )
}
