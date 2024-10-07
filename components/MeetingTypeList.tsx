"use client"
import React from 'react'

const MeetingTypeList = () => {
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      <div className='bg-green-400 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer'>
        Box 1
      </div>
      <div className='bg-yellow-500 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer'>
        Box 2
      </div>
      <div className='bg-orange-400 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer'>
        Box 3
      </div>
      <div className='bg-blue-400 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer'>
        Box 4
      </div>
    </section>

  )
}

export default MeetingTypeList
