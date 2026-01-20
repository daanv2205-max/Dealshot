
export type BadgeType = 'Deal hot' | 'Bán chạy' | 'Giảm sâu';

export interface Product {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
  affiliateUrl: string;
  category: string;
  badge?: BadgeType;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
