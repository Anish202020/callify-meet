import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex-beween flex justify-between items-center fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href={"/"} className='flex items-center gap-1'>
        <Image src="/icons/callify_logo.svg" alt="Callify Logo" width={50} height={50} className="max-sm:size-10"/>
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Callify
        </p>
      </Link>


      <div className="flex-between flex justify-between items-center gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
         
        <MobileNav /> 
      </div>
    </nav>
  )
}

export default Navbar
