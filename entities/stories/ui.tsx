import Image from 'next/image'
import Link from 'next/link'

const STORIES_COUNT = 5
const STORIES = Array.from({ length: STORIES_COUNT }, (_, i) => i + 1)

export const Stories = () => {
  return (
    <div className="flex flex-row gap-2">
      {STORIES.map((st) => {
        return (
          <Link href={`/stories/${st}`} key={st} passHref className="relative rounded-sm overflow-hidden border">
            <Image src="/img/story-preview.png" alt="story preview" width={100} height={100} />
            <div className="group absolute top-0 left-0 w-full h-full backdrop-blur hover:backdrop-blur-none focus:backdrop-blur-none grid place-items-center text-balance text-center transition-all duration-300">
              <p className="text-white font-bold group-hover:hidden transition-all duration-300 sm:text-xs md:text-base">
                New Story №{st}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
