
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Contact Top Bar */}
      <div className="bg-[#EE4D2D] text-white py-1.5 px-4 text-[10px] md:text-xs">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="mailto:daanv2205@gmail.com" className="flex items-center gap-1 hover:underline">
              <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>daanv2205@gmail.com</span>
            </a>
            <a href="https://web.facebook.com/Tinhr92" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline hidden sm:flex">
              <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>fb.com/Tinhr92</span>
            </a>
          </div>
          <div className="font-medium hidden xs:block">T-INFINITY SHOP - KHO DEAL CHÍNH HÃNG</div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-[#EE4D2D] rounded-xl flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg shadow-orange-200">T</div>
            <span className="font-black text-lg md:text-xl tracking-tight text-gray-900">T-INFINITY <span className="text-[#EE4D2D]">SHOP</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#" className="hover:text-[#EE4D2D] transition-colors">Trang chủ</a>
            <a href="#catalog" className="hover:text-[#EE4D2D] transition-colors">Sản phẩm</a>
            <a href="https://web.facebook.com/Tinhr92" target="_blank" rel="noopener noreferrer" className="hover:text-[#EE4D2D] transition-colors">Liên hệ</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group cursor-pointer hidden sm:block">
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-[#EE4D2D] bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100 uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#EE4D2D] rounded-full animate-pulse"></span>
                Deal mới mỗi ngày
              </div>
            </div>
            <button className="p-2 text-gray-500 hover:text-[#EE4D2D] md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
