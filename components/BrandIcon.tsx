interface BrandIconProps {
  brandName: string;
  className?: string;
}

export default function BrandIcon({ brandName, className = "w-16 h-16" }: BrandIconProps) {
  const icons: Record<string, JSX.Element> = {
    Toyota: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Toyota 三环标志 - 优化版 */}
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2.5"/>
        <ellipse cx="50" cy="50" rx="32" ry="18" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <ellipse cx="37" cy="50" rx="13" ry="23" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <ellipse cx="63" cy="50" rx="13" ry="23" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      </svg>
    ),
    Nissan: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Nissan 圆形标志 */}
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="20" y="45" width="60" height="10" rx="1" fill="currentColor"/>
        {/* N字母简化设计 */}
        <path d="M 30 35 L 30 65 M 30 35 L 45 65 M 45 35 L 45 65" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 55 35 L 55 65 M 55 35 L 70 65 M 70 35 L 70 65" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Mitsubishi: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Mitsubishi 三菱标志 */}
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2.5"/>
        {/* 三个菱形 */}
        <path d="M 50 25 L 40 45 L 50 40 L 60 45 Z" fill="currentColor"/>
        <path d="M 40 45 L 30 65 L 40 60 L 50 65 Z" fill="currentColor"/>
        <path d="M 60 45 L 50 65 L 60 60 L 70 65 Z" fill="currentColor"/>
      </svg>
    ),
    Ford: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Ford 椭圆标志 */}
        <ellipse cx="50" cy="50" rx="42" ry="24" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        {/* F字母简化 */}
        <path d="M 35 35 L 35 65 M 35 35 L 50 35 M 35 48 L 47 48" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Chevrolet: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Chevrolet 领结/十字标志 */}
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2.5"/>
        {/* 十字领结造型 */}
        <path d="M 50 30 L 65 42 L 60 50 L 65 58 L 50 70 L 35 58 L 40 50 L 35 42 Z" 
              fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="42" y="46" width="16" height="8" rx="1" fill="white"/>
      </svg>
    ),
  };

  return icons[brandName] || icons.Toyota;
}
