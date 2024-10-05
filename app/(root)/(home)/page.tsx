import React from 'react'

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[350px] w-full rounded-[20px] bg-hero bg-cover'>
      <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded text-black py-2 text-center text-base font-extrabold">
            Callify - Where People Meet
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold text-black lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 text-black lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      
      <h1 className='text-3xl font-bold'>
        Home
      </h1>
    </section>
  )
}

export default Home
