import PostTitle from './post-title'


export default function PostHeader({
  title,
  date,
  content
}) {
  return (
    <>
    <div className='landscape full'>
      <div className='grid-container full hero full-background'>
        <div className="grid-x">
        </div>
      </div>
      <div className='content'>
        <div className='grid-container'>
            <div className="grid-x">
                <div className="cell small-12 medium-10 large-8 xlarge-6">
                <div className="textarea">
                    <PostTitle>{title}</PostTitle>
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
