export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">About World Explorer</h1>

      <p className="text-lg mb-4">
        World Explorer is a Next.js project that allows users to explore
        countries around the world using real API data.
      </p>

      <p className="text-lg mb-4">
        This project uses the REST Countries API to display information such as
        country names, capitals, regions, populations, and flags.
      </p>

      <p className="text-lg mb-4">
        During this project, several Next.js concepts were practiced including:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>App Router</li>
        <li>File-based Routing</li>
        <li>Layouts</li>
        <li>Server Components</li>
        <li>Client Components</li>
        <li>Dynamic Routes</li>
        <li>Data Fetching</li>
        <li>Static Rendering and Caching</li>
      </ul>
    </div>
  );
}
