"use client"
import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Lens } from "@/components/ui/lens";
import { FlipWords } from "@/components/ui/flip-words";
import { words } from '@/constants';
import CallList from '@/components/CallList';

const Home = () => {

  // Date
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();

      // Format the time
      const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Kolkata'
      });

      // Format the date
      const formattedDate = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
        timeZone: 'Asia/Kolkata'
      }).format(now);

      setTime(formattedTime);
      setDate(formattedDate);
    };

    // Initial call to set the time and date
    updateTimeAndDate();

    // Update every second
    const intervalId = setInterval(updateTimeAndDate, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  // Lens 
  const [hovering, setHovering] = useState(false);

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      
      <Lens hovering={hovering} setHovering={setHovering}>
        <div className='h-[350px] cursor-pointer w-full rounded-[20px] bg-hero bg-cover'>
          <motion.div
            animate={{
              filter: hovering ? "blur(0px)" : "blur(0px)",
            }}
            className="py-4 cursor-pointer z-20"
          >

            <div className="flex h-full flex-col gap-7 justify-between max-md:px-5 max-md:py-8 lg:p-11">
              <h2 className="glassmorphism max-w-[273px] rounded text-black py-2 text-center text-base font-extrabold">
                <FlipWords words={words} />
              </h2>
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-extrabold text-black lg:text-7xl">{time}</h1>
                <p className="text-lg font-medium text-sky-1 text-black lg:text-2xl">{date}</p>
              </div>
            </div>

          </motion.div>

        </div>
      </Lens>

      <MeetingTypeList />
      <h1 className='text-3xl font-bold'>
        Upcoming Meetings 🎉
      </h1>
      <CallList type="upcoming"/>
    </section>
  )
}

export default Home
