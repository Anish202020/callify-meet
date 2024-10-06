"use client"
import React, { ReactNode } from 'react'
import { useState, useEffect } from 'react';
const Time = ({children}:{children:ReactNode}) => {
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

    const time1= time
  return (
    {time1}
      
    
  )
}

export default Time
