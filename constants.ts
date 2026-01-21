
import { Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'Tất cả', icon: '🔥' },
  { id: 'điện tử', name: 'Điện tử', icon: '📱' },
  { id: 'gia dụng', name: 'Gia dụng', icon: '🏠' },
  { id: 'làm đẹp', name: 'Làm đẹp', icon: '💄' },
  { id: 'thời trang', name: 'Thời trang', icon: '👗' },
  { id: 'mẹ & bé', name: 'Mẹ & Bé', icon: '🍼' },
  { id: 'phụ kiện', name: 'Phụ kiện', icon: '🎧' },
  { id: 'đời sống', name: 'Đời sống', icon: '🍃' },
];

/**
 * URL xuất bản dưới dạng CSV từ Google Sheets của bạn.
 * ID: 2PACX-1vQUQWURmI-zuBVYlot-jdGMlTFpIkCy3GcUKbJW6K8aejqVd-ZRoHeyWgqb-FGLuvoReU78-S4VoK-Z
 */
export const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQUQWURmI-zuBVYlot-jdGMlTFpIkCy3GcUKbJW6K8aejqVd-ZRoHeyWgqb-FGLuvoReU78-S4VoK-Z/pub?gid=0&single=true&output=csv';
