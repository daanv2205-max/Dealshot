
import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Catalog Section */}
        <section id="catalog" className="py-16 bg-white scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-8">Danh mục sản phẩm</h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 w-full">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all shadow-sm ${
                      selectedCategory === cat.id
                        ? 'bg-[#EE4D2D] text-white shadow-orange-200 shadow-lg scale-105'
                        : 'bg-white text-gray-600 border border-gray-100 hover:border-orange-200 hover:bg-orange-50'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl text-gray-500">Chưa có deal cho mục này, quay lại sau nhé!</h3>
              </div>
            )}
          </div>
        </section>

        <Features />
      </main>

      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 md:hidden z-50">
        <button 
          onClick={() => {
            const el = document.getElementById('catalog');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full py-3 bg-[#EE4D2D] text-white font-bold rounded-xl shadow-lg shadow-orange-200"
        >
          Săn Deal Ngay 🚀
        </button>
      </div>
    </div>
  );
};

export default App;
