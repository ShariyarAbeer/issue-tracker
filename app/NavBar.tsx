"use client"
import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import  classnames  from "classnames";
import classNames from 'classnames';

const NavBar = () => {
  const pathName = usePathname();
  const links = [
    {label: "Dashboard", href:"/"},
    {label: "Issues", href:"/issues"},
  ]
  return (
<nav className="flex space-x-6 border-b mx-5d px-5 h-14 items-center">
    <Link href={"/"}><FaBug /></Link>
    <ul className='flex space-x-6 '>
    
        {/* {links.map(link => <Link key={link.href} className={`${link.href === pathName ? 'text-zinc-900' : 'text-zinc-500'} hover:text-zinc-800 transition-colors`}  */}
        {links.map(link => <Link key={link.href} 
        className={classnames({
          "text-zinc-900" : link.href === pathName,
          "text-zinc-500" : link.href !== pathName,
          "hover:text-zinc-800 transition-colors" : true,
        })}
        
        href={link.href}>{link.label}</Link>)}
    </ul>
    <h1>{pathName}</h1>
</nav>
  )
}

export default NavBar
