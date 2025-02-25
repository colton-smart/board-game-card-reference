'use client'
import { useState } from 'react'
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

    const handleFilterChange = (filterId: string) => {
        setFilters(prev => ({ ...prev, [filterId]: !prev[filterId] }))
    }

    // Placeholder cards data - replace with actual data later
    const cards = [
        { 
            id: '1', 
            imageUrl: '/path-to-faraway-card.jpg', 
            name: 'Example Location Card' 
        },
        // Add more cards
    ]

    return (
        <GameLayout>
            <FilterBar
                title="Faraway"
                filters={filters}
                filterOptions={filterOptions}
                onFilterChange={handleFilterChange}
            />
            <CardGrid cards={cards} />
        </GameLayout>
    )
}
