import PostPreview from './post-preview'
import Image from 'next/image'
import scrollImg from '../public/logos/scrolldown.png';

export default function MoreStories({ posts }) {
  return (
    <section className="more-stories ">
      <div className="grid-container">
      <div className='cell small-12'>
        <div className='grid-x align-center-middle seperator'>
        <h2>Other works</h2>
          <Image
            src={scrollImg} alt="Down"
            width={30}
            height={30}>
            </Image>

          </div>
        </div>
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
