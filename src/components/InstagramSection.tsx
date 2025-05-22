import React from 'react'

export const InstagramSection: React.FC = () => {
  return (
    <div className="instagram-section py-16 px-4 w-full overflow-hidden">
      <div className="container mx-auto">
        <div className="text-left mb-8">
          <h2 className="font-neueplak font-bold text-[24px] mb-2">What's happening on Instagram</h2>
          <p className="font-neueplak font-normal text-[14px]">Don't miss out on the latest news and updates from Under Armour</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-[40%]">
            <video
              className="w-full h-full rounded-lg object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://zubayrlatief.github.io/webwiser-hosted-images/ig_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="lg:w-[60%]">
            <div className="grid grid-cols-2 gap-6 h-full">
              <div className="aspect-square">
                <img 
                  src="https://zubayrlatief.github.io/webwiser-hosted-images/mobile_1.jpg" 
                  alt="Instagram post 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src="https://zubayrlatief.github.io/webwiser-hosted-images/mobile_2.jpg" 
                  alt="Instagram post 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src="https://zubayrlatief.github.io/webwiser-hosted-images/mobile_3.jpg" 
                  alt="Instagram post 3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src="https://zubayrlatief.github.io/webwiser-hosted-images/mobile_4.jpg" 
                  alt="Instagram post 4"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}