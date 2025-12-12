
import { AudioLines, MoveUpRight } from 'lucide-react'
import { FaApple } from 'react-icons/fa'

const MusicCard = () => {
    const song = "醉后喜欢我"
    const artist = "icyball 冰球乐团"
    const album = "我好斯文"
    const url = "https://music.apple.com/cn/album/%E9%86%89%E5%90%8E%E5%96%9C%E6%AC%A2%E6%88%91/1599220763?i=1599220894"

    return (
        <>
            <div className="relative flex size-full flex-col justify-between gap-4 p-6">
                <div
                    className="aspect-square min-h-0 max-w-[60%] flex-shrink border bg-cover bg-center grayscale sepia-50"
                    style={{
                        backgroundImage: `url('/yfblog/static/bento/music-cover.jpg')`,
                    }}
                    role="img"
                    aria-label="Album art"
                />
                <div className="flex min-h-0 flex-shrink-0 flex-col justify-end">
                    <div className="mr-8 flex flex-col">
                        <span className="mb-2 flex items-center gap-2">
                            <AudioLines size={16} className="text-primary" />
                            <span className="text-primary text-sm">
                                Last played...
                            </span>
                        </span>
                        <span className="text-md mb-2 line-clamp-2 leading-tight font-medium">
                            {song}
                        </span>
                        <span className="text-muted-foreground line-clamp-1 text-xs">
                            <span className="text-muted-foreground">by</span>{' '}
                            {artist}
                        </span>
                        <span className="text-muted-foreground line-clamp-1 text-xs">
                            <span className="text-muted-foreground">on</span> {album}
                        </span>
                    </div>
                </div>
            </div>
            <a
                href={url}
                aria-label="Listen on Apple Music"
                title="Listen on Apple Music"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-border/50 text-primary ring-ring group/spotify-link absolute end-0 bottom-0 m-3 rounded-full p-3 transition-[box-shadow] duration-300 hover:ring-2 focus-visible:ring-2"
            >
                <MoveUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/spotify-link:rotate-12"
                />
            </a>
        </>
    )
}

export default MusicCard
