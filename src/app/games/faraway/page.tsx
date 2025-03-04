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
}

const FilterButton = ({ selected, onClick, children }: FilterButtonProps) => (
    <button 
        className={`mr-4 p-2 border rounded ${selected ? 'bg-blue-500' : 'bg-gray-200'}`} 
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
            if (!value) continue;
            for (const char of value) {
                switch (char) {
                    case 'b':
                        images.push(
                            <Image
                                key={`b-${images.length}`}
                                src="/board-game-card-reference/images/faraway_assets/uddu_stone.png"
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
                                src="/board-game-card-reference/images/faraway_assets/goldlog_thistle.png"
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
                                src="/board-game-card-reference/images/faraway_assets/okiko_chimera.png"
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
                                src="/board-game-card-reference/images/faraway_assets/clue.png"
                                width={30}
                                height={30}
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
                                width={30}
                                height={30}
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
                                width={30}
                                height={30}
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
                                width={30}
                                height={30}
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
                                width={30}
                                height={30}
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
                                width={40}
                                height={30}
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
                                width={30}
                                height={30}
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
                                width={30}
                                height={30}
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
                                width={30}
                                height={30}
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
                                width={30}
                                height={30}
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

    return (
        <GameLayout>
            <div className="bg-black text-white p-4 sticky top-0 z-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Faraway</h1>
                    <div className="flex gap-4">
                        <div className="mt-4">
                            <h2 className="font-bold">Filter by Card Color:</h2>
                            {['B', 'R', 'G', 'Y', 'N'].map(color => (
                                <FilterButton 
                                    key={color} 
                                    value={color} 
                                    selected={selectedColors.includes(color)} 
                                    onClick={() => handleColorChange(color)}
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
                        {/* New Day/Night Filter */}
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
                        {/* New Prerequisite Filter with Buttons */}
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
                        {/* New Production Filter */}
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
                        {/* New Type Filter */}
                        <div className="mt-4">
                            <h2 className="font-bold">Filter by Type:</h2>
                            {['region', 'sanctuary'].map(type => (
                                <label key={type} className="mr-4">
                                    <input 
                                        type="checkbox" 
                                        value={type} 
                                        checked={selectedTypes.includes(type)} 
                                        onChange={() => setSelectedTypes(prev => 
                                            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
                                        )} 
                                    /> 
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
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
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredCards.map(card => (
                    <div
                        key={card.id}
                        className="rounded-lg shadow-md overflow-hidden p-4"
                        style={{
                            backgroundColor: getBackgroundColor(card.color),
                            width: '100%',
                            height: '250px',
                        }}
                    >
                        <h3 className="text-lg font-semibold">ID: {card.id}</h3>
                        <p>Type: {card.type === 'region' ? 'Region' : 'Sanctuary'}</p>
                        <div className="flex space-x-0">
                            <p>Day/Night: </p>{getImagesFromValues([card.daynight])}
                        </div>
                        <div className="flex space-x-0">
                            <p>Card Color: </p>{getImagesFromValues([card.color])}
                        </div>
                        <div className="flex space-x-0">
                            <p>Production: </p>{getImagesFromValues([card.production])}
                        </div>
                        <div className="flex space-x-0">
                            <p>Prerequisite: </p>{getImagesFromValues([card.prerequisite])}
                        </div>
                        <div className="flex space-x-0">
                            <p>Reward: </p>{renderReward(card.reward)}
                        </div>
                        <p>Set: {card.set === 'base' ? 'Base' : 'People From Below'}</p>
                        
                    </div>
                ))}
            </div>
        </GameLayout>
    )
}
