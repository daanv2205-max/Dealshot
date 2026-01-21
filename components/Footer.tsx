
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl font-black text-[#EE4D2D] mb-6 tracking-tighter">T-INFINITY SHOP</div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Được vận hành bởi đội ngũ đam mê săn deal, T-infinity Shop cam kết mang đến những sản phẩm tốt nhất với giá hời nhất từ Shopee Mall. 
              Mua sắm thông minh hơn cùng chúng tôi.
            </p>
            <div className="flex flex-col gap-3">
              <a href="https://web.facebook.com/Tinhr92" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#EE4D2D] transition-all">
                <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <span>Tinhr92</span>
              </a>
              <a href="mailto:daanv2205@gmail.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#EE4D2D] transition-all">
                <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span>daanv2205@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-wider">Hỗ trợ khách hàng</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#EE4D2D]">Trang chủ</a></li>
              <li><a href="#catalog" className="hover:text-[#EE4D2D]">Danh mục săn deal</a></li>
              <li><a href="https://web.facebook.com/Tinhr92" className="hover:text-[#EE4D2D]">Góp ý sản phẩm</a></li>
              <li><a href="#" className="hover:text-[#EE4D2D]">Chính sách bảo mật</a></li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-4 text-sm">CAM KẾT T-INFINITY</h4>
            <p className="text-xs text-gray-500 italic leading-relaxed">
              Disclaimer: Website chia sẻ các link tiếp thị liên kết từ Shopee. Chúng tôi không trực tiếp xử lý đơn hàng hay thanh toán. Mọi giao dịch của bạn sẽ được thực hiện trực tiếp trên nền tảng Shopee để đảm bảo quyền lợi cao nhất.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">An toàn & Bảo mật</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
          <p>© 2024 T-INFINITY SHOP. Built for Smart Shoppers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
