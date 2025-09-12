"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const linkDate=[
    {id:1,name:"Performance",path:"/performance"},
    {id:2,name:"Reliability",path:"/reliability"},
    {id:3,name:"Scale",path:"/scale"},
]

// const accessLink =['/','/performance','/reliability','/scale']

export default function Header() {
    const pathname =usePathname()
    // console.log(`当前地址: => ${pathname}`)
    // if(!accessLink.includes(pathname))return null;
  return (
    <div className="absolute w-full  z-10">
      <div className=" flex justify-between container mx-auto p-8 text-white items-center">
        <Link className="text-3xl font-bold " href="/">
          Home
        </Link>
        <div className="text-2xl space-x-4">
          {linkDate.map((link) => (
            <Link
              key={link.id}
              className={pathname === link.path ? "text-purple-500 " : ""}
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
