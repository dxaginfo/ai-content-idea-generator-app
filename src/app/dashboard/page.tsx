export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <h2 className="text-xl font-bold mb-2">Generated Ideas</h2>
            <p className="text-3xl font-semibold">0</p>
          </div>
          
          <div className="card">
            <h2 className="text-xl font-bold mb-2">Saved Ideas</h2>
            <p className="text-3xl font-semibold">0</p>
          </div>
          
          <div className="card">
            <h2 className="text-xl font-bold mb-2">Published Content</h2>
            <p className="text-3xl font-semibold">0</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Generate New Ideas</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2">Content Type</label>
                <select className="input-field w-full">
                  <option value="blog">Blog Post</option>
                  <option value="video">Video</option>
                  <option value="social">Social Media</option>
                </select>
              </div>
              
              <div>
                <label className="block mb-2">Industry/Niche</label>
                <input type="text" className="input-field w-full" placeholder="e.g., Technology, Fitness, Finance" />
              </div>
              
              <div>
                <label className="block mb-2">Target Audience</label>
                <input type="text" className="input-field w-full" placeholder="e.g., Beginners, Professionals, Parents" />
              </div>
              
              <div>
                <label className="block mb-2">Keywords (optional)</label>
                <input type="text" className="input-field w-full" placeholder="Separate keywords with commas" />
              </div>
              
              <button type="submit" className="btn-primary w-full">Generate Ideas</button>
            </form>
          </div>
          
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Recent Ideas</h2>
            <p className="text-gray-500 italic">No ideas generated yet. Use the form to create your first ideas!</p>
          </div>
        </div>
      </div>
    </main>
  )
}
