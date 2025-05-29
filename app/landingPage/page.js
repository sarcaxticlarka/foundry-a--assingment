// import React from 'react'
// import Hero from './sections/hero'
// import PizzaMenu from './sections/pizzaMenu'
// import PizzaDeals from './sections/pizzaDeals'
// import DesertMenu from './sections/desertMenu'
// import PizzaLocator from './sections/PizzaLocator'
// import Footer from '@/components/footer'
// const page = () => {
//   return (
//     <div>
//         <Hero/>
//         <PizzaMenu/>
//         <PizzaDeals/>
//         <DesertMenu/>
//         <PizzaLocator/>
//         <Footer/>
//     </div>
//   )
// }

// export default page



'use client'
import React from 'react'
import Hero from './sections/hero'
import PizzaMenu from './sections/pizzaMenu'
import PizzaDeals from './sections/pizzaDeals'
import DesertMenu from './sections/desertMenu'
import PizzaLocator from './sections/pizzaLocator'
import Footer from '@/components/footer'
import { useRouter } from 'next/navigation'

const LandingPage = () => {
  const router = useRouter()

  const handleLoginClick = () => {
    router.push('/auth-check') // redirect to auth-check page
  }

  return (
    <div>
      <header className="flex fixed bg-gradient-to-br from-orange-50 to-red-50  justify-between items-center p-6  w-full z-99 ">
        <div className="text-3xl font-bold text-red-500">PizzaMenia</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#hero" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Home</a>
          <a href="#menu" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Menu</a>
          <a href="#offer" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Deal</a>

          <a href="#contact" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Contact</a>
        </nav>
        <button
          onClick={handleLoginClick}
          className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors font-medium"
        >
          Login Now
        </button>
      </header>

      <Hero />
      <PizzaMenu />
      <PizzaDeals />
      <DesertMenu />
      <PizzaLocator />
      <Footer />
    </div>
  )
}

export default LandingPage
