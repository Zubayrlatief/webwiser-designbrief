import React from 'react'

export const PromotionsSection: React.FC = () => {
  return (
    <section className="promotions-section bg-white py-16">
      <div className="max-w-8xl mx-auto px-20">
        <div className="mb-12">
          <h2 className="font-neueplak font-bold text-[24px] mb-2">OUR BEST GEAR</h2>
          <p className="font-neueplak font-normal text-[14px]">Unlock your potential with the best UA Gear</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <PromotionCard 
            image="https://zubayrlatief.github.io/webwiser-hosted-images/desktop_Train.jpg"
            text="TRAIN"
          />
          <PromotionCard 
            image="https://zubayrlatief.github.io/webwiser-hosted-images/desktop_Run.jpg"
            text="RUN"
          />
          <PromotionCard 
            image="https://zubayrlatief.github.io/webwiser-hosted-images/desktop_Golf.jpg"
            text="GOLF"
          />
          <PromotionCard 
            image="https://zubayrlatief.github.io/webwiser-hosted-images/desktop_Accessories.jpg"
            text="ACCESSORIES"
          />
        </div>
      </div>
    </section>
  )
}

const PromotionCard: React.FC<{ image: string; text: string }> = ({ image, text }) => {
  return (
    <div>
      <div className="aspect-square">
        <img 
          src={image}
          alt={`${text} gear`}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
          <h3 className="font-neueplak font-bold text-white text-2xl">{text}</h3>
        </div>
      </div>
      <div className="mt-4">
        <a href="#" className="font-neueplak font-normal text-gray-600 hover:text-gray-800">
          SHOP NOW
        </a>
      </div>
    </div>
  )
}
