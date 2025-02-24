import Image from 'next/image'

const games = [
  {
    title: "Terraforming Mars",
    description: "Compete with rival CEOs to transform Mars into a habitable planet",
    imageUrl: "/board-game-card-reference/images/terraforming-mars.jpg"
  },
  {
    title: "Ark Nova",
    description: "Build a modern, scientifically managed zoo to support conservation",
    imageUrl: "/board-game-card-reference/images/ark-nova.jpg"
  },
  {
    title: "Wingspan",
    description: "Attract a collection of beautiful birds to your wildlife preserves",
    imageUrl: "/board-game-card-reference/images/wingspan.jpg"
  },
  {
    title: "Faraway",
    description: "Explore mysterious islands and uncover ancient secrets",
    imageUrl: "/board-game-card-reference/images/faraway.jpg"
  }
];

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap gap-6 justify-center">
                {games.map((game) => (
                    <div key={game.title} className="relative bg-gray-800 rounded-lg shadow-md overflow-hidden group h-[300px] w-[300px]">
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
                ))}
            </div>
        </div>
    );
}