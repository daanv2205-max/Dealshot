
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Định dạng giá tiền: 100.000 ₫
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' ₫';
  };

  // Tính toán phần trăm giảm giá an toàn
  const hasDiscount = product.originalPrice > product.discountedPrice && product.originalPrice > 0;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      {/* Hình ảnh sản phẩm */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.imageUrl || 'https://via.placeholder.com/400?text=No+Image'} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Nhãn (Badge) */}
        {product.badge && (
          <div className="absolute top-2 left-0 z-10">
            <span className={`px-2 py-0.5 text-[10px] md:text-xs font-bold rounded-r-full shadow-sm text-white ${
              product.badge === 'Deal hot' ? 'bg-[#EE4D2D]' : 
              product.badge === 'Bán chạy' ? 'bg-[#ff9100]' : 'bg-[#f53d2d]'
            }`}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Tag giảm giá góc phải */}
        {hasDiscount && (
          <div className="absolute top-0 right-0 z-10 bg-[#ffe97a] px-1.5 py-1 flex flex-col items-center">
            <span className="text-[#ee4d2d] text-[10px] font-bold leading-none">Giảm</span>
            <span className="text-[#ee4d2d] text-xs font-black leading-none">{discountPercentage}%</span>
          </div>
        )}
      </div>

      {/* Nội dung chi tiết */}
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="text-gray-800 text-xs md:text-sm leading-tight h-8 md:h-10 line-clamp-2 mb-2 group-hover:text-[#EE4D2D] transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-auto">
          {/* Khu vực hiển thị giá */}
          <div className="flex flex-col mb-3">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-[#EE4D2D] text-sm md:text-lg font-bold">
                {formatPrice(product.discountedPrice)}
              </span>
            </div>
            {hasDiscount && (
              <span className="text-gray-400 text-[10px] md:text-xs line-through italic">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <a 
            href={product.affiliateUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center py-2 bg-[#EE4D2D] text-white rounded-lg font-bold text-xs md:text-sm hover:bg-[#d43d1d] transition-colors shadow-sm active:scale-95"
          >
            MUA NGAY
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
