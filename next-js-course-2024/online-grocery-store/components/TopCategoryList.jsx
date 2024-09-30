import Image from 'next/image';
import Link from 'next/link';

function TopCategoryList({ categoryList, selectedCategory }) {
    return (
        <div className="flex gap-5 mt-2 overflow-x-auto mx-7 md:mx-20 justify-center">
            {categoryList.map((category, index) => (
                <Link href={'/category/' + category.name} 
                className={`flex flex-col gap-2 items-center bg-green-50 p-3 rounded-lg group cursor-pointer  hover:bg-green-600 w-[150px] min-w-[100px]
                ${selectedCategory==category.name&&"bg-green-600 text-white"} `}>
                    <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category?.icon[0]?.url} width={50} height={50} alt="icon" className="group-hover:scale-125 transition-all ease-in-out" />
                    <h2 className={`text-green-800 group-hover:text-white ${selectedCategory==category.name&&" text-white"} ` }>
                        {category.name}
                    </h2>
                </Link>

            ))}
        </div>
    )
}

export default TopCategoryList
