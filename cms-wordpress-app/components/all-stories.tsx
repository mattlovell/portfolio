import PostPreview from './post-preview'

export default function AllStories({ posts }) {
  return (
    <section>

      <div>
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            categories={node.categories}
            slug={node.slug}
            excerpt={node.excerpt}
            customStyling={node.customStyling}
          />
        ))}
      </div>
    </section>
  )
}
