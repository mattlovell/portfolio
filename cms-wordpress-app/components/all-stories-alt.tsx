import PostPreview from './post-preview'

export default function AllStoriesAlt({ posts }) {
  return (
    <section>

      <div>
        {posts.map((nodes) => (
          <PostPreview
            key={nodes.slug}
            title={nodes.title}
            coverImage={nodes.featuredImage}
            date={nodes.date}
            categories={nodes.categories}
            slug={nodes.slug}
            excerpt={nodes.excerpt}
            customStyling={nodes.customStyling}
          />
        ))}
      </div>
    </section>
  )
}
