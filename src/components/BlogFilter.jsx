// src/components/BlogFilters.jsx
import React, { useState } from 'react';

const BlogFilters = ({ products }) => {
  const [filters, setFilters] = useState({
    featured: true,
    sortBy: '',
    brand: [],
    inStock: false,
    priceRange: [0, 320],
  });

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className="">
      <h2 className="text-xl font-bold mb-6">Filtrer les produits</h2>

      {/* Trier par */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Trier par</h3>
        <label className="flex items-center mb-2">
          <input type="checkbox" checked={filters.featured} onChange={() => handleFilterChange('featured', !filters.featured)} className="mr-2" />
          En vedette
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="sortBy" value="bestSellers" checked={filters.sortBy === 'bestSellers'} onChange={() => handleFilterChange('sortBy', 'bestSellers')} className="mr-2" />
          Meilleures ventes
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="sortBy" value="alphabeticalAsc" checked={filters.sortBy === 'alphabeticalAsc'} onChange={() => handleFilterChange('sortBy', 'alphabeticalAsc')} className="mr-2" />
          Alphabetique A-Z
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="sortBy" value="alphabeticalDesc" checked={filters.sortBy === 'alphabeticalDesc'} onChange={() => handleFilterChange('sortBy', 'alphabeticalDesc')} className="mr-2" />
          Alphabetique Z-A
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="sortBy" value="priceLowToHigh" checked={filters.sortBy === 'priceLowToHigh'} onChange={() => handleFilterChange('sortBy', 'priceLowToHigh')} className="mr-2" />
          Prix croissant
        </label>
        <label className="flex items-center mb-2">
          <input type="radio" name="sortBy" value="priceHighToLow" checked={filters.sortBy === 'priceHighToLow'} onChange={() => handleFilterChange('sortBy', 'priceHighToLow')} className="mr-2" />
          Prix décroissant
        </label>
      </div>

      {/* Marque */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Marque</h3>
        <label className="flex items-center mb-2">
          <input type="checkbox" value="Babymoov" checked={filters.brand.includes('Babymoov')} onChange={(e) =>
            handleFilterChange(
              'brand',
              e.target.checked ? [...filters.brand, 'Babymoov'] : filters.brand.filter(b => b !== 'Babymoov')
            )
          } className="mr-2" />
          Babymoov (14)
        </label>
        <label className="flex items-center mb-2">
          <input type="checkbox" value="doomoo" checked={filters.brand.includes('doomoo')} onChange={(e) =>
            handleFilterChange(
              'brand',
              e.target.checked ? [...filters.brand, 'doomoo'] : filters.brand.filter(b => b !== 'doomoo')
            )
          } className="mr-2" />
          doomoo (2)
        </label>
      </div>

      {/* Disponibilité en stock */}
      <div className="mb-6 flex items-center">
        <label className="flex items-center">
          <input type="checkbox" checked={filters.inStock} onChange={(e) => handleFilterChange('inStock', e.target.checked)} className="mr-2" />
          En stock uniquement
        </label>
      </div>

      {/* Prix */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Prix</h3>
        <div className="relative">
          <input
            type="range"
            min="0"
            max="320"
            step="1"
            value={filters.priceRange[1]}
            onChange={(e) =>
              handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])
            }
            className="w-full h-2 bg-gray-200 rounded appearance-none cursor-pointer"
          />
          <span className="absolute left-0 top-[-15px] text-sm">€{filters.priceRange[0]}</span>
          <span className="absolute right-0 top-[-15px] text-sm">€{filters.priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogFilters;