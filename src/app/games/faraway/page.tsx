'use client'
import { useEffect, useState, ChangeEvent } from 'react'
import GameLayout from '@/components/GameLayout'
import Image from 'next/image';

interface Card {
    id: number;
    daynight: string;
    color: string;
    production: string | null;
    prerequisite: string | null;
    reward: string | null;
    set: string;
}

export default function FarawayPage() {
    const [cards, setCards] = useState<Card[]>([]) // Initialize cards state
    const [selectedColors, setSelectedColors] = useState<string[]>([]); // New state for selected colors
    const [idRange, setIdRange] = useState<[number, number]>([0, 76]); // New state for ID range
    const [selectedDayNight, setSelectedDayNight] = useState<string[]>([]); // New state for selected day/night
    const [selectedPrerequisites, setSelectedPrerequisites] = useState<string[]>([]); // New state for selected prerequisites
    const [selectedProduction, setSelectedProduction] = useState<string[]>([]); // New state for selected production types
    const [selectedSets, setSelectedSets] = useState<string[]>([]); // New state for selected sets

    const handleColorChange = (color: string) => {
        setSelectedColors(prev => 
            prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
        );
    };

    const handleIdRangeChange = (event: ChangeEvent<HTMLInputElement>, newValue: [number, number]) => {
        setIdRange(newValue);
    };

    const handleDayNightChange = (value: string) => {
        setSelectedDayNight(prev => 
            prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
        );
    };

    const handlePrerequisiteChange = (value: string) => {
        setSelectedPrerequisites(prev => 
            prev.includes(value) ? prev.filter(p => p !== value) : [...prev, value]
        );
    };

    const handleProductionChange = (value: string) => {
        setSelectedProduction(prev => 
            prev.includes(value) ? prev.filter(p => p !== value) : [...prev, value]
        );
    };

    useEffect(() => {
        const fetchCardData = async () => {
            const response = await fetch('/board-game-card-reference/card-data/faraway-card-data.json');
            const data = await response.json();
            setCards(data);
        };
        fetchCardData();
    }, []);

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

    const getImagesFromValues = (values: (string | null)[]) => {
        const images: JSX.Element[] = [];
        for (const value of values) {
            if (!value) continue; // Skip null values
            for (const char of value) {
                switch (char) {
                    case 'b':
                        images.push(
                            <Image
                                key={`b-${images.length}`}
                                src="/board-game-card-reference/images/uddu_stone_t.png"
                                width={30}
                                height={30}
                                alt="Uddu Stone"
                                className="object-contain"
                            />
                        );
                        break;
                    case 'g':
                        images.push(
                            <Image
                                key={`g-${images.length}`}
                                src="/board-game-card-reference/images/goldlog_thistle_t.png"
                                width={30}
                                height={30}
                                alt="Goldlog Thistle"
                                className="object-contain"
                            />
                        );
                        break;
                    case 'r':
                        images.push(
                            <Image
                                key={`r-${images.length}`}
                                src="/board-game-card-reference/images/okiko_chimera_t.png"
                                width={30}
                                height={30}
                                alt="Okiko Chimera"
                                className="object-contain"
                            />
                        );
                        break;
                    case 'c':
                        images.push(
                            <Image
                                key={`c-${images.length}`}
                                src="/board-game-card-reference/images/clue_t.png"
                                width={30}
                                height={30}
                                alt="Clue"
                                className="object-contain"
                            />
                        );
                        break;
                    default:
                        break;
                }
            }
        }
        return images;
    };

    // Filter cards based on selected colors, day/night, prerequisites, production, and ID range
    const filteredCards = cards.filter(card => 
        (selectedColors.length === 0 || selectedColors.includes(card.color)) &&
        (selectedDayNight.length === 0 || selectedDayNight.includes(card.daynight)) &&
        (selectedPrerequisites.length === 0 || selectedPrerequisites.every(p => card.prerequisite?.includes(p))) &&
        (selectedProduction.length === 0 || selectedProduction.every(p => card.production?.includes(p))) &&
        (selectedSets.length === 0 || selectedSets.includes(card.set)) && // New filter for sets
        card.id >= idRange[0] && card.id <= idRange[1]
    );

    return (
        <GameLayout>
            <div className="bg-black text-white p-4 sticky top-0 z-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Faraway</h1>
                    <div className="flex gap-4">
                        <div className="mt-4">
                            <h2 className="font-bold">Filter by Card Color:</h2>
                            {['B', 'R', 'G', 'Y', 'N'].map(color => (
                                <button 
                                    key={color} 
                                    className={`mr-4 p-2 border rounded ${selectedColors.includes(color) ? 'bg-blue-500 border-blue-700 shadow-lg' : 'bg-gray-200'}`} 
                                    onClick={() => handleColorChange(color)} 
                                    style={{ backgroundColor: getBackgroundColor(color) }}
                                >
                                    {color === 'B' ? 'Blue' : color === 'R' ? 'Red' : color === 'G' ? 'Green' : color === 'Y' ? 'Yellow' : 'Gray'}
                                </button>
                            ))}
                        </div>
                        {/* New Day/Night Filter */}
                        <div className="mt-4">
                            <h2 className="font-bold">Filter by Day / Night:</h2>
                            {['d', 'n'].map(dayNight => (
                                <label key={dayNight} className="mr-4">
                                    <input 
                                        type="checkbox" 
                                        value={dayNight} 
                                        checked={selectedDayNight.includes(dayNight)} 
                                        onChange={() => handleDayNightChange(dayNight)} 
                                    /> 
                                    {dayNight === 'd' ? 'Day' : 'Night'}
                                </label>
                            ))}
                        </div>
                        {/* New Prerequisite Filter with Buttons */}
                        <div className="mt-4">
                            <h2 className="font-bold">Filter by Prerequisite:</h2>
                            {['b', 'r', 'g'].map(prerequisite => (
                                <button 
                                    key={prerequisite} 
                                    className={`mr-4 p-2 border rounded ${selectedPrerequisites.includes(prerequisite) ? 'bg-blue-500' : 'bg-gray-200'}`} 
                                    onClick={() => handlePrerequisiteChange(prerequisite)}
                                >
                                    {prerequisite === 'b' ? (
                                        <Image
                                            src="/board-game-card-reference/images/uddu_stone_t.png"
                                            width={40} // Adjust size as needed
                                            height={40} // Adjust size as needed
                                            alt="Uddu Stone"
                                            className="object-contain"
                                        />
                                    ) : prerequisite === 'r' ? (
                                        <Image
                                            src="/board-game-card-reference/images/okiko_chimera_t.png"
                                            width={40} // Adjust size as needed
                                            height={40} // Adjust size as needed
                                            alt="Okiko Chimera"
                                            className="object-contain"
                                        />
                                    ) : prerequisite === 'g' ? (
                                        <Image
                                            src="/board-game-card-reference/images/goldlog_thistle_t.png"
                                            width={40} // Adjust size as needed
                                            height={40} // Adjust size as needed
                                            alt="Goldlog Thistle"
                                            className="object-contain"
                                        />
                                    ) : (
                                        prerequisite.toUpperCase() // Display 'B' or 'R'
                                    )}
                                </button>
                            ))}
                        </div>
                        {/* New Production Filter */}
                        <div className="mt-4">
                            <h2 className="font-bold">Filter by Production:</h2>
                            {['b', 'r', 'g', 'c'].map(production => (
                                <button 
                                    key={production} 
                                    className={`mr-4 p-2 border rounded ${selectedProduction.includes(production) ? 'bg-blue-500' : 'bg-gray-200'}`} 
                                    onClick={() => handleProductionChange(production)} 
                                >
                                    {production === 'b' ? (
                                        <Image
                                            src="/board-game-card-reference/images/uddu_stone_t.png"
                                            width={40} // Adjust size as needed
                                            height={40} // Adjust size as needed
                                            alt="Uddu Stone"
                                            className="object-contain"
                                        />
                                    ) : production === 'r' ? (
                                        <Image
                                            src="/board-game-card-reference/images/okiko_chimera_t.png"
                                            width={40} // Adjust size as needed
                                            height={40} // Adjust size as needed
                                            alt="Okiko Chimera"
                                            className="object-contain"
                                        />
                                    ) : production === 'g' ? (
                                        <Image
                                            src="/board-game-card-reference/images/goldlog_thistle_t.png"
                                            width={40} // Adjust size as needed
                                            height={40} // Adjust size as needed
                                            alt="Goldlog Thistle"
                                            className="object-contain"
                                        />
                                    ) : production === 'c' ? (
                                        <Image
                                            src="/board-game-card-reference/images/clue_t.png"
                                            width={40} // Adjust size as needed
                                            height={40} // Adjust size as needed
                                            alt="Clue"
                                            className="object-contain"
                                        />
                                    ) : (
                                        production.toUpperCase() // Fallback for any other production types
                                    )}
                                </button>
                            ))}
                        </div>
                        {/* New Set Filter */}
                        <div className="mt-4">
                            <h2 className="font-bold">Filter by Set:</h2>
                            {['base', 'pfb'].map(set => (
                                <label key={set} className="mr-4">
                                    <input 
                                        type="checkbox" 
                                        value={set} 
                                        checked={selectedSets.includes(set)} 
                                        onChange={() => setSelectedSets(prev => 
                                            prev.includes(set) ? prev.filter(s => s !== set) : [...prev, set]
                                        )} 
                                    /> 
                                    {set === 'base' ? 'Base' : 'People From Below'}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <label className="block mb-2">Filter by ID:</label>
                    <input
                        type="range"
                        min={0}
                        max={76}
                        value={idRange[0]} // Use the lower bound of the range
                        onChange={(e) => handleIdRangeChange(e, [Number(e.target.value), idRange[1]])}
                        className="w-full"
                    />
                    <input
                        type="range"
                        min={0}
                        max={76}
                        value={idRange[1]} // Use the upper bound of the range
                        onChange={(e) => handleIdRangeChange(e, [idRange[0], Number(e.target.value)])}
                        className="w-full"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredCards.map(card => (
                    <div
                        key={card.id}
                        className="rounded-lg shadow-md overflow-hidden p-4"
                        style={{
                            backgroundColor: getBackgroundColor(card.color),
                            width: '100%', // Use full width of the grid cell
                            height: '250px', // Keep the height fixed to make it square
                        }}
                    >
                        <h3 className="text-lg font-semibold">ID: {card.id}</h3>
                        <p>Day/Night: {card.daynight}</p>
                        <p>Color: {card.color}</p>
                        <div className="flex space-x-0">
                            <p>Prerequisite: </p>{getImagesFromValues([card.prerequisite])}
                        </div>
                        <p>Reward: {card.reward !== null ? card.reward : 'N/A'}</p>
                        <div className="flex space-x-0">
                            <p>Production: </p>{getImagesFromValues([card.production])}
                        </div>
                        <p>Set: {card.set === 'base' ? 'Base' : 'People From Below'}</p>
                    </div>
                ))}
            </div>
        </GameLayout>
    )
}
