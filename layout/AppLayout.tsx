import { Button, Logo } from "@/components/ui"
import Link from "next/link"
import React, { FC, ReactNode, useEffect, useState } from "react"
import { Playfair_Display, Inter  } from "next/font/google"

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
      setIsScrolled(window.scrollY > 80); // 80px = h-20
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className={`h-[200vh] ${playfair_display.variable} ${inter.variable} font-playfair-display`}>
      <header className={`fixed z-[99999999] top-0  flex justify-between items-center px-28 h-20 w-full border-b-gray-200 ${isScrolled ? "bg-white border-b shadow-xs" : "bg-transparent"} transition-colors duration-500`}>
        <Logo className="size-14"/>
        <nav>
          <ul className="flex space-x-12 items-center font-inter">
            <LinkItem href="publications" text="Publications"/>
            <LinkItem href="affc_café" text="AFFC Café"/>
            <LinkItem 
              href="resources" 
              text="Resources"
              subLinks={[]}
            />
            <LinkItem href="female_founder_monitor" text="Female Founder Monitor"/>
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
      <Link href={href} className="font-medium">
        {text}
      </Link>
    </li>
  )
  return (
    <li className="absolute">
      <span className="font-medium">
        {text}
      </span>
      <div>

      </div>
    </li>
  )
    
}

export default AppLayout