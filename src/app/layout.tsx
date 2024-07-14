import { Noto_Sans_KR } from 'next/font/google';
import Header from './_components/Header';
import type { Metadata } from 'next';
import './globals.css';

const noto = Noto_Sans_KR({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yune',
  description: 'Yune Projets',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={`${noto.className} flex h-lvh flex-col text-base`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
