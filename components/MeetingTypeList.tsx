"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';

const MeetingTypeList = () => {

  const router = useRouter()

  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >(undefined);

  const createMeeting=()=>{
    
  }



  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState('isInstantMeeting')}

        className="bg-green-400"
      />

      <HomeCard 
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="Via invitation link"
        handleClick={() => setMeetingState('isJoiningMeeting')}

        className="bg-yellow-500"
      />

      <HomeCard 
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState('isScheduleMeeting')}

        className="bg-orange-400"
      />
      <HomeCard 
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => router.push("/recordings")}
      
        className="bg-blue-400"
      />
      


      <MeetingModal
        isOpen={meetingState==='isInstantMeeting'}
        onClose={()=> setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        image="/icons/callify_logo.svg"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>

  )
}

export default MeetingTypeList
