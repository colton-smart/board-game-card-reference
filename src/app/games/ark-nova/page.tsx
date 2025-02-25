'use client'
import { useState } from 'react'
import GameLayout from '@/components/GameLayout'
import FilterBar from '@/components/FilterBar'
import CardGrid from '@/components/CardGrid'

const filterOptions = [
    { id: 'animals', label: 'Animals', icon: '🦁' },
    { id: 'sponsors', label: 'Sponsors', icon: '💰' },
    { id: 'conservation', label: 'Conservation Projects', icon: '🌍' },
    { id: 'buildings', label: 'Buildings', icon: '🏗️' },
    { id: 'staff', label: 'Staff', icon: '👥' }
]

export default function ArkNovaPage() {
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
            imageUrl: '/path-to-ark-nova-card.jpg', 
            name: 'Example Animal Card' 
        },
        // Add more cards
    ]

    return (
        <GameLayout>
            <FilterBar
                title="Ark Nova"
                filters={filters}
                filterOptions={filterOptions}
                onFilterChange={handleFilterChange}
            />
            <CardGrid cards={cards} />
        </GameLayout>
    )
}
