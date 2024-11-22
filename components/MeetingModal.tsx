import React, { ReactNode } from 'react'

// Pop up to start meeting

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

// Props for rendering

interface MeetingModalProps {
  isOpen: boolean,
  onClose: () => void,
  title: string,
  className?: string,
  buttonText?: string,
  handleClick?: () => void,
  children?: ReactNode,
  image?: string,
  checkedimage?: string,
  buttonIcon?: string

}

const MeetingModal = ({ isOpen, onClose, title, className, buttonText, handleClick, image, checkedimage,buttonIcon, children }: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      
      <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white'>
        <div className='flex flex-col gap-6'>
          {image && (
            <div className='glassmorphism size-11 flex-center rounded-[10px]'>
              <Image src={image} className='' alt='image' width={60} height={60}/>
            </div>
          )}

          {checkedimage && (
            <div className="flex justify-center">
              <Image src={checkedimage} alt="checked" width={125} height={125} />
            </div>
          )}

          <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>{title}</h1>
          {children}
          <Button className='bg-green-500 hover:bg-green-600 gap-1 focus-visible:ring-0 focus-visible:ring-offset-0' onClick={handleClick}>
            {buttonIcon &&(<Image src={buttonIcon} alt={"buttonicon"} width={20} height={20}/>)}
            <b>{buttonText || 'Schedule Meeting'}</b>
          </Button>
        </div>
      </DialogContent>
    </Dialog>

  )
}

export default MeetingModal
