import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

export const metadata = {
  title: "World Explorer",
  description: "Explore countries around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        
        <Navbar />

        <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}