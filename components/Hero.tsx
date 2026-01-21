
import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  // Generate random properties for stars to ensure a natural look
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-black">
      <style>
        {`
          @keyframes drift {
            0% { transform: translate(0, 0); }
            50% { transform: translate(-1%, 1%); }
            100% { transform: translate(0, 0); }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          .star-field {
            animation: drift 60s ease-in-out infinite;
          }
          .star {
            animation: twinkle var(--duration) ease-in-out infinite;
            animation-delay: var(--delay);
          }
        `}
      </style>

      {/* Galaxy Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-70 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2047&auto=format&fit=crop")',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
      
      {/* Dynamic Star Field Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden star-field">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full star"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              '--duration': `${star.duration}s`,
              '--delay': `${star.delay}s`,
            } as React.CSSProperties}
          />
        ))}
        {/* Larger glowing nebulas stars */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-200 rounded-full blur-[2px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-3 h-3 bg-blue-200 rounded-full blur-[3px] animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-orange-300 text-[10px] md:text-xs font-bold mb-4 animate-fade-in shadow-xl">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
          </span>
          CHỌN LỌC SẢN PHẨM CHÍNH HÃNG 100%
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 drop-shadow-2xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">T-INFINITY</span>
          Săn Deal Vô Tận
        </h1>
        
        <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed font-medium">
          Khám phá vũ trụ ưu đãi từ Shopee Mall. 
          Lọc ra những "viên kim cương" giá hời nhất giữa ngân hà sản phẩm.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={() => {
              const el = document.getElementById('catalog');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-sm px-8 py-3 shadow-[0_0_20px_rgba(238,77,45,0.3)] hover:shadow-[0_0_30px_rgba(238,77,45,0.5)]"
          >
            SĂN DEAL NGAY
          </Button>
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-[10px] text-orange-200/60 uppercase tracking-widest font-black">Real-time Update</span>
            <p className="text-xs text-gray-400">Vừa cập nhật</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
