import CoverImage from './cover-image'
import PostTitle from './post-title'
import Categories from './categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  categories,
  customStyling,
  content
}) {
  return (
    <>
    <div className='landscape full'>
      <div className='grid-container full hero full-background pinned'>
        <div className="grid-x">
          <CoverImage title={title} blur={customStyling.backgroundcolor} coverImage={coverImage} />
        </div>
      </div>
      <div className='captions'>
      <div className='grid-container'>
          <div className="grid-x">
            <div className="cell small-12">
              <div className={`textarea--${customStyling.backgroundcolor}`}>
                <PostTitle>{title}</PostTitle>
                <Categories categories={categories} />
                <div className="wordpress-content" dangerouslySetInnerHTML={{ __html: content }}>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>

    </>
  )
}
