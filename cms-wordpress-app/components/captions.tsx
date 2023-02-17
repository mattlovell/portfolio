import Link from 'next/link'
import Categories from './categories'
interface Props {
    title: string
    categories: string
    excerpt: string
    customStyling:{
        backgroundcolor: string
    }
    slug?: string
  }

  export default function Captions({ title, categories, excerpt, customStyling, slug }: Props) {

    const backgroundClass = customStyling?.backgroundcolor;
    return (
    <div className={`captions`}>
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell">

          <div className="grid-x">
            <div className="cell small-12 medium-9 large-5">
              <div className={`textarea--${backgroundClass}`} >
                <h2><Link
                  href={`/posts/${slug}`}
                  className="hover:underline"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></Link></h2>
                <Categories categories={categories} />
                <div
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
                <Link href={`/posts/${slug}`} className="block-btn-cta">Read more</Link>
              </div>
            </div>
            </div>
          </div>
        </div>
       </div>
      </div>
      )
    }