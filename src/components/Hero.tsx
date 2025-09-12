import React from 'react'
import Image,{StaticImageData} from 'next/image'


interface IProps {
    imgurl:StaticImageData,
    alt:string,
    content:string
}
export default function Hero(props:IProps) {
  return (
    <div className=" h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image src={props.imgurl} fill className="object-cover" alt={props.alt} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-5xl text-white">{props.content}</h1>
      </div>
    </div>
  );
}


