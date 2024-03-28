import React from 'react'

function Text() {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className='text' id='text'
    style={{
      backgroundColor: 'rgba(0,0,0,0.6)',
      backgroundSize: 'cover',
    }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <h2 className='text-warning'>
            BESTER
          </h2>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <h5>
            東京大学/日本女子大学/御茶ノ水女子大学のインカレテニスサークル
          </h5>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p>
            最後の青春時代を私たちとともに。
          </p>
     </div>
  )
}

export default Text
