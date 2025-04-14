import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'

type PropsType = {
  className?: string,
}

const Logo:FC<PropsType> = ({
  className
}) => {
  return (
    <Link href="/">
      <div className={twMerge("size-16 relative", className)}>
        <Image 
          fill
          alt="logo"
          src="/images/logo.png"
          className="object-contain"
        />
      </div>
      
    </Link>
  )
}

export default Logo