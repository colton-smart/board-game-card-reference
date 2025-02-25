export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to Board Game Card Reference</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Games</h2>
            <p>No recent games to display.</p>
          </div>
          <div className="rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <p>No stats available yet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
