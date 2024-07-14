'use client';
import { useRouter } from 'next/navigation';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const closeModalHandler = () => {
    router.back();
  };

  return (
    <div
      onClick={closeModalHandler}
      className="fixed bottom-0 left-0 right-0 top-0 z-50 mx-auto bg-gray-500/60"
    >
      <article
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="shadow-float bg-White-body dark:bg-dark-body absolute left-1/2 top-1/2 aspect-square size-full -translate-x-1/2 -translate-y-1/2 overflow-hidden sm:h-fit sm:w-[40rem] sm:rounded-md"
      >
        <button
          onClick={closeModalHandler}
          className="absolute right-3 top-3 z-50"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="25.000000pt"
            height="25.000000pt"
            viewBox="0 0 50.000000 50.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M53 456 c4 -9 33 -56 67 -105 33 -50 60 -95 60 -101 0 -6 -27 -51
-60 -101 -84 -124 -84 -121 -19 -117 l54 3 45 67 c25 37 47 67 50 67 3 0 25
-30 50 -67 l45 -67 54 -3 c65 -4 65 -7 -19 117 -33 50 -60 95 -60 101 0 6 27
51 60 101 84 124 84 121 19 117 l-54 -3 -45 -67 c-25 -37 -47 -67 -50 -67 -3
0 -25 30 -50 67 l-45 67 -54 3 c-45 3 -53 1 -48 -12z m137 -78 c28 -40 55 -73
60 -73 5 0 32 33 60 73 43 62 55 72 80 72 l30 0 -66 -100 -67 -100 67 -100 66
-100 -30 0 c-25 0 -37 10 -80 72 -28 40 -55 73 -60 73 -5 0 -32 -33 -60 -73
-43 -62 -55 -72 -80 -72 l-30 0 66 100 67 100 -67 100 -66 100 30 0 c25 0 37
-10 80 -72z"
              />
            </g>
          </svg>
        </button>
        {children}
      </article>
    </div>
  );
};

export default Modal;
