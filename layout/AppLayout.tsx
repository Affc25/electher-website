import Link from "next/link";
import Image from "next/image";
import { Button, Logo } from "@/components/ui";
import MenuIcon from "@/public/svg/menu_icon.svg";
import MailIcon from "@/public/svg/mail_icon.svg"
import WorldIcon from "@/public/svg/world_icon.svg"
import CancelIcon from "@/public/svg/cancel_icon.svg";
import TwitterIcon from "@/public/svg/twitter_icon.svg"
import LinkedInIcon from "@/public/svg/linkedin_icon.svg"
import { Playfair_Display, Inter  } from "next/font/google"
import InstagramIcon from "@/public/svg/instagram_icon.svg"

import React, { FC, ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/router";

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
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuChange = () => {
    setIsMobileMenuOpen(prev => !prev);
  }

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50); // 80px = h-20
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className={`${playfair_display.variable} ${inter.variable} font-playfair-display`}>
      <header className={`fixed z-[99999999] top-0 flex flex-col lg:flex-row justify-between lg:items-center px-6 py-2 lg:py-0 lg:px-28 lg:h-20 w-full border-b-gray-200 ${isScrolled ? "bg-white border-b shadow-xs" : "bg-white lg:bg-transparent"} transition-colors duration-500`}>
        <div className="flex items-center justify-between lg:justify-start w-full lg:w-auto">
          <Logo className="size-14"/>
          <button
            className="size-6 lg:hidden cursor-pointer" 
            onClick={handleMobileMenuChange} 
          >
          {
            isMobileMenuOpen ? (<CancelIcon className="size-6" /> ) : (<MenuIcon className="size-6"/>)
          }
          </button>
          
        </div>

        <nav>
          <ul className={`flex flex-col lg:flex-row mt-4 lg:mt-0 lg:space-x-4 space-y-6 lg:space-y-0 lg:items-center font-inter  ${isMobileMenuOpen ? "block" : "hidden lg:flex"}`}>
            <LinkItem href="publications" text="Publications"/>
            <LinkItem href="#affc_café" text="AFFC Café"/>
            <LinkItem 
              href="#resources" 
              text="Resources"
              subLinks={[
                {
                  href: "#resource_library",
                  title: "Resource Library",
                  icon: "/svg/resource_library_icon.svg",
                  description: "Templates, guides and business tools"
                },{
                  href: "#data_center",
                  title: "Data Center",
                  icon: "/svg/data_center_icon.svg",
                  description: "Market research and analysis"
                }
              ]}
            />
            <LinkItem 
              href="#female_founder_monitor" 
              text={
                <span>
                  Female Founder Monitor
                </span>
              }
            />
            <LinkItem href="#about" text="About"/>
            <Button href="#newsletter" className="font-semibold mb-8 lg:mb-0">Newsletter</Button>
          </ul>
        </nav>
      </header> 
      <div>
        {children}
      </div>
      <Footer/>
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
      <Link href={href} className="font-medium cursor-pointer lg:py-2 lg:px-4 lg:text-sm">
        {text}
      </Link>
    </li>
  )
  return (
    <li className="relative group">
      <span className="font-medium flex cursor-pointer space-x-1 lg:text-sm items-center rounded-sm hover:text-brand hover:bg-green-200 lg:py-2 lg:px-4">
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
        className="lg:absolute flex flex-col lg:flex-row overflow-hidden max-h-0 opacity-0 scale-95 group-hover:opacity-100 group-hover:max-h-[500px] group-hover:scale-100 transition-[scale_height] duration-300 ease-in-out space-x-2 p-0 group-hover:p-4 rounded-md lg:bg-white top-9 lg:shadow-lg w-full lg:w-fit">
        {
          subLinks.map(item=>{
            return(
              <Link href={item.href} className="flex p-2 items-start w-full lg:w-64 space-x-2 rounded-md lg:hover:bg-gray-100">
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

const Footer = () => {
  return (
    <footer className="bg-affc-cream py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo className="size-16"/>
            </div>
            <p className="text-foreground/80 mb-6 max-w-md">
              Africa Female Founders Collective is dedicated to supporting and scaling
              female-owned and led ventures across African markets.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { href: '#', label: 'Email', icon: MailIcon },
                { href: '#', label: 'Instagram', icon: InstagramIcon },
                { href: '#', label: 'Twitter', icon: TwitterIcon },
                { href: '#', label: 'LinkedIn', icon: LinkedInIcon },
              ].map(({ href, label, icon: Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  aria-label={label}
                  className="size-10 rounded-full bg-affc-blue/10 flex items-center justify-center text-affc-blue hover:bg-affc-blue hover:text-white transition-colors"
                >
                  <Icon className="size-5"/>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 font-inter">
              <li>
                <a href="#about" className="text-foreground/80 hover:text-affc-blue transition-colors link-underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="text-foreground/80 hover:text-affc-blue transition-colors link-underline">
                  Our Network
                </a>
              </li>
              <li>
                <a href="#community" className="text-foreground/80 hover:text-affc-blue transition-colors link-underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/80 hover:text-affc-blue transition-colors link-underline">
                  Resources
                </a>
              </li>
            
            </ul>
          </div>

          {/* Another Column if needed (optional) */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 font-inter">
              <li>
                <a href="mailto:affc@elect-her.org" className="text-foreground/80 hover:text-affc-blue flex space-x-2 transition-colors link-underline">
                  <MailIcon className="text-affc-blue size-6"/>
                  <span>affc@elect-her.org</span>
                </a>
              </li>
              <li>
              <a href="#blog" className="text-foreground/80 hover:text-affc-blue flex space-x-2 transition-colors link-underline">
                  <WorldIcon className="text-affc-blue size-4 mt-1"/>
                  <span>Pan-African with hubs in Nairobi, Lagos, and Cape Town</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="h-[1px] bg-affc-blue/20 mt-16 container mx-auto  "/>
      <div className="flex justify-between w-full container mx-auto mt-8 font-inter text-sm text-[#1b1d2399]">
        <p>&copy; 2025 Africa Female Founders Collective. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="#privacy_policy" className="text-foreground/80 hover:text-affc-blue transition-colors link-underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#tos" className="text-foreground/80 hover:text-affc-blue transition-colors link-underline">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default AppLayout