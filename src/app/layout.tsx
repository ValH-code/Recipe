import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mes Recettes - Découvrez de délicieuses recettes françaises',
  description: 'Une collection de recettes traditionnelles françaises pour régaler vos papilles et impressionner vos invités.',
  keywords: 'recettes, cuisine française, gastronomie, cooking, food',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}