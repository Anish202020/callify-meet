import React from 'react'
import { FocusCards } from "@/components/ui/focus-cards";
import { cards } from '@/constants';
const Team = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
    <h1 className='text-3xl font-bold'>
      Team
    </h1>
    <div>
    <FocusCards cards={cards} />
    </div>
  </section>
  )
}

export default Team
