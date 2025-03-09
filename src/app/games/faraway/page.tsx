'use client'
import { useEffect, useState, ChangeEvent } from 'react'
import GameLayout from '@/components/GameLayout'
import Image from 'next/image';

interface Card {
    id: number;
    daynight: string | null;
    color: string;
    production: string | null;
    prerequisite: string | null;
    reward: string | null;
    set: string;
    type: string;
}

interface FilterButtonProps {
    value: string;
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const FilterButton = ({ selected, onClick, children, className }: FilterButtonProps) => (
    <button 
        className={`mr-4 p-2 border rounded ${selected ? 'bg-blue-500' : 'bg-gray-200'} ${className || ''}`} 
        onClick={onClick}
    >
        {children}
    </button>
);

export default function FarawayPage() {
    const [cards, setCards] = useState<Card[]>([])
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [idRange, setIdRange] = useState<[number, number]>([0, 152]);
    const [selectedDayNight, setSelectedDayNight] = useState<string[]>([]);
    const [selectedPrerequisites, setSelectedPrerequisites] = useState<string[]>([]);
    const [selectedProduction, setSelectedProduction] = useState<string[]>([]);
    const [selectedSets, setSelectedSets] = useState<string[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

    const getImagesFromValues = (values: (string | null)[], size: 'small' | 'default' = 'default') => {
        const images: JSX.Element[] = [];
        const imgSize = size === 'small' ? 20 : 30; // Set smaller size for mobile

        for (const value of values) {
            if (!value) continue;
            for (const char of value) {
                switch (char) {
                    case 'b':
                        images.push(
                            <Image
                                key={`b-${images.length}`}
                                src="/board-game-card-reference/images/faraway_assets/uddu_stone.png"
                                width={imgSize}
                                height={imgSize}
                                alt="Uddu Stone"
                                className="object-contain"
                            />
                        );
                        break;
                    case 'g':
                        images.push(
                            <Image
                                key={`g-${images.length}`}
                                src="/board-game-card-reference/images/faraway_assets/goldlog_thistle.png"
                                width={imgSize}
                                height={imgSize}
                                alt="Goldlog Thistle"
                                className="object-contain"
                            />
                        );
                        break;
                    case 'r':
                        images.push(
                            <Image
                                key={`r-${images.length}`}
                                src="/board-game-card-reference/images/faraway_assets/okiko_chimera.png"
                                width={imgSize}
                                height={imgSize}
                                alt="Okiko Chimera"
                                className="object-contain"
                            />
                        );
                        break;
                    case 'c':
                        images.push(
                            <Image
                                key={`c-${images.length}`}
                                src="/board-game-card-reference/images/faraway_assets/clue.png"
                                width={imgSize}
                                height={imgSize}
                                alt="Clue"
                                className="object-contain"
                            />
                        );
                        break;
                    case 'B':
                        images.push(
                            <Image
                                key={`B-${images.length}`}
                                src="/board-game-card-reference/images/faraway_assets/b_card.png"
                                width={imgSize}
                                height={imgSize}
                                alt="Blue Card"
                                className="object-contain"
                            />
                        );
                        break;
                    case 's':
                        images.push(
                            <Image
                                key={`s-${images.length}`}
                                src="/board-game-card-reference/images/faraway_assets/card_set.png"
                                width={imgSize}
                                height={imgSize}
                                alt="Four Color Card Set"
                                className="object-contain"
                            />
                        );
                        break;
                    case 'd':
                        images.push(
                            <Image
                                key={`d-${images.length}`}
                                src="/board-game-card-reference/images/faraway_assets/day.png"
                                width={imgSize}
                                height={imgSize}
                                alt="Day"
                                className="object-contain"
                            />
                        );
                        break;
                    case 'G':
                        images.push(
                            <Image
                                key={`G-${images.length}`}
                                src="/board-game-card-reference/images/faraway_assets/g_card.png"
                                width={imgSize}
                                height={imgSize}
                                alt="Green Card"
                                className="object-contain"
                            />
                        );
                        break;
                    case 'i':
                        images.push(
                            <Image
                                key={`i-${images.length}`}
                                src="/board-game-card-reference/images/faraway_assets/icon_set.png"
                                width={imgSize}
                                height={imgSize}
                                alt="Resource Set"
                                className="object-contain"
                            />
                        );
                        break;
                    case 'N':
                        images.push(
                            <Image
                                key={`N-${images.length}`}
                                src="/board-game-card-reference/images/faraway_assets/n_card.png"
                                width={imgSize}
                                height={imgSize}
                                alt="Gray Card"
                                className="object-contain"
                            />
                        );
                        break;
                    case 'n':
                        images.push(
                            <Image
                                key={`n-${images.length}`}
                                src="/board-game-card-reference/images/faraway_assets/night.png"
                                width={imgSize}
                                height={imgSize}
                                alt="Night"
                                className="object-contain"
                            />
                        );
                        break;
                    case 'R':
                        images.push(
                            <Image
                                key={`R-${images.length}`}
                                src="/board-game-card-reference/images/faraway_assets/r_card.png"
                                width={imgSize}
                                height={imgSize}
                                alt="Red Card"
                                className="object-contain"
                            />
                        );
                        break;
                    case 'Y':
                        images.push(
                            <Image
                                key={`Y-${images.length}`}
                                src="/board-game-card-reference/images/faraway_assets/y_card.png"
                                width={imgSize}
                                height={imgSize}
                                alt="Yellow Card"
                                className="object-contain"
                            />
                        );
                        break;
                    default:
                        images.push(<span key={`text-${images.length}`}>{char}</span>);
                        break;
                }
            }
        }
        return images;
    };

    const renderReward = (reward: string | null) => {
        if (!reward) return null;
        return <span>{reward}</span>;
    };

    // Filter cards based on selected colors, day/night, prerequisites, production, and ID range
    const filteredCards = cards.filter(card => 
        (selectedColors.length === 0 || selectedColors.includes(card.color)) &&
        (selectedDayNight.length === 0 || (card.daynight && selectedDayNight.includes(card.daynight))) &&
        (selectedPrerequisites.length === 0 || (card.prerequisite && selectedPrerequisites.every(p => card.prerequisite?.includes(p)))) &&
        (selectedProduction.length === 0 || (card.production && selectedProduction.every(p => card.production?.includes(p)))) &&
        (selectedSets.length === 0 || selectedSets.includes(card.set)) &&
        (selectedTypes.length === 0 || selectedTypes.includes(card.type)) &&
        card.id >= idRange[0] && card.id <= idRange[1]
    );

    // Calculate the number of remaining cards based on the current filters
    const remainingCardsCount = filteredCards.length;

    return (
        <GameLayout>
            <div className="bg-black text-white p-4 sticky top-0 z-10 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Faraway</h1>
                <button 
                    onClick={() => setIsDrawerOpen(true)} 
                    className="p-2 border rounded bg-gray-700 hover:bg-gray-600"
                >
                    <span>Filter</span>
                </button>
            </div>
            {isDrawerOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-20 flex justify-center items-start">
                    <div className="bg-white text-black w-full max-w-md p-4 rounded-t-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold text-center flex-grow">
                                Filters ({remainingCardsCount} results)
                            </h2>
                            <button 
                                onClick={() => setIsDrawerOpen(false)} 
                                className="text-gray-500 hover:text-gray-800"
                            >
                                <span className="text-lg font-bold">X</span>
                            </button>
                        </div>
                        <div className="mt-4">
                            <h2 className="font-bold">Filter by Card Color:</h2>
                            <div className="flex flex-wrap justify-between">
                                {['B', 'R', 'G', 'Y', 'N'].map(color => (
                                    <FilterButton 
                                        key={color} 
                                        value={color} 
                                        selected={selectedColors.includes(color)} 
                                        onClick={() => handleColorChange(color)}
                                        className="flex-1 m-1"
                                    >
                                        <Image
                                            src={`/board-game-card-reference/images/faraway_assets/${color.toLowerCase()}_card.png`}
                                            width={40}
                                            height={40}
                                            alt={`${color} Card`}
                                            className="object-contain"
                                        />
                                    </FilterButton>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2 className="font-bold">Filter by Day / Night:</h2>
                            {['d', 'n'].map(dayNight => (
                                <FilterButton 
                                    key={dayNight} 
                                    value={dayNight} 
                                    selected={selectedDayNight.includes(dayNight)} 
                                    onClick={() => handleDayNightChange(dayNight)}
                                >
                                    <Image 
                                        src={`/board-game-card-reference/images/faraway_assets/${dayNight === 'd' ? 'day' : 'night'}.png`} 
                                        width={40}
                                        height={40}
                                        alt={dayNight === 'd' ? 'Day' : 'Night'}
                                        className="object-contain"
                                    />
                                </FilterButton>
                            ))}
                        </div>
                        <div className="mt-4">
                            <h2 className="font-bold">Filter by Prerequisite:</h2>
                            {['b', 'r', 'g'].map(prerequisite => (
                                <FilterButton 
                                    key={prerequisite} 
                                    value={prerequisite} 
                                    selected={selectedPrerequisites.includes(prerequisite)} 
                                    onClick={() => handlePrerequisiteChange(prerequisite)}
                                >
                                    <Image
                                        src={`/board-game-card-reference/images/faraway_assets/${prerequisite === 'b' ? 'uddu_stone' : prerequisite === 'r' ? 'okiko_chimera' : 'goldlog_thistle'}.png`}
                                        width={40}
                                        height={40}
                                        alt={prerequisite === 'b' ? 'Uddu Stone' : prerequisite === 'r' ? 'Okiko Chimera' : 'Goldlog Thistle'}
                                        className="object-contain"
                                    />
                                </FilterButton>
                            ))}
                        </div>
                        <div className="mt-4">
                            <h2 className="font-bold">Filter by Production:</h2>
                            {['b', 'r', 'g', 'c'].map(production => (
                                <FilterButton 
                                    key={production} 
                                    value={production} 
                                    selected={selectedProduction.includes(production)} 
                                    onClick={() => handleProductionChange(production)}
                                >
                                    <Image
                                        src={`/board-game-card-reference/images/faraway_assets/${production === 'b' ? 'uddu_stone' : production === 'r' ? 'okiko_chimera' : production === 'g' ? 'goldlog_thistle' : 'clue'}.png`}
                                        width={40}
                                        height={40}
                                        alt={production === 'b' ? 'Uddu Stone' : production === 'r' ? 'Okiko Chimera' : production === 'g' ? 'Goldlog Thistle' : 'Clue'}
                                        className="object-contain"
                                    />
                                </FilterButton>
                            ))}
                        </div>
                        <div className="mt-4">
                            <h2 className="font-bold">Filter by Set:</h2>
                            <div className="flex items-center">
                                <input type="checkbox" id="base" className="mr-2" />
                                <label htmlFor="base" className="mr-4">Base</label>
                                <input type="checkbox" id="people" className="mr-2" />
                                <label htmlFor="people">People From Below</label>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2 className="font-bold">Filter by Type:</h2>
                            <div className="flex items-center">
                                <input type="checkbox" id="region" className="mr-2" />
                                <label htmlFor="region" className="mr-4">Region</label>
                                <input type="checkbox" id="sanctuary" className="mr-2" />
                                <label htmlFor="sanctuary">Sanctuary</label>
                            </div>
                        </div>
                        <div className="my-4">
                            <label className="block mb-2">Filter by ID:</label>
                            <input
                                type="range"
                                min={0}
                                max={144}
                                value={idRange[0]}
                                onChange={(e) => handleIdRangeChange(e, [Number(e.target.value), idRange[1]])}
                                className="w-full"
                            />
                            <input
                                type="range"
                                min={0}
                                max={144}
                                value={idRange[1]}
                                onChange={(e) => handleIdRangeChange(e, [idRange[0], Number(e.target.value)])}
                                className="w-full"
                            />
                        </div>
                        <button 
                            onClick={() => {
                                // Handle apply logic here
                                setIsDrawerOpen(false); // Close the drawer after applying
                            }} 
                            className="mt-4 w-full p-2 border rounded bg-blue-500 text-white font-bold"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredCards.map(card => (
                    <div
                        key={card.id}
                        className="rounded-lg shadow-md overflow-hidden p-2"
                        style={{
                            backgroundColor: getBackgroundColor(card.color),
                            width: '100%',
                            height: 'auto',
                        }}
                    >
                        <h3 className="text-xs sm:text-sm font-semibold">ID: {card.id}</h3>
                        <p className="text-xs sm:text-sm">Type: {card.type === 'region' ? 'Region' : 'Sanctuary'}</p>
                        <div className="flex space-x-0">
                            <p className="text-xs sm:text-sm">Day/Night: </p>{getImagesFromValues([card.daynight], 'small')}
                        </div>
                        <div className="flex space-x-0">
                            <p className="text-xs sm:text-sm">Card Color: </p>{getImagesFromValues([card.color], 'small')}
                        </div>
                        <div className="flex space-x-0">
                            <p className="text-xs sm:text-sm">Production: </p>{getImagesFromValues([card.production], 'small')}
                        </div>
                        <div className="flex space-x-0">
                            <p className="text-xs sm:text-sm">Prerequisite: </p>{getImagesFromValues([card.prerequisite], 'small')}
                        </div>
                        <div className="flex space-x-0">
                            <p className="text-xs sm:text-sm">Reward: </p>{renderReward(card.reward)}
                        </div>
                        <p className="text-xs sm:text-sm">Set: {card.set === 'base' ? 'Base' : 'People From Below'}</p>
                    </div>
                ))}
            </div>
        </GameLayout>
    )
}
