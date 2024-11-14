"use client"
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import { error } from 'console'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ({ setIsSetupComplete }: { setIsSetupComplete: (value: boolean) => void }) => {


  //On and Off of Mic and Video Service 
  const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false)
  const [isMicToggleOn, setIsMicToggleOn] = useState(false)
  const [isCamToggleOn, setIsCamToggleOn] = useState(false)


  const call = useCall()


  if (!call) {
    throw new Error('usecall must be used within StreamCall components')
  }

  //   Initializing the camera and mic on
  useEffect(() => {
    if (isMicCamToggleOn) {
      call?.camera.disable()
      call?.microphone.disable()
    } else {
      call?.camera.enable()
      call?.microphone.enable()

    }
  }, [isMicCamToggleOn, call?.camera, call?.microphone])
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
      <h1 className='text-2xl font-bold'>Setup</h1>
      {/* Video Preview */}
      <VideoPreview />
      <div className='flex h-16 items-center justify-center gap-3'>
        <label className='flex items-center justify-center gap-2 font-medium'>
          <input type='checkbox' checked={isMicCamToggleOn} onChange={(e) => setIsMicCamToggleOn(e.target.checked)} />
          Join with mic and camera off
          {/* {isMicToggleOn ? ():() } */}
        </label>
        <DeviceSettings />
      </div>
      <Button className='rounded-md bg-white px-4 py-2.5 font-bold text-black hover:bg-gray-300' onClick={() => {
        call.join()
        setIsSetupComplete(true);
      }}>
        Join Meeting
      </Button>
    </div>
  )
}

export default MeetingSetup
