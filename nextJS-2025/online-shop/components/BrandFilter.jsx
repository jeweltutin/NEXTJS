import { useState } from "react";

const BrandFilter = ({ brands, onFilterChange }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Extract brand names from the array of brands
  const brandNames = Array.isArray(brands)
    ? brands.map(brand => (typeof brand === "string" ? brand : brand.name))
    : [];

  // Handle the selection of a brand
  const handleBrandSelection = (brand) => {
    setSelectedBrands((prevSelectedBrands) => {
      const updatedSelectedBrands = prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter((b) => b !== brand) // Remove if already selected
        : [...prevSelectedBrands, brand];              // Add if not selected
      onFilterChange(updatedSelectedBrands);            // Update parent component
      return updatedSelectedBrands;
    });
  };

  // Toggle to show all or limited brands
  const toggleShowAll = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowAll(!showAll);
  };

  return (
    <div className="uppercase text-[11px]">
      {brandNames.slice(0, showAll ? brandNames.length : 5).map((brand, index) => (
        <div className="flex gap-2 py-[5px]" key={index}>
          <input
            type="checkbox"
            id={`checkbox-${index}`}
            checked={selectedBrands.includes(brand)}
            onChange={() => handleBrandSelection(brand)}
            aria-label={`Filter by ${brand}`}
          />
          <label htmlFor={`checkbox-${index}`}>{brand}</label>
        </div>
      ))}
      <div className="text-[12px] pt-[3px] pl-[15px] text-primary capitalize">
        <button onClick={toggleShowAll} className="text-primary">
          {showAll ? "- View Less" : "+ View More"}
        </button>
      </div>
    </div>
  );
};

export default BrandFilter;
