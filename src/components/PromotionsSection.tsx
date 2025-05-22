import React from 'react'
import './PromotionsSection.css'

export const PromotionsSection: React.FC = () => {
  const promotions = [
    { image: 'https://zubayrlatief.github.io/webwiser-hosted-images/desktop_Train.jpg', text: 'TRAIN' },
    { image: 'https://zubayrlatief.github.io/webwiser-hosted-images/desktop_Run.jpg', text: 'RUN' },
    { image: 'https://zubayrlatief.github.io/webwiser-hosted-images/desktop_Golf.jpg', text: 'GOLF' },
    { image: 'https://zubayrlatief.github.io/webwiser-hosted-images/desktop_Accessories.jpg', text: 'ACCESSORIES' }
  ]

  return (
    <section className="promotions-section bg-white py-16">
      <div className="max-w-8xl mx-auto px-4 lg:px-20">
        <div className="mb-12">
          <h2 className="font-neueplak font-bold text-[24px] mb-2">OUR BEST GEAR</h2>
          <p className="font-neueplak font-normal text-[14px]">Unlock your potential with the best UA Gear</p>
        </div>

        {/* Mobile Carousel */}
        <div className="block lg:hidden -mx-4">
          <div className="promotions-carousel">
            {promotions.map((promo, index) => (
              <div key={index} className="promotion-item">
                <PromotionCard 
                  image={promo.image}
                  text={promo.text}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-12">
          {promotions.map((promo, index) => (
            <PromotionCard 
              key={index}
              image={promo.image}
              text={promo.text}
            />
          ))}
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
      </div>
    </div>
  )
}
