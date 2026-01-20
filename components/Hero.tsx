
import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full text-[#EE4D2D] text-sm font-semibold mb-6 animate-fade-in">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Badge: Link Sản Phẩm Chính Hãng
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
          Deal Hot Mỗi Ngày <br/>
          <span className="text-[#EE4D2D]">Mua Đúng Giá, Đúng Chỗ</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Tổng hợp những sản phẩm chất lượng nhất từ Shopee với mức giá ưu đãi cực sốc. 
          Tiết kiệm thời gian, tối ưu ngân sách cho gia đình bạn.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={() => {
              const el = document.getElementById('catalog');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-lg px-10"
          >
            Xem deal hot hôm nay
          </Button>
          <p className="text-sm text-gray-400 italic">Cập nhật 5 phút trước</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
