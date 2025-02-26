'use client'
import { useState } from 'react'
import GameLayout from '@/components/GameLayout'
import FilterBar from '@/components/FilterBar'
// import CardGrid from '@/components/CardGrid'

const filterOptions = [
    { id: 'corporation', label: 'Corporations', icon: '🏢' },
    { id: 'project', label: 'Projects', icon: '📋' },
    { id: 'prelude', label: 'Preludes', icon: '🎯' },
    // Add more as needed
]

export default function TerraformingMarsPage() {
    const [filters, setFilters] = useState(
        Object.fromEntries(filterOptions.map(opt => [opt.id, false]))
    )

    const handleFilterChange = (filterId: string) => {
        setFilters(prev => ({ ...prev, [filterId]: !prev[filterId] }))
    }

    // This would come from your database eventually
    const cards = [
        { id: '1', imageUrl: '/path-to-card.jpg', name: 'Example Card' },
        // Add more cards
    ]

    return (
        <GameLayout>
            <FilterBar
                title="Terraforming Mars"
                filters={filters}
                filterOptions={filterOptions}
                onFilterChange={handleFilterChange}
            />
            {/* <CardGrid cards={cards} /> */}
        </GameLayout>
    )
}
