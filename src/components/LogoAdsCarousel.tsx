import { useState, useEffect } from "react";

interface LogoAdsCarouselProps {
  logo: string;
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
}

// استيراد جميع الإعلانات
const ads = [
  "/ads/1 (1).png",
  "/ads/1 (2).png",
  "/ads/1 (3).png",
  "/ads/1 (4).png",
  "/ads/1 (5).png",
  "/ads/1 (6).png",
  "/ads/1 (7).png",
  "/ads/1 (8).png",
  "/ads/1 (9).png",
];

export function LogoAdsCarousel({
  logo,
  className = "",
  alt = "Ninja Zone Center",
  width = 520,
  height = 520,
}: LogoAdsCarouselProps) {
  const [currentImage, setCurrentImage] = useState(logo);
  const [isLogoPhase, setIsLogoPhase] = useState(true);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // عرض الشعار لمدة 4 ثواني أولاً
    const logoTimer = setTimeout(() => {
      setIsLogoPhase(false);
      setFade(false);
      setTimeout(() => {
        setCurrentImage(ads[0]);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearTimeout(logoTimer);
  }, []);

  useEffect(() => {
    if (!isLogoPhase) {
      // تغيير الإعلان كل 5 ثواني
      const adTimer = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentAdIndex((prev) => {
            const nextIndex = (prev + 1) % ads.length;
            setCurrentImage(ads[nextIndex]);
            return nextIndex;
          });
          setFade(true);
        }, 500);
      }, 5000);

      return () => clearInterval(adTimer);
    }
  }, [isLogoPhase]);

  return (
    <div className="relative flex justify-center">
      {/* تأثير الضوء الخلفي */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-pink)]/30 to-[var(--neon-cyan)]/30 blur-3xl rounded-full" />
      
      {/* الصورة الرئيسية */}
      <img
        src={currentImage}
        alt={isLogoPhase ? alt : `إعلان ${currentAdIndex + 1}`}
        width={width}
        height={height}
        className={`${className} transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* مؤشر الإعلانات */}
      {!isLogoPhase && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 glass px-3 py-2 rounded-full">
          {ads.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setCurrentAdIndex(index);
                  setCurrentImage(ads[index]);
                  setFade(true);
                }, 500);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentAdIndex
                  ? "w-8 bg-[var(--neon-cyan)]"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`عرض الإعلان ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* عداد تنازلي للشعار (اختياري) */}
      {isLogoPhase && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full">
          <span className="text-xs font-bold text-[var(--neon-cyan)] animate-pulse">
            ⏱️ جاري تحميل الإعلانات...
          </span>
        </div>
      )}
    </div>
  );
}
