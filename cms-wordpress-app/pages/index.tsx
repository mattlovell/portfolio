import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import AllStories from '../components/all-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import { getAllPostsForHome } from '../lib/api'


export default function Index({ allPosts: { edges }, preview }) {
/*  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)*/
  const allThePosts = edges;

  return (
    <Layout preview={preview}>
      <Head>
        <title>MJLOVELL.com - Works and Work In Progress</title>
      </Head>
      <Navigation></Navigation>

      <Container>
        <Intro />
        {<AllStories posts={allThePosts}/>}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
