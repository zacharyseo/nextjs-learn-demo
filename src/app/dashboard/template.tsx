"use client"
import Link from "next/link";
import { useState } from "react";



export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [count, setCount]= useState(0)
  return (
    <div className="border-2 border-black  mx-auto mt-10 p-4 border-dashed ">
      
      <h2>Dashboard Template {count}</h2>
      <button type="button" className="bg-black text-white p-2 my-4 rounded-md hover:bg-purple-600" onClick={()=>setCount(count+1)}> increnment</button>
      {children} {/* 页面内容插入点 */}
    </div>
  );
}
