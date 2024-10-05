"use client"
import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const Explanation = () => {
  return (
    <section className='flex size-full flex-col  text-white'>
    <h1 className='text-3xl font-bold'>
      Explanation
    </h1>
    <div>
      <CardContainer className="inter-var">
      <CardBody className="bg-dark-1 p-6 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          Callify - Video Conferencing App
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm max-w-sm mt-2 dark:text-white"
        >
          Emma gives the explanation on the working of Callify
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          
          <iframe 
          width={100} 
          height={100} 
          src="https://www.youtube.com/embed/-muNwJdUUJ4?si=lIKr13AxNBvfZ62Y" 
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <Link
            
            
            href="/team"
            className="px-4 py-2 rounded-xl text-sm font-bold text-white"
          >
            Team →
          </Link>
          <Link
            href={"https://github.com/Anish202020/callify-meet"}
            target="__blank"
            className="px-4 py-2 rounded-xl flex gap-1 justify-center bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <FaGithub className='size-4' />
            <div className='top-6'>Github</div>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
    </div>
  </section>
  )
}

export default Explanation
