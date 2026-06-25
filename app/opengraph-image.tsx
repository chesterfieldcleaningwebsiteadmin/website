import { ImageResponse } from 'next/og'

export const alt = 'Chesterfield Cleaning Fairies — Local, Insured Cleaning'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: 'linear-gradient(160deg, #f6ead3 0%, #fbf6ec 55%, #f0e8d4 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '64px 80px',
        fontFamily: 'Georgia, "Times New Roman", serif',
      }}
    >
      {/* Eyebrow */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <span style={{ fontSize: 22, color: '#a87e1e', letterSpacing: '0.1em' }}>
          Chesterfield Cleaning Fairies
        </span>
      </div>

      {/* Main heading — two spans to avoid multi-text-node issue */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '28px' }}>
        <span
          style={{
            fontSize: 78,
            fontWeight: 700,
            color: '#1a2e4a',
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            fontFamily: 'Georgia, serif',
          }}
        >
          A little sparkle,
        </span>
        <span
          style={{
            fontSize: 78,
            fontWeight: 700,
            color: '#1a2e4a',
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            fontFamily: 'Georgia, serif',
          }}
        >
          a spotless home.
        </span>
      </div>

      {/* Subheading */}
      <div
        style={{
          display: 'flex',
          fontSize: 25,
          color: '#6e6155',
          textAlign: 'center',
          maxWidth: '780px',
          lineHeight: 1.5,
          marginBottom: '44px',
          fontFamily: 'Georgia, serif',
        }}
      >
        Trusted, insured cleaning across Chesterfield & Derbyshire
      </div>

      {/* Trust pills */}
      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {['Fully insured', 'DBS-checked', 'Local & trusted', '5-star rated'].map((t) => (
          <div
            key={t}
            style={{
              display: 'flex',
              background: '#fffdf8',
              border: '1.5px solid #eaddc6',
              borderRadius: '999px',
              padding: '11px 26px',
              fontSize: 21,
              color: '#2c2336',
              fontFamily: 'Georgia, serif',
            }}
          >
            {t}
          </div>
        ))}
      </div>

      {/* URL */}
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          bottom: '36px',
          fontSize: 17,
          color: '#a87e1e',
          letterSpacing: '0.04em',
        }}
      >
        chesterfieldcleaningfairies.co.uk
      </div>
    </div>,
    { ...size }
  )
}
