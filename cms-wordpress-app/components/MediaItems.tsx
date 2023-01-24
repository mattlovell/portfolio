import { getMediaItemsForPost } from "../lib/api"
import Image from 'next/image'
import { GetStaticProps } from "next"




export default function MediaItems({id}) {
    return (

          <div className="grid-container">
            <div className="grid-x">
              <div className="cell">
              <div className="grid-x">
                <div className="cell large-6 small-12">
                {/* <Image
                  width={2000}
                  height={1000}
                  priority
                  alt={`Media Item`}
                  src={src}
                  /> */}
              </div>
            </div>
          </div>
        </div>
       </div>

      )
}
export const getStaticProps: GetStaticProps = async ({
  params
}) => {
  const data = await getMediaItemsForPost(params)
  console.log("params", params)
  return {
    props: {
      img: data
    }
  }
}
