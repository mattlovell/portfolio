import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <section className="more-stories ">
      <div className="grid-container">
        <h2 className="seperator">Other works...</h2>
      </div>
      <div className="grid-container full">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            categories={node.categories}
            slug={node.slug}
            customStyling={node.customStyling}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
