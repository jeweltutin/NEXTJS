import { useState } from "react";
import Link from "next/link";

const BrandFilter = ({ brands, onFilterChange }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Check if brands is an array of objects or strings
  const brandNames = Array.isArray(brands)
    ? brands.map(brand => (typeof brand === "string" ? brand : brand.name))
    : [];

  // Handle the selection of a brand
  const handleBrandSelection = (brand) => {
    let updatedSelectedBrands;
    if (selectedBrands.includes(brand)) {
      // If already selected, remove the brand
      updatedSelectedBrands = selectedBrands.filter((b) => b !== brand);
    } else {
      // If not selected, add the brand
      updatedSelectedBrands = [...selectedBrands, brand];
    }

    // Update the state with the new selected brands
    setSelectedBrands(updatedSelectedBrands);

    // Pass the updated selected brands to the parent component
    onFilterChange(updatedSelectedBrands);
  };

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
          />
          <label htmlFor={`checkbox-${index}`}>{brand}</label>
        </div>
      ))}
      <div className="text-[12px] pt-[3px] pl-[15px] text-primary capitalize">
        <Link href="#" onClick={toggleShowAll}>
          {showAll ? "- View Less" : "+ View More"}
        </Link>
      </div>
    </div>
  );
};

export default BrandFilter;
