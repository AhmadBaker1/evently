'use client';
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
 //  figuring out which link is active based on the current path
 // we're going to use the usePath hook to determine which link is active
 const pathname = usePathname();
 
  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
        {headerLinks.map((link) => {
          const isActive = pathname === link.route;
         
          return (
            <li
              // since we're mapping over li's we're giving them a key
              key = {link.route}
              className = {`${
                isActive && 'text-primary-500'
              } flex-center p-medium-16 whitespace-nowrap`}
            >
              <Link href={link.route}>{link.label}</Link>
            </li>
          )
        })}
    </ul>
  )
}

export default NavItems