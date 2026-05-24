import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

export const detameta = {
  title: "World Explorer",
  description: "A Next.js country explorer project",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-black">
        <Navbar />
        <main className="min-h-screen p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
