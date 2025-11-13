import { useState } from 'react'
//           <div className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer group">
//             <span className="block w-full h-0.5 bg-white group-hover:bg-yellow-300"></span>
//             <span className="block w-full h-0.5 bg-white group-hover:bg-yellow-300"></span>
//             <span className="block w-full h-0.5 bg-white group-hover:bg-yellow-300"></span>
//           </div>
//         </div>
//       </div>

//       <div className="md:hidden mt-4 space-y-3 bg-green-800 p-4 rounded-lg">
//         <a href="#" className="block text-white hover:text-yellow-300">Home</a>
//         <a href="#" className="block text-white hover:text-yellow-300">Shop</a>
//         <a href="#" className="block text-white hover:text-yellow-300">Deals</a>
//         <a href="#" className="block text-white hover:text-yellow-300">Contact</a>
//       </div>
//     </nav>
//   );
// }

// export default ResponsiveNavbar

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