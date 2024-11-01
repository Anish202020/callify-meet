"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useToast } from '@/hooks/use-toast';


const MeetingTypeList = () => {

  const router = useRouter()

  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >(undefined);

  // Getting the user from Clerk Authentication 
  const {user} = useUser();

  const client = useStreamVideoClient()
  const [values,setValues] = useState({
    dateTime: new Date(),
    description:"",
    link : ""
  })

  const [callDetails,setCallDetails] = useState<Call>()

  // Toasts
  const {toast} = useToast()

  const createMeeting= async ()=>{
    // Exit meeting as no client is there
    if(!client || !user) return;

    try {
      if(!values.dateTime){
        toast({title: "Please select a date and time",variant: "destructive"})
        return;
      }

      // Creating meeting ID For a unique meeting
      const id = crypto.randomUUID()
      // Creating the call
      const call = client.call('default',id);

      if(!call) throw new Error("Failed to create call")

      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString()

      const description = values.description || 'Instant meeting'

      await call.getOrCreate({
        data:{
          starts_at:startsAt,
          custom:{
            description
          }
        }
      })

      setCallDetails(call);
      if(!values.description){
        router.push(`/meeting/${call.id}`)

      }
      toast({title: "Meeting Created",variant: "success"})
    } catch (error) {
      console.log(error)
      toast({
        title: "Failed to create meeting",
       variant: "destructive"
      })
    }
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
