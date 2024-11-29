"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from './ui/textarea';
import ReactDatePicker from 'react-datepicker';
import { Input } from "@/components/ui/input"
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


  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      <HomeCard
        img="/icons/plus-large-svgrepo-com.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState('isInstantMeeting')}

        className="bg-green-400"
      />

      <HomeCard 
        img="/icons/people.svg"
        title="Join Meeting"
        description="Via invitation link"
        handleClick={() => setMeetingState('isJoiningMeeting')}

        className="bg-yellow-500"
      />

      <HomeCard 
        img="/icons/calender.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState('isScheduleMeeting')}

        className="bg-orange-400"
      />
      <HomeCard 
        img="/icons/Video.svg"
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => router.push("/recordings")}
      
        className="bg-blue-400"
      />
      

      {/* Schedule Meeting */}
      {!callDetails ? (
        <MeetingModal
        isOpen={meetingState==='isScheduleMeeting'}
        onClose={()=> setMeetingState(undefined)}
        title="Schedule a Meeting"
        className="text-center"
        image="/icons/callify_logo.svg"
        buttonText="Schedule Meeting"
        handleClick={createMeeting}
      >
        <div className="flex flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Add a description
            </label>
            <Textarea
              placeholder='Description of your Meeting Here!'
              className="border-none bg-dark-2 focus-visible:ring-0 focus:border-green-200 focus-visible:ring-offset-0"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2.5" >
          <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-dark-2 p-2 focus:outline-none"
            />
          </div>
      </MeetingModal>
      ):(
        <MeetingModal
        isOpen={meetingState==='isScheduleMeeting'}
        onClose={()=> setMeetingState(undefined)}
        title="Meeting Created"
        className="text-center"
        image="/icons/callify_logo.svg"
        checkedimage='/gifs/schedule.gif'
        handleClick={()=>{
          navigator.clipboard.writeText(meetingLink)
          toast({title:'Link Copied'})
        }}
        buttonIcon='/icons/copy.svg'
        buttonText="Copy Meeting Link"
        
      />
      )}

      {/* Instant Meeting Function */}
      <MeetingModal
        isOpen={meetingState==='isInstantMeeting'}
        onClose={()=> setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        image="/icons/callify_logo.svg"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />

      {/* Join Meeting */}
      <MeetingModal
        isOpen={meetingState==='isJoiningMeeting'}
        onClose={()=> setMeetingState(undefined)}
        title="Join via the Link"
        className="text-center"
        image="/icons/callify_logo.svg"
        buttonText="Join Meeting"
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder="Meeting link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-dark-2 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </MeetingModal>
    </section>

  )
}

export default MeetingTypeList
