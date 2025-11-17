import { useState } from 'react'

function ResponsiveNavbar() {

    const [isMobileView, setIsMobileView] = useState(false);
  
    return (
        <nav className="bg-green-600 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="text-2xl font-bold text-white-800">MyStore</div>
          
        <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white-700 hover:text-gray-700 font-medium">Home</a>
            <a href="#" className="text-white-700 hover:text-gray-700 font-medium">Products</a>
            <a href="#" className="text-white-700 hover:text-gray-700 font-medium">About</a>
            <a href="#" className="text-white-700 hover:text-gray-700 font-medium">Contact</a>
        </div>
          
          {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
            <button className="relative text-2xl">
              🛒
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    10
                </span>
            </button>
            
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700">
                Login
            </button>
        </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileView(!isMobileView)}
            className="md:hidden text-gray-700 text-2xl font-bold"
          >
            {isMobileView ? '✕' : '☰'}
          </button>
        
        {/* Mobile Menu */}
        {isMobileView && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-white-700 hover:text-gray-600 font-medium">Home</a>
              <a href="#" className="text-white-700 hover:text-gray-600 font-medium">Products</a>
              <a href="#" className="text-white-700 hover:text-gray-600 font-medium">About</a>
              <a href="#" className="text-white-700 hover:text-gray-600 font-medium">Contact</a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 text-left">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default ResponsiveNavbar;