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

export default function FilterBar({ title, filters, filterOptions, onFilterChange }: FilterBarProps) {
    return (
        <div className="sticky top-0 bg-white shadow-md z-10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
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
        </div>
    )
} 