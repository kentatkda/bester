import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/home/BackImg.jpg' or ... Remove this comment to see the full error message
import BackImg from './images/home/BackImg.jpg'
import './PageCover.css'

const PageCoverText = () => {
    return(
        <div className='container px-2 py-4' style={{
            marginTop: '45vh'
        }}>
            <h2 id='title' className='fw-bold text-warning'>
                BESTER
            </h2>
            <h5 id='caption' className='text-white' style={{
                maxWidth: '70%',
            }}>
                東京大学/日本女子大学/御茶ノ水女子大学のインカレテニスサークル
            </h5>
            <h4 id='catch-copy' className='text-white'>
                最後の青春時代を私たちとともに。
            </h4>
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
        {console.log(process.env.PUBLIC_URL)}
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
