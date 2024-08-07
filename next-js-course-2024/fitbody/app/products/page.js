
import { getGoogleSheetsData } from "@/lib/gsheets";
import { google } from "googleapis";
import Link from "next/link";

export default async function Products() {
    const range = `bags!A:G`;
    const sheetId = "1qqy3h9jITsTyO88HTjrFyF-YJamLi-lM1jBoi42Y0Ps";
    const posts = await getGoogleSheetsData(sheetId, range);
    //console.log(posts);
    function getTagsFromText(text) {
        return text?.split(",").map((tag) => tag.trim());
    }

    const image = 
        {
          name: "Doctor Strange in the Multiverse of Madness",
          src: "https://drive.google.com/thumbnail?export=view&id=1KS17u3J-65uTBWZfswSrHT1m5lZSIO45",
        }

    return (
        <div className="flex flex-col p-4 mt-40 min-h-screen w-full items-center justify-center">
            <div>
                <h1 className="text-4xl font-bold text-center my-2 selection:rounded-xl">
                    Google Sheets as CMS
                </h1>
            </div>
            <h2>Category 01</h2>
            <div className="grid grid-cols-3 gap-3">
                {posts.map((item, index) => (
                    item[4] == 1 ?
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-2xl">
                            <Link href={`/products/${item[5]}`}>
                                <img className="w-full h-60 object-cover object-center rounded select-none" src={item[2]} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{item[0]}</div>
                                    <p className="text-gray-700 text-base whitespace-nowrap text-ellipsis overflow-hidden block">
                                        {item[1].replace(/<[^>]+>/g, "")}
                                    </p>
                                </div>
                                <div className="px-6 pt-1 pb-2">
                                    {getTagsFromText(item[3]).map((tag, index) => (
                                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </div>:
                        <div>
                            
                        </div>
                ))}
            </div>

            <h2>Category 02</h2>
            <div className="grid grid-cols-3 gap-3">
                {posts.map((item, index) => (
                    item[4] == 2 ?
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-2xl">
                            <Link href={`/products/${item[5]}`}>
                                <img className="w-full h-60 object-cover object-center rounded select-none" src={item[2]} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{item[0]}</div>
                                    <p className="text-gray-700 text-base whitespace-nowrap text-ellipsis overflow-hidden block">
                                        {item[1].replace(/<[^>]+>/g, "")}
                                    </p>
                                </div>
                                <div className="px-6 pt-1 pb-2">
                                    {getTagsFromText(item[3]).map((tag, index) => (
                                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </div>:
                        <div>
                            
                        </div>
                ))}
            </div>
            {/* <div>
                <img src={image.src} alt={image.name} />
            </div> */}
        </div>
    );
}
