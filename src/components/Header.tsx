'use client'
import Link from 'next/link'
import { Button } from './ui/button'
import { User } from 'lucide-react'
import { useUser } from '@clerk/nextjs'

const Header = () => {
  const {user,isSignedIn} = useUser()
  return (
    <header className="bg-transparent shadow-md">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary font-rowdies text-white">
          quick.
        </Link>
        <nav>
          <ul className="flex space-x-4 text-white justify-center items-center font-sans font-bold">
            <li><Link href="/" className=" hover:text-primary border-r-2 border-white px-2 border-l-2 ">Home</Link></li>
            <li><Link href="/about" className=" hover:text-primary border-r-2 border-white px-2 ">Services</Link></li>
            <li><Link href="/contact" className=" hover:text-primary border-r-2 border-white px-2 ">Contact</Link></li>
            <li><Link href="/contact" className=" hover:text-primary border-r-2 border-white px-2 ">Products</Link></li>
            <li><Link href="/contact" className=" hover:text-primary border-r-2 border-white px-2 ">About us</Link></li>
            {
  isSignedIn ? (
    <Link href="/profile">
      <Button className="bg-secondary text-black hover:text-white px-8">
        Profile 
      </Button>
    </Link>
  ) : (
    <Link href="/sign-in">
      <Button className="bg-secondary text-black hover:text-white px-8">
        Login <User />
      </Button>
    </Link>
  )
}


          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

