import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

export const runtime = 'edge';
export const alt = `${SITE.brand} — IPTV Premium en España`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #070707 0%, #0d1f16 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 44, fontWeight: 700, color: SITE.themeColor }}>{SITE.brand}</div>
        <div style={{ fontSize: 68, fontWeight: 800, marginTop: 24, textAlign: 'center', padding: '0 80px' }}>
          IPTV Premium en 4K
        </div>
        <div style={{ fontSize: 30, marginTop: 20, color: '#cfcfcf' }}>
          +50.000 canales · +180.000 películas y series
        </div>
      </div>
    ),
    { ...size },
  );
}
