import { useState } from "react";
import Link from "next/link";

const BrandFilter = () => {
  const [showAll, setShowAll] = useState(false);

  const brands = [
    "No Brand",
    "Amazfit",
    "Boat",
    "Kieslect",
    "Promate",
    "Riversong",
    "Skg",
    "Tagg",
    "Xiaomi",
  ];

  const toggleShowAll = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    setShowAll(!showAll);
  };

  return (
    <div className="uppercase text-[11px]">
      {brands.slice(0, showAll ? brands.length : 5).map((brand, index) => (
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
