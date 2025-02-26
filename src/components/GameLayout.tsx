interface GameLayoutProps {
    children: React.ReactNode
}

export default function GameLayout({ children }: GameLayoutProps) {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    )
} 