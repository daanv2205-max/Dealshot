
import React from 'react';

const FEATURE_DATA = [
  {
    title: 'Chọn lọc deal thật',
    desc: 'Chỉ tổng hợp những sản phẩm có đánh giá cao và gian hàng uy tín.',
    icon: '✅'
  },
  {
    title: 'Không tăng giá',
    desc: 'Cam kết chia sẻ link giá gốc, không nâng giá để tạo khuyến mãi ảo.',
    icon: '💰'
  },
  {
    title: 'Link chính hãng',
    desc: 'Ưu tiên các sản phẩm thuộc Shopee Mall với đầy đủ giấy tờ.',
    icon: '🏢'
  },
  {
    title: 'Cập nhật hàng ngày',
    desc: 'Đội ngũ săn deal làm việc 24/7 để mang đến ưu đãi mới nhất.',
    icon: '⏰'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Lý do nên mua qua website này</h2>
          <div className="w-16 h-1 bg-[#EE4D2D] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURE_DATA.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
