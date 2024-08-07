
import { getGoogleSheetsData } from "@/lib/gsheets";
import { google } from "googleapis";
import Link from "next/link";

const DetailsPage = async (id)  => {
    const range = `Sheet1!A${2}:G${3}`;
    const sheetId = "1qqy3h9jITsTyO88HTjrFyF-YJamLi-lM1jBoi42Y0Ps";
    const item = await getGoogleSheetsData(sheetId, range);
    // console.log(data.data.values);
    return (
        <div className="flex p-8 mt-48 min-h-screen w-full">
            <div className="grid grid-cols-1 gap-3 mx-auto container prose prose-img:w-full prose-img:h-fit prose-img:object-cover prose-img:rounded-md" dangerouslySetInnerHTML={{ __html: item[1] }}>
            
            </div>
        </div>
    )
}

export default DetailsPage


