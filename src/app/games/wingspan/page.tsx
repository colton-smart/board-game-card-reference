'use client'
import { useState } from 'react'
import GameLayout from '@/components/GameLayout'
import FilterBar from '@/components/FilterBar'
import CardGrid from '@/components/CardGrid'

const filterOptions = [
    { id: 'birds', label: 'Birds', icon: '🦅' },
    { id: 'bonus', label: 'Bonus Cards', icon: '⭐' },
    { id: 'endRound', label: 'End Round Goals', icon: '🎯' },
    { id: 'automa', label: 'Automa Cards', icon: '🤖' },
    { id: 'habitats', label: 'Habitats', icon: '🌲' }
]

export default function WingspanPage() {
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
            imageUrl: '/path-to-wingspan-card.jpg', 
            name: 'Example Bird Card' 
        },
        // Add more cards
    ]

    return (
        <GameLayout>
            <FilterBar
                title="Wingspan"
                filters={filters}
                filterOptions={filterOptions}
                onFilterChange={handleFilterChange}
            />
            <CardGrid cards={cards} />
        </GameLayout>
    )
}
