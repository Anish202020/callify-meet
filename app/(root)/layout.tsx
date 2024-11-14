
import React, { ReactNode } from 'react'

import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Callify",
  description: "Callify - Video Conferencing App",
  icons:{
    icon: "/data/callify.png"
  }
};


const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>

      {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout
