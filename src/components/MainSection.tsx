import React from 'react'

export const MainSection: React.FC = () => {
  return (
    <div className="relative w-full ">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full"
        >
          <source src="https://zubayrlatief.github.io/webwiser-hosted-images/mobile_video.mp4" type="video/mp4" />
        </video>
        <div className="px-4 py-8 bg-white">
          <h1 className="font-neueplak font-bold text-[36px] mb-4">CHECK OUT OUR LATEST GEAR</h1>
          <p className="font-neueplak font-normal text-[14px] mb-6 leading-[1.5]">
            Advanced tech, superior comfort and all performance is what our
            latest UA gear is all about. Built to go further, push hard
            and break your boundaries
          </p>
          <button className="font-neueplak font-normal text-white px-6 py-3 bg-black rounded-lg hover:scale-95 transition-transform duration-300">
            Shop UA New Arrivals
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden lg:block w-full"
      >
        <source src="https://zubayrlatief.github.io/webwiser-hosted-images/desktop_video.mp4" type="video/mp4" />
      </video>
      <div className="hidden lg:flex absolute inset-0 bg-black/20 justify-start pl-[57%]">
        <div className="w-[56%] text-black mt-16">
          <h1 className="font-neueplak font-bold text-[64px] mb-6">CHECK OUT OUR LATEST GEAR</h1>
          <p className="font-neueplak font-normal text-[12px] mb-6 leading-[1.5]">
            Advanced tech, superior comfort and all performance is what our<br />
            latest UA gear is all about. Built to go further, push hard<br />
            and break your boundaries
          </p>
          <button className="font-neueplak font-normal text-white px-6 py-3 bg-black rounded-lg hover:scale-95 transition-transform duration-300">
            Shop UA New Arrivals
          </button>
        </div>
      </div>
    </div>
  )
}