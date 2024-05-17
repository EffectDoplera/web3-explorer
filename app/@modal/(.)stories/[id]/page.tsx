'use client'

import { Dialog, DialogContent } from '@/shared/ui/dialog'
import { useRouter } from 'next/navigation'

interface StoryPageProps {
  params: {
    id: string
  }
}

export default function StoryPage({ params }: StoryPageProps) {
  const { id } = params
  const router = useRouter()
  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent showClose={false} className="p-0 border-2 w-[508px] h-[508px]">
        {/* TODO: optimize work with video */}
        <video playsInline loop muted autoPlay className="sm:rounded-lg" width="508" height="508">
          <source src="https://player.vimeo.com/progressive_redirect/playback/791154235/rendition/720p/file.mp4?loc=external&signature=2a18080032800dc38691f7c09af4d51fa8c23233362c47b1fca6bb0cae835f95" />
          Your browser does not support the video tag.
        </video>
      </DialogContent>
    </Dialog>
  )
}
