
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl font-black text-[#EE4D2D] mb-6">SHOPEEDEALS</div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Nền tảng chia sẻ mã giảm giá và deal hot từ các sàn TMĐT uy tín. 
              Chúng tôi giúp bạn mua sắm thông minh và tiết kiệm hơn.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#EE4D2D] hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#EE4D2D] hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Liên Kết Nhanh</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#EE4D2D]">Trang chủ</a></li>
              <li><a href="#catalog" className="hover:text-[#EE4D2D]">Danh mục sản phẩm</a></li>
              <li><a href="#" className="hover:text-[#EE4D2D]">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-[#EE4D2D]">Chính sách bảo mật</a></li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-4">Cam Kết & Miễn trừ</h4>
            <p className="text-xs text-gray-500 italic leading-relaxed">
              Disclaimer: Website chia sẻ các sản phẩm chất lượng, với giá ưu đãi. Chúng tôi không trực tiếp bán hàng. Khi bạn click vào link, bạn sẽ được chuyển đến website chính thức của Shopee để thực hiện giao dịch. 
            </p>
            <p className="text-xs text-gray-500 mt-4 font-medium">
              * Không cần đăng nhập, không thu thập dữ liệu người dùng.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
          <p>© 2024 Shopee Deals. Designed for Smart Shopping.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
