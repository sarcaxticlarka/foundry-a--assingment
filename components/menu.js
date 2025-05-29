import React from 'react'
import { useRouter } from 'next/navigation'


const Menu = () => {
    const router = useRouter()

    const handleLoginClick = () => {
        router.push('/auth-check') // redirect to auth-check page
    }

    return (
        <div>
            <header className="flex fixed bg-gradient-to-br from-orange-50 to-red-50  justify-between items-center p-6  w-full z-99 ">
                <div className="text-3xl font-bold text-red-500">          <a href="/" className="text-gray-700 hover:text-red-500 transition-colors font-medium">PizzaMenia</a>        </div>
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
        </div>
    )
}

export default Menu