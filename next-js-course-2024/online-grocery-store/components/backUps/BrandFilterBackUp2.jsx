import { useState } from "react";
import Link from "next/link";

const BrandFilter = ({ brands }) => {
  const [showAll, setShowAll] = useState(false);

  // Check if brands is an array of objects or strings
  const brandNames = Array.isArray(brands) 
    ? brands.map(brand => (typeof brand === "string" ? brand : brand.name))
    : [];

  const toggleShowAll = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    setShowAll(!showAll);
  };

  return (
    <div className="uppercase text-[11px]">
      {brandNames.slice(0, showAll ? brandNames.length : 5).map((brand, index) => (
        <div className="flex gap-2 py-[5px]" key={index}>
          <input type="checkbox" id={`checkbox-${index}`} />
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
