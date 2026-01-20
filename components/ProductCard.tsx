
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  const discountPercentage = Math.round(
    ((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100
  );

  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {product.badge && (
          <div className="absolute top-2 left-2 z-10">
            <span className={`px-2 py-1 text-xs font-bold rounded shadow-sm text-white ${
              product.badge === 'Deal hot' ? 'bg-[#EE4D2D]' : 
              product.badge === 'Bán chạy' ? 'bg-orange-500' : 'bg-red-600'
            }`}>
              {product.badge}
            </span>
          </div>
        )}
        <div className="absolute top-2 right-2 z-10">
          <span className="bg-yellow-400 text-xs font-black px-2 py-1 rounded shadow-sm">
            -{discountPercentage}%
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col h-[180px]">
        <h3 className="text-gray-800 font-medium text-sm line-clamp-2 mb-2 group-hover:text-[#EE4D2D] transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-auto">
          <div className="flex flex-col gap-0.5 mb-4">
            <span className="text-gray-400 text-xs line-through">
              {formatPrice(product.originalPrice)}
            </span>
            <span className="text-[#EE4D2D] text-lg font-bold">
              {formatPrice(product.discountedPrice)}
            </span>
          </div>

          <a 
            href={product.affiliateUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center py-2.5 bg-[#EE4D2D] text-white rounded-lg font-semibold text-sm hover:bg-[#d43d1d] transition-colors shadow-sm"
          >
            Mua Ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
