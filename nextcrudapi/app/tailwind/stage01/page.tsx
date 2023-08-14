import Image from "next/image";

export default function basic01() { 
  return (
    <div className="h-screen flex items-center justify-center bg-gray-500 dark:bg-gray-900">
      <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 
                      sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-6
                      dark:bg-green-500">
        <Image className="h-24 mx-auto rounded-full ring-4 ring-green-400 
                          sm:mx-0 sm:flex-shrink-0 transform hover:scale-110 duration-500" 
               src="/images/jeweltutin.png" alt="Profile picture" width={100} height={70}>
        </Image>
        <div  className="text-center space-y-2 sm:text-left hover:bg-new-gra">
          <div className="space-y-0.5">
            <h2 className="text-lg text-black dark:text-yellow-500 font-semibold">Learn with Jewel</h2>
            <p className="text-gray-500 dark:text-yellow-400 font-medium">Youtube Channel</p>
            <p className="jewel-txt">BTV Channel</p>
          </div>
          <button className="btn btn-purple rounded-md">Visit Now</button>
          <button className="btn btn-green ml-2">Website</button>
        </div>
      </div>
      <div className="mydiv text-center">
          Here basic css used
      </div>
    </div>

  )
}
