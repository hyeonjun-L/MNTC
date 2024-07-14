import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center bg-[#e0e0e0]">
      <nav className="flex flex-col gap-16 text-2xl">
        <Link
          href="/scroll"
          className="rounded-lg bg-[#e0e0e0] p-5 shadow-[8px_8px_16px_#a3a3a3,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#a3a3a3,inset_-8px_-8px_16px_#ffffff]"
        >
          Infinite Scroll
        </Link>
        <Link
          href="/pagination"
          className="rounded-lg bg-[#e0e0e0] p-5 shadow-[8px_8px_16px_#a3a3a3,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#a3a3a3,inset_-8px_-8px_16px_#ffffff]"
        >
          Pagination
        </Link>
        <Link
          href="/solution"
          className="rounded-lg bg-[#e0e0e0] p-5 shadow-[8px_8px_16px_#a3a3a3,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#a3a3a3,inset_-8px_-8px_16px_#ffffff]"
        >
          Solution
        </Link>
      </nav>
    </main>
  );
}
