import { Button } from "@/components/ui/button"
import Hero from "@/sections/Hero"
import Navbar from "@/sections/Navbar"
import ExploreModels from '@/sections/ExploreModels'
import Footer from "@/sections/Footer"

export default function Home() {
  return (
    <div className="bg-neutral-950 text-neutral-50 min-h-screen w-full ">
      
      <Navbar/>
      <Hero/>
      <ExploreModels />
      <Footer/>
    
    </div>
  )
}

