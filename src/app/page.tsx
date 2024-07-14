import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center">
      <nav className="flex flex-col gap-4 text-2xl">
        <Link href="/scroll">Infinite Scroll</Link>
        <Link href="/pagination">Pagination</Link>
        <Link href="/solution">Solution</Link>
      </nav>
    </main>
  );
}
