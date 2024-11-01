import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex-center h-screen w-full'>
      <Image src="/icons/loading-circle.svg" alt='loading' width={60} height={60}/>
    </div>
  )
}

export default Loader
