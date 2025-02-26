'use client'
import { useEffect, useState } from 'react'
import GameLayout from '@/components/GameLayout'
import FilterBar from '@/components/FilterBar'
import CardGrid from '@/components/CardGrid'

const filterOptions = [
    { id: 'locations', label: 'Locations', icon: '🏝️' },
    { id: 'artifacts', label: 'Artifacts', icon: '🏺' },
    { id: 'events', label: 'Events', icon: '⚡' },
    { id: 'characters', label: 'Characters', icon: '👤' },
    { id: 'treasures', label: 'Treasures', icon: '💎' }
]

export default function FarawayPage() {
    const [filters, setFilters] = useState(
        Object.fromEntries(filterOptions.map(opt => [opt.id, false]))
    )
    const [cards, setCards] = useState([]) // Initialize cards state

    const handleFilterChange = (filterId: string) => {
        setFilters(prev => ({ ...prev, [filterId]: !prev[filterId] }))
    }

    useEffect(() => {
        const fetchCardData = async () => {
            const response = await fetch('/board-game-card-reference/card-data/faraway-card-data.json');
            const data = await response.json();
            console.log(data); // Check if data is fetched correctly
            setCards(data);
        };
        fetchCardData();
    }, []);

    return (
        <GameLayout>
            <FilterBar
                title="Faraway"
                filters={filters}
                filterOptions={filterOptions}
                onFilterChange={handleFilterChange}
            />
            <CardGrid cards={cards} /> {/* Pass the cards to CardGrid */}
        </GameLayout>
    )
}
