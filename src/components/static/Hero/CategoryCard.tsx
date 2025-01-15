import Image from 'next/image'
import React from 'react'

export type category = {
image: string,
name : string
}

const CategoryCard = ({image,name}:category) => {
  return (
    <div className='w-auto h-full p-4'>
        <div >
        <Image 
        src={image}
        alt=''
        width={400}
        height={400}
        className=' object-contain'
        />
        </div>
        <div className='w-auto text-white font-bold font-rowdies rounded-md'>
          <p className='bg-amber-900 p-4 rounded-lg text-center'>{name}</p>
        </div>
    </div>
  )
}

export default CategoryCard