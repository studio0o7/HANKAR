import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HANKAR | Luxury Clothing',
  description: 'Classic luxury clothing brand for men and women with an old money aesthetic.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-off-white text-navy min-h-screen flex flex-col overflow-x-hidden max-w-[100vw]`}>
        <Header />
        <main className="flex-grow overflow-x-hidden w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 