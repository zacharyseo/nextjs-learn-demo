"use client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'

const linkDate: {name:string,path:string}[] = [
  {name : 'Dashboard', path:'/dashboard'},
  {name:'Settings',path:'/dashboard/settings'},
  {name:'About',path:'/dashboard/about'}
  
]

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [selectedSize, setSelectedSize] = useState('xs');
    const [count, setCount]= useState(0)
    const pathname= usePathname()
    console.log(`当前地址: => ${pathname}`)
  return (
    <>
    <div className="border-2 border-black w-1/2 mx-auto mt-10 p-4 border-dashed ">
      <div className="flex gap-4 mb-4  text-lg font-bold">
        {
          linkDate.map((linkitem)=>(
          <Link key={linkitem.path} className={pathname === linkitem.path ? "text-purple-500":""} href={linkitem.path}>{linkitem.name}</Link>
        ))
        }
        
        {/* <Link className={pathname==='/dashboard'?'text-purple-500':''} href="/dashboard">Dashboard</Link>
        <Link className={pathname==='/dashboard/settings'?'text-purple-500':''} href="/dashboard/settings">Setting</Link>
        <Link className={pathname==='/dashboard/about'?'text-purple-500':''} href="/dashboard/about">About</Link> */}
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button type="button" className="bg-black text-white p-2 my-4 rounded-md hover:bg-purple-600" onClick={()=>setCount(count+1)}> increnment</button>
      {children} {/* 页面内容插入点 */}

    </div>

<div className="flex font-sans mx-auto w-3xl mt-10 border-black border-2">
  <div className="flex-none w-48 relative">
    <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
  </div>
  <form className="flex-auto p-6">
    <div className="flex flex-wrap">
      <h1 className="flex-auto text-lg font-semibold text-slate-900">
        Classic Utility Jacket
      </h1>
      <div className="text-lg font-semibold text-slate-500">
        $110.00
      </div>
      <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        In stock
      </div>
    </div>
    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div className="space-x-2 flex text-sm">
        <label>
          <input className="sr-only peer" name="size" type="radio" value="xs" checked={selectedSize === 'xs'}  onChange={() => setSelectedSize('xs')}  />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XS
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="s" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            S
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="m" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            M
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="l" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            L
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="xl" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XL
          </div>
        </label>
      </div>
    </div>
    <div className="flex space-x-4 mb-6 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p className="text-sm text-slate-700">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>
</>
  );
}
