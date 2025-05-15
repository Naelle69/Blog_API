// src/components/Navbar.jsx
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-[#CFEDF2] py-2 shadow-md dark:bg-neutral-700 lg:flex-wrap lg:justify-start">
      <div className="px-6 w-full">
        <button
          className="block border-0 bg-transparent px-2 text-[#373737] hover:no-underline hover:shadow-none focus:outline-none dark:text-neutral-200 lg:hidden"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="[&>svg]:w-7 [&>svg]:stroke-[#CFEDF2] dark:[&>svg]:stroke-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-grow basis-[100%] items-center lg:flex lg:basis-auto`}
        >
          <ul className="me-auto flex flex-col lg:flex-row">
            <li>
              <a
                className="block py-2 pe-2 text-[#373737] transition duration-200 hover:text-[#373737] dark:text-white/60 dark:hover:text-white/80 lg:px-2"
                href="/"
              >
                Accueil
              </a>
            </li>
            <li className="relative">
              <button
                className="flex items-center whitespace-nowrap py-2 pe-2 text-[#373737] transition duration-200 hover:text-[#373737] dark:text-white/60 dark:hover:text-white/80 lg:px-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
              >
                Recettes
                <span className="ms-2 [&>svg]:h-5 [&>svg]:w-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute inset-x-0 top-full z-50 w-screen bg-[#CFEDF2] dark:bg-neutral-800 shadow-md">
                  <div className="mx-auto max-w-screen-xl px-6 py-5 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      {[
                        {
                          title: 'Lorem ipsum',
                          items: ['Dolor sit', 'Amet consectetur', 'Cras justo odio', 'Adipisicing elit'],
                        },
                        {
                          title: 'Explit voluptas',
                          items: ['Perspiciatis quo', 'Cras justo odio', 'Laudantium maiores', 'Provident dolor'],
                        },
                        {
                          title: 'Iste quaerato',
                          items: ['Cras justo odio', 'Est iure', 'Praesentium', 'Laboriosam'],
                        },
                        {
                          title: 'Cras justo odio',
                          items: ['Saepe', 'Vel alias', 'Sunt doloribus', 'Cum dolores'],
                        },
                      ].map((col, idx) => (
                        <div key={idx}>
                          <p className="mb-2 border-b border-neutral-100 pb-2 font-semibold uppercase text-neutral-700 dark:border-white/10 dark:text-white">
                            {col.title}
                          </p>
                          {col.items.map((item, i) => (
                            <a
                              key={i}
                              href="#!"
                              className="block border-b border-neutral-100 py-2 text-neutral-700 hover:bg-zinc-200/60 dark:border-white/10 dark:text-white dark:hover:bg-neutral-700"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
