export default function AboutPage() {
  return (
    <div className="flex justify-center items-center py-16 px-6">
      
      <div className="bg-white shadow-2xl rounded-3xl max-w-5xl w-full p-14">
        
        <h1 className="text-5xl font-bold text-center mb-12">
          About World Explorer
        </h1>

        <div className="space-y-8">
          
          <p className="text-lg text-gray-700 py-6 px-4 leading-9">
            World Explorer is a Next.js project that allows
            users to explore countries around the world
            using real API data.
          </p>

          <p className="text-lg text-gray-700 py-6 px-4 leading-9">
            This project uses the REST Countries API to
            display information such as country names,
            capitals, regions, populations, and flags.
          </p>

          <p className="text-lg text-gray-700 py-6 px-4 leading-9">
            During this project, several important Next.js
            concepts were practiced:
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          
          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              App Router
            </h2>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              File-based Routing
            </h2>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Layouts
            </h2>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Server Components
            </h2>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Client Components
            </h2>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Dynamic Routes
            </h2>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Data Fetching
            </h2>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Static Rendering & Caching
            </h2>
          </div>

        </div>

      </div>
    </div>
  );
}
