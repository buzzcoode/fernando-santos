import { ImageResponse } from '@vercel/og'
import { NextApiRequest } from 'next'

export const config = {
  runtime: 'experimental-edge'
}

const handler = async (req: NextApiRequest) => {
  const { searchParams } = new URL(req.url!)

  const title = searchParams.get('title') || 'Fernando dos Santos'
  const subTitle = searchParams.get('subtitle') || 'buzzcode'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          background: '#161616'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '1200px',
            height: '630px',
            padding: '80px'
          }}
        >
          <img
            src="http://fernandosantos.vercel.app/fernandosantos.jpg"
            alt="Fernando's avatar"
            width={160}
            height={160}
            style={{
              borderRadius: '200px',
              margin: '0 auto 16px'
            }}
          />

          <span
            style={{
              display: 'flex',
              fontSize: '28px',
              lineHeight: '28px',
              fontWeight: 900,
              color: '#fafafa',
              width: 'auto',
              textAlign: 'center',
              margin: '0 auto 16px'
            }}
          >
            {title}
          </span>

          <h1
            style={{
              display: 'flex',
              fontSize: '64px',
              lineHeight: '64px',
              fontWeight: 900,
              color: '#e879f9',
              width: 'auto',
              maxWidth: '640px',
              textAlign: 'center',
              margin: '0 auto 24px'
            }}
          >
            {subTitle}
          </h1>
          <h2
            style={{
              display: 'flex',
              fontSize: '24px',
              lineHeight: '24px',
              color: '#fafafa',
              width: 'auto',
              textAlign: 'center',
              margin: '0 auto'
            }}
          >
            buzzcode
          </h2>
        </div>
      </div>
    )
  )
}

export default handler
