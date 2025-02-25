interface GameLayoutProps {
    children: React.ReactNode
}

export default function GameLayout({ children }: GameLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-100">
            {children}
        </div>
    )
} 