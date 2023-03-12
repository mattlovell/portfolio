
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head';
import { getAllPagesWithSlugs, getPageBySlug  } from '../lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../components/layout'
import ContainerPage from '../components/container-page'
import PostTitle from '../components/post-title'
import PageHeader from '../components/page-header'

export default function Page({page}) {

  const router = useRouter()

  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />
  }

    return (
      <Layout>
      <Head>
        <title>MJLOVELL.com - Works and Work In Progress</title>
      </Head>


      <ContainerPage>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <><div className='page-content'>
            <article>
              <Head>
                <title>
                  {page?.title}
                </title>
                <meta
                  property="og:image"
                  content={page.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PageHeader
                title={page?.title}
                date={page?.date}
                content={page?.content}
              />

            </article>
            </div>

          </>
        )}
      </ContainerPage>


    </Layout>
  )
    
  }



export const getStaticProps: GetStaticProps = async({
  params
}) =>{

  const page = await getPageBySlug(params?.slug);


    return {
      props: {page}, revalidate: 10,
    }
  }


  export const getStaticPaths: GetStaticPaths = async () => {
    const allPages = await getAllPagesWithSlugs()
    return {
      paths: allPages.edges.map(({ node }) => `/${node.slug}`) || [],
      fallback: true,
    }
  }
