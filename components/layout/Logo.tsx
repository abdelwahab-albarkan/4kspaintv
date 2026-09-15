import Link from 'next/link';
import Image from 'next/image';
import { BRAND_LOGO } from '@/lib/assets';

/**
 * Brand logo — the real 4K SPAIN TV artwork from /public/logospain.png.
 * Always the full logo, uncropped, on its transparent background (no box).
 * The only difference between placements is the rendered height.
 * - variant="mark" (navbar): compact.
 * - variant="full" (footer): larger.
 */
export default function Logo({
  variant = 'full',
  priority = false,
}: {
  variant?: 'mark' | 'full';
  priority?: boolean;
}) {
  // 3:1 logo → width ≈ 3 × height. mark: ~132px (mobile) / ~204px (desktop).
  const sizeClass = variant === 'mark' ? 'h-[44px] sm:h-[68px]' : 'h-16 sm:h-20';

  return (
    <Link
      href="/"
      aria-label="4K SPAIN TV — Inicio"
      className="inline-flex shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Image
        src={BRAND_LOGO.src}
        alt={BRAND_LOGO.alt}
        width={BRAND_LOGO.width}
        height={BRAND_LOGO.height}
        priority={priority}
        sizes={variant === 'mark' ? '(max-width: 640px) 150px, 240px' : '(max-width: 640px) 220px, 300px'}
        className={`${sizeClass} w-auto object-contain`}
      />
    </Link>
  );
}
