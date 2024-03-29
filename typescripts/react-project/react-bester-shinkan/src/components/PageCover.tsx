import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/home/BackImg.jpg' or ... Remove this comment to see the full error message
import BackImg from './images/home/BackImg.jpg'

const PageCoverText = () => {
    return(
        <div className='container px-2 py-4' style={{
            marginTop: '45vh'
        }}>
            <h2 className='col-md-5 fw-bold text-warning' style={{
                fontSize: '50px'
            }}>
                BESTER
            </h2>
            <h5 className='col-md-5 text-white' style={{
                maxWidth: '80%',
                fontSize: '17px'
            }}>
                東京大学/日本女子大学/御茶ノ水女子大学のインカレテニスサークル
            </h5>
            <h3 className='col-md-5 text-white' style={{
                fontSize: '24px'
            }}>
                最後の青春時代を私たちとともに。
            </h3>
        </div>
    )
}

function ShowBackImg() {
    return (
    <div className='backimg' style={{
        position: 'absolute',
        width: '100%',
        height: '100vh',
        top: '0',
        left: '0',
        zIndex: '-100',
    }}
    >
        <img className='img' src={BackImg} alt="" style=
        {{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            zIndex: '-10'
        }}/>
          {/* <div class="overlay"></div> */}
    </div>
    )
}

function PageCover() {
  return (
    <div>
        <ShowBackImg/>
        <PageCoverText/>
    </div>
  )
}

export default PageCover
