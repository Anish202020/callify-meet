"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'

const Meeting = ({params}:{params:{id:string}}) => {
  const user= useUser() 
  return (
    <div>
        <div>Meeting Room: #{params.id}</div>
    </div>
  )
}

export default Meeting
