import Image from 'next/image'

interface Card {
    id: string
    imageUrl: string
    name: string
}

interface CardGridProps {
    cards: Card[]
}

export default function CardGrid({ cards }: CardGridProps) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cards.map((card) => (
                    <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative h-[400px]">
                            <Image
                                src={card.imageUrl}
                                alt={card.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 