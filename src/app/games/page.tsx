import Image from 'next/image'
import Link from 'next/link'

const games = [
  // {
  //   title: "Terraforming Mars",
  //   description: "Compete with rival CEOs to transform Mars into a habitable planet",
  //   imageUrl: "/board-game-card-reference/images/terraforming_mars_assets/terraforming-mars.jpg",
  //   slug: "terraforming-mars"
  // },
  // {
  //   title: "Ark Nova",
  //   description: "Build a modern, scientifically managed zoo to support conservation",
  //   imageUrl: "/board-game-card-reference/images/ark_nova_assets/ark_nova.jpg",
  //   slug: "ark-nova"
  // },
  // {
  //   title: "Wingspan",
  //   description: "Attract a collection of beautiful birds to your wildlife preserves",
  //   imageUrl: "/board-game-card-reference/images/wingspan_assets/wingspan.jpg",
  //   slug: "wingspan"
  // },
  {
    title: "Faraway",
    description: "Explore mysterious islands and uncover ancient secrets",
    imageUrl: "/board-game-card-reference/images/faraway_assets/faraway.jpg",
    slug: "faraway"
  }
];

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap gap-6 justify-center">
                {games.map((game) => (
                    <Link href={`/games/${game.slug}`} key={game.title}>
                        <div className="relative bg-gray-800 rounded-lg shadow-md overflow-hidden group h-[300px] w-[300px]">
                            <div className="relative h-full w-full flex items-center justify-center">
                                <Image 
                                    src={game.imageUrl}
                                    alt={`${game.title} cover`}
                                    fill
                                    className="object-contain transition-all duration-300 group-hover:blur-sm group-hover:brightness-50"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-2xl font-bold text-white text-center px-4">{game.title}</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}