import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import AllStoriesAlt from '../components/all-stories-alt'
import Layout from '../components/layout'
import { getAllPostsForHome2 } from '../lib/api'
import Intro from '../components/intro'

export default function Index({preview, testPosts:{nodes} }) {

  const stuff = nodes;

  return (
    <Layout>
      <Head>
        <title>MJLOVELL.com - Works and Work In Progress</title>
      </Head>


      <Container>
        <Intro></Intro>
        {<AllStoriesAlt posts={stuff}/>}

      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const testPosts = await getAllPostsForHome2(preview)
  return {
    props: { testPosts, preview },
    revalidate: 10,
  }
}
