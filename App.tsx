
import React, { useState, useMemo, useEffect } from 'react';
import { CATEGORIES, SHEET_CSV_URL } from './constants';
import { Product, BadgeType } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Trình phân tách CSV nâng cao (xử lý được dấu phẩy trong ngoặc kép)
  const parseCSV = (text: string) => {
    const lines = text.split(/\r?\n/);
    return lines.map(line => {
      const result = [];
      let cur = '';
      let inQuote = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          inQuote = !inQuote;
        } else if (char === ',' && !inQuote) {
          result.push(cur.trim());
          cur = '';
        } else {
          cur += char;
        }
      }
      result.push(cur.trim());
      return result;
    });
  };

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(SHEET_CSV_URL);
        if (!response.ok) throw new Error('Không thể tải dữ liệu từ Google Sheets. Hãy đảm bảo bạn đã "Xuất bản lên web".');
        
        const csvText = await response.text();
        const rows = parseCSV(csvText);

        // Bỏ qua dòng tiêu đề (index 0)
        const parsedProducts: Product[] = rows.slice(1)
          .filter(row => row.length >= 2 && row[1]) // Bắt buộc phải có tên sản phẩm
          .map((row, index) => {
            const cleanPrice = (val: string) => {
              if (!val) return 0;
              return parseInt(val.replace(/\D/g, '')) || 0;
            };
            
            // Lấy danh mục và chuẩn hóa (viết thường để so khớp)
            const rawCategory = row[6] || 'Khác';
            
            return {
              id: row[0] || `prod-${index}`,
              name: row[1] || '',
              originalPrice: cleanPrice(row[2]),
              discountedPrice: cleanPrice(row[3]),
              imageUrl: row[4] || '',
              affiliateUrl: row[5] || '',
              category: rawCategory.trim().toLowerCase(),
              badge: (row[7] as BadgeType) || undefined
            };
          });

        setProducts(parsedProducts);
        setError(null);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err instanceof Error ? err.message : 'Có lỗi xảy ra khi cập nhật dữ liệu.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSheetData();
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products;
    // So khớp theo category ID (đã được để lowercase trong constants)
    return products.filter(p => p.category === selectedCategory.toLowerCase());
  }, [selectedCategory, products]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Catalog Section */}
        <section id="catalog" className="py-12 md:py-16 scroll-mt-28 md:scroll-mt-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-orange-300"></span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight uppercase">Kho Deal T-Infinity</h2>
                <span className="w-8 h-px bg-orange-300"></span>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 w-full max-w-5xl">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-4 py-2.5 md:px-6 md:py-3 rounded-xl text-xs md:text-sm font-bold transition-all shadow-sm border ${
                      selectedCategory === cat.id
                        ? 'bg-[#EE4D2D] text-white border-[#EE4D2D] shadow-orange-200 shadow-lg scale-105'
                        : 'bg-white text-gray-600 border-gray-100 hover:border-orange-200 hover:bg-orange-50'
                    }`}
                  >
                    <span className="text-base md:text-lg">{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-24">
                <div className="relative">
                  <div className="w-12 h-12 border-4 border-orange-100 border-t-[#EE4D2D] rounded-full animate-spin"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold text-[#EE4D2D]">HOT</div>
                </div>
                <p className="mt-4 text-gray-400 text-sm font-medium animate-pulse uppercase tracking-widest">Đang tải danh sách deal...</p>
              </div>
            ) : error ? (
              <div className="max-w-md mx-auto text-center py-12 bg-white rounded-3xl shadow-sm border border-red-50 p-8">
                <div className="text-5xl mb-4">🔌</div>
                <h3 className="text-gray-800 font-bold mb-2">Không thể đồng bộ dữ liệu</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-8 py-3 bg-[#EE4D2D] text-white rounded-full font-bold text-sm hover:shadow-xl transition-all active:scale-95"
                >
                  Thử tải lại trang
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200">
                    <div className="text-5xl mb-4 opacity-20">📦</div>
                    <h3 className="text-gray-400 font-medium italic">Hiện tại mục này chưa có deal mới từ T-Infinity...</h3>
                    <button 
                      onClick={() => setSelectedCategory('all')}
                      className="mt-4 text-[#EE4D2D] font-bold text-sm underline hover:text-[#d43d1d]"
                    >
                      Quay lại xem tất cả deal
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        <Features />
      </main>

      <Footer />
      
      {/* Mobile Sticky Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-lg border-t border-gray-100 md:hidden z-50 flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => {
            const el = document.getElementById('catalog');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full max-w-sm py-4 bg-gradient-to-r from-[#f53d2d] to-[#ff6433] text-white font-black text-sm rounded-2xl shadow-xl shadow-orange-200 flex items-center justify-center gap-2 active:scale-95 transition-transform uppercase tracking-wider"
        >
          Săn Deal T-Infinity Ngay 🚀
        </button>
      </div>
    </div>
  );
};

export default App;
