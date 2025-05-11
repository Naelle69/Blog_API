// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-[#CFEDF2] text-center text-surface dark:bg-[#CFEDF2] dark:text-white lg:text-left">
      <div className="container p-6">
        <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4">
          
          {/* Première section de liens */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Liens</h5>
            <ul className="mb-0 list-none">
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 1</a></li>
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 2</a></li>
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 3</a></li>
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 4</a></li>
            </ul>
          </div>

          {/* Deuxième section de liens */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Liens</h5>
            <ul className="mb-0 list-none">
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 1</a></li>
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 2</a></li>
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 3</a></li>
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 4</a></li>
            </ul>
          </div>

          {/* Troisième section de liens */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Liens</h5>
            <ul className="mb-0 list-none">
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 1</a></li>
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 2</a></li>
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 3</a></li>
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 4</a></li>
            </ul>
          </div>

          {/* Quatrième section de liens */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Liens</h5>
            <ul className="mb-0 list-none">
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 1</a></li>
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 2</a></li>
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 3</a></li>
              <li><a href="#!" className="text-gray-800 hover:text-gray-600 dark:text-gray-300">Lien 4</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full bg-black/5 p-4 text-center text-sm">
        © {new Date().getFullYear()} Copyright:
        <a href="https://tw-elements.com/ " className="font-semibold text-blue-600 hover:underline">
          TW Elements
        </a>
      </div>
    </footer>
  );
};

export default Footer;