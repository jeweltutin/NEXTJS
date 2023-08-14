const Movie = dynamic(()=>import('../../components/movie'))
import dynamic from 'next/dynamic'
import React from 'react'

const page = () => {
  return (
    <div>
      <Movie/>
    </div>
  )
}

export default page
