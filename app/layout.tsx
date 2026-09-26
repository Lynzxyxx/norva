import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nova AI Chat',
  description: 'Chat AI seperti ChatGPT, dibangun dengan Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
