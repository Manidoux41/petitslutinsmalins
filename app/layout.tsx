// 📁 app/layout.tsx
import "./globals.css"
import { Inter } from "next/font/google"
import { Metadata } from "next"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Petits Lutins Malin",
  description: "Boutique magique pour enfants de 0 à 7 ans ✨",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className + " bg-pink-50 text-gray-800"}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-pink-600">
        🧚‍♀️ Petits Lutins Malin
      </Link>
      <nav className="space-x-4">
        <Link href="/boutique" className="text-pink-600 hover:underline">
          Boutique
        </Link>
        <Link href="/profil" className="text-pink-600 hover:underline">
          Profil
        </Link>
        <Link href="/admin" className="text-pink-600 hover:underline">
          Admin
        </Link>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-pink-100 text-center py-6 mt-12">
      <p className="text-sm text-pink-700">© 2025 Petits Lutins Malin. Tous droits réservés.</p>
    </footer>
  )
}
