
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function Loading() {
  //return <Skeleton className="w-[400px] h-[400px] bg-black rounded-full"/>
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export default Loading;
