import React from 'react';
import Image from 'next/image';

interface Card {
    id: number;
    daynight: string;
    color: string;
    production: string | null;
    requirement: string | null;
    reward: string | number | null;
    // imgsrc: string | null;
}

interface CardGridProps {
    cards: Card[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
    const getBackgroundColor = (color: string) => {
        switch (color) {
            case 'G':
                return '#469455'; // Green
            case 'B':
                return '#2684b0'; // Blue
            case 'Y':
                return '#c7aa39'; // Yellow
            case 'R':
                return '#c03e2d'; // Red
            case 'N':
            default:
                return '#b1aca0'; // Gray (Neutral)
        }
    };

    const getImagesFromProduction = (production: string | null) => {
        if (!production) return null;

        const images: JSX.Element[] = [];
        for (const char of production) {
            switch (char) {
                case 'b':
                    images.push(
                        <img
                            key={`b-${images.length}`}
                            src="/board-game-card-reference/images/uddu_stone_t.png" // Correct path for 'b'
                            alt="Uddu Stone"
                            className="w-8 h-8" // Adjust size as needed
                        />
                    );
                    break;
                case 'g':
                    images.push(
                        <img
                            key={`g-${images.length}`}
                            src="/board-game-card-reference/images/goldlog_thistle_t.png" // Correct path for 'g'
                            alt="Goldlog Thistle"
                            className="w-8 h-8" // Adjust size as needed
                        />
                    );
                    break;
                case 'r':
                    images.push(
                        <img
                            key={`r-${images.length}`}
                            src="/board-game-card-reference/images/okiko_chimera_t.png" // Correct path for 'r'
                            alt="Okiko Chimera"
                            className="w-8 h-8" // Adjust size as needed
                        />
                    );
                    break;
                case 'c':
                    images.push(
                        <img
                            key={`c-${images.length}`}
                            src="/board-game-card-reference/images/clue_t.png" // Correct path for 'r'
                            alt="Clue"
                            className="w-8 h-8" // Adjust size as needed
                        />
                    );
                    break;
                default:
                    break;
            }
        }
        return images.length > 0 ? images : <span>N/A</span>; // Return images or 'N/A'
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {cards.map(card => (
                <div
                    key={card.id}
                    className="rounded-lg shadow-md overflow-hidden p-4"
                    style={{
                        backgroundColor: getBackgroundColor(card.color),
                        width: '100%', // Use full width of the grid cell
                        height: '200px', // Keep the height fixed to make it square
                    }}
                >
                    <h3 className="text-lg font-semibold">ID: {card.id}</h3>
                    <p>Day/Night: {card.daynight}</p>
                    <p>Color: {card.color}</p>
                    <p>Requirement: {card.requirement || 'N/A'}</p>
                    <p>Reward: {card.reward !== null ? card.reward : 'N/A'}</p>
                    <div className="flex space-x-0">
                        <p>Production: </p>{getImagesFromProduction(card.production)} {/* Display images or 'N/A' */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardGrid;