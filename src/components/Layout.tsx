import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-orange-600 transition-colors">
            🍳 Livre de Recettes
          </Link>
          <nav className="space-x-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-orange-600 transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-orange-600 transition-colors font-medium"
            >
              À propos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2025 Livre de Recettes. Créé avec ❤️ et Next.js.
          </p>
          <p className="text-gray-400 mt-2">
            Partagez vos recettes préférées avec le monde !
          </p>
        </div>
      </div>
    </footer>
  );
}
