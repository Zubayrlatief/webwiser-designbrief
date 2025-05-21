import React from 'react'
import './App.css'
import { MainSection } from './components/MainSection'
import { GearSection } from './components/GearSection'
import { PromotionsSection } from './components/PromotionsSection'
import { TheRockSection } from './components/TheRockSection'
import { InstagramSection } from './components/InstagramSection'

function App() {
  return (
    <>
      <MainSection />
      <PromotionsSection />
      <TheRockSection />
      <GearSection />
      <InstagramSection />
    </>
  )
}

export default App

