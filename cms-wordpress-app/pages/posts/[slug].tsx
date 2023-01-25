import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import ContainerSingle from '../../components/container-single'
// import PostBody from '../../components/post-body'
// import MoreStories from '../../components/more-stories'
// import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Tags from '../../components/tags'
import MediaItems from '../../components/MediaItems'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'


export default function Post({ post, posts, media,preview }) {

  
  const router = useRouter()
 // const morePosts = posts?.edges
  const images = media


  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }


  return (
    <Layout preview={preview}>
      <Head>
        <title>MJLOVELL.com - Works and Work In Progress</title>
      </Head>


      <ContainerSingle>
        {/* <Header /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                categories={post.categories}
                customStyling={post.customStyling}
                content={post.content}
              />
              <MediaItems id={post.id}/>
              {/* <PostBody content={post.content} /> */}

            </article>

            {/* <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
            <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
            </footer>
          </>
        )}
      </ContainerSingle>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      media: data
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}



