import Link from "next/link";
import { twMerge } from "tailwind-merge";
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react"

interface PropsType extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, 
HTMLButtonElement> {
  href?: string
  variant?: "solid" | "outline"
}

const Button:FC<PropsType> = ({
  href,
  disabled,
  children,
  variant = "solid",
  className: addClasses,
  ...props
}) => {

  const bg = {
    "solid": "bg-[#9BBFE0]",
    "outline": "bg-transparent"
  }[variant]

  const textColor = {
    "solid": "text-white",
    "outline": "text-[#9BBFE0]"
  }[variant]

const className = twMerge(`${disabled ? "cursor-not-allowed opacity-40" :""} font-inter border border-[#9BBFE0] ${bg} ${textColor} font-semi-bold text-sm items-center flex justify-center disabled:hover:scale-100 disabled:active:scale-100  hover:scale-105 active:scale-90 cursor-pointer h-[2.4rem] rounded-md min-w-[100px] flex items-center space-x-3  transition-all duration-150`, addClasses)

  return href ?  (
  
      <Link href={href} className={className}>
      {children}
      </Link>
   
  ) : (
    <button 
    disabled={disabled}
    className={className}
    {...props}
    >
      {children}
      </button>
  )
}

export default Button