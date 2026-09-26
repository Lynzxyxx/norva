import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nova AI',
  description: 'Nova Ai Siap Melayani Anda Dengan Hormat',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
