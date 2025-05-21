import React from 'react'

export const MainSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full"
      >
        <source src="https://zubayrlatief.github.io/webwiser-hosted-images/desktop_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20 flex justify-start pl-[57%]">
        <div className="w-[56%] text-black mt-16">

             <h1 className="font-neueplak font-bold text-[72px] mb-6">CHECK OUT OUR LASTEST GEAR</h1>
            <p className="font-neueplak font-normal text-[14px] mb-6 leading-[1.5]">Advanced tech, superior comfort and all performance is what our<br></br>latest UA gear is all about. Built to go further, push hard <br></br>and break your boundries</p>
               <button className="font-neueplak font-normal text-white px-6 py-3 bg-black rounded-lg hover:scale-95 transition-transform duration-300">Shop UA New Arrivals</button>
     
         </div>
      </div>
    </div>
  )
}