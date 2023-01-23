import Link from 'next/link'

interface Props {
    title: string
    excerpt: string
    customStyling:{
        backgroundcolor: string
    }
    slug?: string
  }
  export default function Captions({ title, excerpt, customStyling, slug }: Props) {

    const backgroundClass = customStyling?.backgroundcolor;
    return (
    <div className={`captions`}>
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell">

          <div className="grid-x">
            <div className="cell large-5 small-12">
              <div className={`textarea--${backgroundClass}`} >
                <h2><Link
                  href={`/posts/${slug}`}
                  className="hover:underline"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></Link></h2>
                <div
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
                <a href={`/posts/${slug}`} className="block-btn-cta">Read more</a>
              </div>
            </div>
            </div>
          </div>
        </div>
       </div>
      </div>
      )
    }