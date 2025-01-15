"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/products', label: 'Products' },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden  flex justify-between p-4">
      <div className='font-rowdies font-extrabold '>
        quickcart.
      </div>
      <Button variant="ghost" size="icon" className="relative z-20" onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <div 
        className={cn(
          "fixed inset-0 z-10 bg-background/80 backdrop-blur-sm transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className={cn(
          "fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-gray-800",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full p-6">
            <div className="space-y-4 mt-16 font-rowdies font-extralight">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-lg font-semibold text-gray-800 hover:text-primary dark:text-gray-200 dark:hover:text-primary"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

