import React from 'react'
import './App.css'
import { MainSection } from './components/MainSection'
import { GearSection } from './components/GearSection'
import { PromotionsSection } from './components/PromotionsSection'
import { InstagramSection } from './components/InstagramSection'

function App() {
  return (
    <>
      <MainSection />
      <PromotionsSection />
      <GearSection />
      <InstagramSection />
    </>
  )
}

export default App
