import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";

export const metadata = {
  title: "FridgeMinder",
  description: "Mind your Fridge",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex justify-center items-start p-6 min-h-screen bg-purple-200">
          {children}
        </main>
      </body>
    </html>
  );
}
