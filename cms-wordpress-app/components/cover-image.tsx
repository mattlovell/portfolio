import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  title: string
  coverImage: {
    node: {
      sourceUrl: string
    }
  }
  blur?:string
  slug?: string
}

export default function CoverImage({ title, coverImage, blur, slug }: Props) {
  const [clicked, setClicked] = useState('');

  const handleClick = () => {
    clicked ? setClicked('') : setClicked('base-state click-state');
  };

  const image = (
    <Image
      width={2000}
      height={1000}
      priority
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className={`blur blur--${blur}`}>
      {slug ? (
        <Link href={`/posts/${slug}`} onClick={handleClick} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
