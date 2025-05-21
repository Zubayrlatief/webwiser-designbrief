import React from 'react';

export const TheRockSection: React.FC = () => {
  return (
    <section className="the-rock-section relative">
      <img 
        src="https://zubayrlatief.github.io/webwiser-hosted-images/desktop_6.jpg"
        alt="The Rock training with Under Armour"
        className="w-full object-cover"
      />
      <div className="absolute top-0 left-[62%] w-[35%] h-full flex flex-col justify-center items-start px-32">
        <h2 className="font-neueplak font-bold text-white text-[16px] mb-8">PROJECT ROCK</h2>
        <h1 className="font-neueplak-condensed font-black text-white text-[64px] mb-14">EVERY SIDE OF STRONG</h1>
        <p className="font-neueplak font-normal text-white text-[14px] mb-12">The Underground collection is inspired by the idea of a<br></br> 
        Project Rock fight club. A place where we push each<br></br>
        other harder to make each other stronger. A drop<br></br>
         dedicated to you and your crew. The neon colorways<br></br>
         are a reflection of the energy we bring to every rep,<br></br>
         every set and every challange. 
        </p>
        <button className="font-neueplak font-normal text-white border-2 border-white px-8 py-3 rounded-lg bg-transparent hover:bg-white hover:text-black transition-colors duration-300">
          SHOP PROJECT ROCK
        </button>
      </div>
    </section>
  );
};;
