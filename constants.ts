
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'Tất cả', icon: '🔥' },
  { id: 'electronic', name: 'Điện tử', icon: '📱' },
  { id: 'home', name: 'Nhà cửa', icon: '🏠' },
  { id: 'beauty', name: 'Làm đẹp', icon: '💄' },
  { id: 'fashion', name: 'Thời trang', icon: '👗' },
];

// CHỈNH SỬA SẢN PHẨM VÀ LINK AFFILIATE TẠI ĐÂY
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Tai nghe Bluetooth Không Dây S50 Pro',
    originalPrice: 599000,
    discountedPrice: 249000,
    imageUrl: 'https://picsum.photos/seed/tech1/500/500',
    affiliateUrl: 'https://shopee.vn',
    category: 'electronic',
    badge: 'Deal hot'
  },
  {
    id: '2',
    name: 'Máy Hút Bụi Mini Cầm Tay Đa Năng',
    originalPrice: 450000,
    discountedPrice: 199000,
    imageUrl: 'https://picsum.photos/seed/home1/500/500',
    affiliateUrl: 'https://shopee.vn',
    category: 'home',
    badge: 'Giảm sâu'
  },
  {
    id: '3',
    name: 'Serum Dưỡng Da Phục Hồi Chuyên Sâu',
    originalPrice: 350000,
    discountedPrice: 280000,
    imageUrl: 'https://picsum.photos/seed/beauty1/500/500',
    affiliateUrl: 'https://shopee.vn',
    category: 'beauty',
    badge: 'Bán chạy'
  },
  {
    id: '4',
    name: 'Áo Khoác Bomber Unisex Vải Dày Dặn',
    originalPrice: 420000,
    discountedPrice: 185000,
    imageUrl: 'https://picsum.photos/seed/fashion1/500/500',
    affiliateUrl: 'https://shopee.vn',
    category: 'fashion',
    badge: 'Deal hot'
  },
  {
    id: '5',
    name: 'Loa Bluetooth Bass Siêu Trầm - Waterproof',
    originalPrice: 890000,
    discountedPrice: 450000,
    imageUrl: 'https://picsum.photos/seed/tech2/500/500',
    affiliateUrl: 'https://shopee.vn',
    category: 'electronic',
    badge: 'Bán chạy'
  },
  {
    id: '6',
    name: 'Bộ 4 Nồi Inox Cao Cấp Chống Dính',
    originalPrice: 1200000,
    discountedPrice: 790000,
    imageUrl: 'https://picsum.photos/seed/home2/500/500',
    affiliateUrl: 'https://shopee.vn',
    category: 'home',
    badge: 'Giảm sâu'
  },
  {
    id: '7',
    name: 'Son Kem Lì Mịn Môi Cao Cấp',
    originalPrice: 150000,
    discountedPrice: 99000,
    imageUrl: 'https://picsum.photos/seed/beauty2/500/500',
    affiliateUrl: 'https://shopee.vn',
    category: 'beauty',
    badge: 'Deal hot'
  },
  {
    id: '8',
    name: 'Giày Sneaker Thể Thao Nam Nữ Trendy',
    originalPrice: 650000,
    discountedPrice: 320000,
    imageUrl: 'https://picsum.photos/seed/fashion2/500/500',
    affiliateUrl: 'https://shopee.vn',
    category: 'fashion',
    badge: 'Bán chạy'
  },
  {
    id: '9',
    name: 'Bàn Phím Cơ Gaming RGB 87 Phím',
    originalPrice: 1100000,
    discountedPrice: 590000,
    imageUrl: 'https://picsum.photos/seed/tech3/500/500',
    affiliateUrl: 'https://shopee.vn',
    category: 'electronic',
    badge: 'Giảm sâu'
  }
];
