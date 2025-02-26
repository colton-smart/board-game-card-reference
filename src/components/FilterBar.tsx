import React from 'react';

interface FilterOption {
    id: string
    label: string
    icon: string // You might want to change this to a proper icon type
}

interface FilterBarProps {
    title: string
    filters: Record<string, boolean>
    filterOptions: FilterOption[]
    onFilterChange: (filterId: string) => void
}

const FilterBar: React.FC<FilterBarProps> = ({ title, filters, filterOptions, onFilterChange }) => {
    return (
        <div className="bg-black text-white p-4 sticky top-0 z-10">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="flex gap-4">
                    {filterOptions.map((option) => (
                        <button 
                            key={option.id}
                            className={`p-2 rounded-lg ${
                                filters[option.id] ? 'bg-blue-500 text-white' : 'bg-gray-200'
                            }`}
                            onClick={() => onFilterChange(option.id)}
                        >
                            <span className="sr-only">{option.label}</span>
                            {option.icon}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterBar; 