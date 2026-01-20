
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#EE4D2D] rounded-xl flex items-center justify-center text-white font-black text-xl">S</div>
          <span className="font-black text-xl tracking-tight text-gray-900 hidden sm:block">SHOPEEDEALS</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <a href="#" className="hover:text-[#EE4D2D] transition-colors">Trang chủ</a>
          <a href="#catalog" className="hover:text-[#EE4D2D] transition-colors">Sản phẩm</a>
          <a href="#" className="hover:text-[#EE4D2D] transition-colors">Đánh giá</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group cursor-pointer hidden sm:block">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
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
  );
};

export default Navbar;
