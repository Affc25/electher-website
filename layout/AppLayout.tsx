import { Button, Logo } from "@/components/ui"
import Link from "next/link"
import React, { FC, ReactNode, useEffect, useState } from "react"
import { Playfair_Display, Inter  } from "next/font/google"
import Image from "next/image"

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["500", "400", "600", "700", "800", "900"]
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

type PropsType = {
  children: ReactNode
}

const AppLayout:FC<PropsType>  = ({
  children
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50); // 80px = h-20
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className={`h-[200vh] ${playfair_display.variable} ${inter.variable} font-playfair-display`}>
      <header className={`fixed z-[99999999] top-0  flex justify-between items-center px-28 h-20 w-full border-b-gray-200 ${isScrolled ? "bg-white border-b shadow-xs" : "bg-transparent"} transition-colors duration-500`}>
        <Logo className="size-14"/>
        <nav>
          <ul className="flex space-x-4 items-center font-inter">
            <LinkItem href="publications" text="Publications"/>
            <LinkItem href="affc_café" text="AFFC Café"/>
            <LinkItem 
              href="resources" 
              text="Resources"
              subLinks={[
                {
                  href: "resource_library",
                  title: "Resource Library",
                  icon: "/svg/resource_library_icon.svg",
                  description: "Templates, guides and business tools"
                },{
                  href: "data_center",
                  title: "Data Center",
                  icon: "/svg/data_center_icon.svg",
                  description: "Market research and analysis"
                }
              ]}
            />
            <LinkItem 
              href="female_founder_monitor" 
              text={
                <div>
                  
                  Female Founder Monitor
                </div>
              }
            />
            <LinkItem href="about" text="About"/>
            <Button href="newsletter" className="font-semibold">Newsletter</Button>
          </ul>
        </nav>
      </header> 
      <div>
        {children}
      </div>
    </main>
  )
}

interface LinkItemPropsType {
  href: string,
  text: ReactNode
  subLinks?: SubLinkItem[]
}

type SubLinkItem = {
  icon: string,
  href: string,
  title: string,
  description: string
}

const LinkItem:FC<LinkItemPropsType> = ({
  href,
  text,
  subLinks
}) => {
  if (!subLinks) return(
    <li>
      <Link href={href} className="font-medium cursor-pointer py-2 px-4 text-sm">
        {text}
      </Link>
    </li>
  )
  return (
    <li className="relative group">
      <span className="font-medium flex cursor-pointer space-x-1 text-sm items-center rounded-sm hover:text-brand hover:bg-green-200 py-2 px-4">
        <span>{text}</span>
        <div className="relative size-3 group-hover:rotate-180 transition-all delay-200">
          <Image
            fill
            alt="dropdown icon"
            src="/svg/dropdown_icon.svg"
          />
        </div>
      </span>
      <div 
        className="absolute flex overflow-hidden max-h-0 opacity-0 scale-95 group-hover:opacity-100 group-hover:max-h-[500px] group-hover:scale-100 transition-[scale_height] duration-300 ease-in-out space-x-2 p-0 group-hover:p-4 rounded-md bg-white top-9 shadow-lg">
        {
          subLinks.map(item=>{
            return(
              <Link href={item.href} className="flex p-2 items-start w-64 space-x-2 rounded-md hover:bg-gray-100">
                <div className="relative size-5">
                  <Image
                    fill
                    src={item.icon}
                    alt={`${item.icon} icon`}
                  />
                </div>
                <div className="space-y-[2px]">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm">{item.description}</p>
                </div>

              </Link>
            )
          })
        }
        
      </div>
    </li>
  )
    
}

export default AppLayout