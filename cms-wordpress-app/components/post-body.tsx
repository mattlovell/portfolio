

export default function PostBody({ content }) {
  return (
    <div className="post-body">
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell">
          <div className="grid-x">
            <div className="cell large-6 small-12">
              <div className="wordpress-content" dangerouslySetInnerHTML={{ __html: content }}>
              </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  </div>

  )
}
