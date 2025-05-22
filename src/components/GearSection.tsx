import React from 'react'
import './GearSection.css'

export const GearSection: React.FC = () => {
  const images = [
    'https://zubayrlatief.github.io/webwiser-hosted-images/mobile_Promo%201.jpg',
    'https://zubayrlatief.github.io/webwiser-hosted-images/mobile_Promo%204.jpg',
    'https://zubayrlatief.github.io/webwiser-hosted-images/mobile_Promo%202.jpg',
    'https://zubayrlatief.github.io/webwiser-hosted-images/mobile_Promo%203.jpg'
  ]

  return (
    <div className="gear-section py-16 px-4">
      <div className="container mx-auto">
        <div className="text-left mb-8">
          <h2 className="font-neueplak font-bold text-[24px] mb-2">Discover Our Latest Promotions</h2>
          
          <p className="font-neueplak font-normal text-[14px]">Get the best deals in the best gear</p>
        </div>
        
        <div className="block lg:hidden -mx-4">
          <div className="carousel-container">
            {images.map((image, index) => (
              <div key={index} className="carousel-item">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={image} 
                    alt={`Promotion ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-[60px]">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={image} 


                alt={`Promotion ${index + 1}`}

                className="w-full h-[400px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}