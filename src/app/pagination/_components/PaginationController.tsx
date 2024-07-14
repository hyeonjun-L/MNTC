import Link from 'next/link';

const PaginationController = ({ currentPage }: { currentPage: number }) => {
  const commonClasses =
    'flex h-10 items-center justify-center border bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
  const activeClasses =
    'z-10 flex h-10 items-center justify-center border border-blue-300 bg-blue-50 px-4 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';

  return (
    <nav
      aria-label="Page navigation example"
      className="flex justify-center py-9"
    >
      <ul className="flex h-10 items-center -space-x-px text-base">
        <li>
          <Link
            href={
              currentPage - 1 > 0
                ? `/pagination?currentPage=${currentPage - 1}`
                : '/pagination?currentPage=1'
            }
            className={`ms-0 rounded-s-lg border-e-0 ${commonClasses}`}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-3 w-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </Link>
        </li>
        {[1, 2, 3, 4, 5, 6].map((page) => (
          <li key={page}>
            <Link
              href={`/pagination?currentPage=${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
              className={currentPage === page ? activeClasses : commonClasses}
            >
              {page}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={
              currentPage + 1 < 7
                ? `/pagination?currentPage=${currentPage + 1}`
                : '/pagination?currentPage=6'
            }
            className={`rounded-e-lg ${commonClasses}`}
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-3 w-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationController;
