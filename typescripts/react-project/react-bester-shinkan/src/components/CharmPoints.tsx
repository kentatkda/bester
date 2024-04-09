import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/home/akushu.png' or i... Remove this comment to see the full error message
import AkusyuImg from './images/home/akushu.png'
// @ts-expect-error TS(2307): Cannot find module './images/home/danjyo.png' or i... Remove this comment to see the full error message
import SexImg from './images/home/danjyo.png'
// @ts-expect-error TS(2307): Cannot find module './images/home/tenbin.png' or i... Remove this comment to see the full error message
import TenbinImg from './images/home/tenbin.png'



export default function CharmPoints() {
  const data = [
    {title: "男女比1:1",
    src: SexImg,
    desc: "べスターは男女比1:1、90人ほどの中規模なサークルです。"
    },
    {title: "バランス",
    src: TenbinImg,
    desc: "べスターでは、テニスとイベント両方にバランスよく参加することができます。"
    },
    {title: "一生の友情",
    src: AkusyuImg,
    desc: "サークルとして中規模な分、お互い親密になりやすく一生涯の友情が芽生えるはず！"
    },
  ]

  const PointCards = data.map((item) =>
  <div className="col-lg-4 col-sm-6 col-xs-6 px-2 ">
      <div className="my-3" 
      style={{
        overflow:'hidden',
      }}>
          <img src={item.src} className="img-fluid" alt="" style={{
            objectFit: 'cover',
            maxWidth: '200px'}}/>
      </div>
      <div className="my-3 text-dark" >
        <b> {item.title} </b>
      </div>
      <div className='my-3 text-dark' style={{
        maxWidth: '250px',
        justifyContent: 'center',
        margin: 'auto',
        textAlign: 'center'
      }}>
        {item.desc}
      </div>
  </div>
  )

  return (
    <div className='container'
    style={{
      width: '80%',
      position: 'relative',
      zIndex: '-100',
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      margin:'auto',
      marginTop: '20vh',
      marginBottom: '25vh'
    }}>
      <h1 className='fw-bold text-dark my-5'>
        FEATURES
      </h1>
      <div className='row'
      style={{
        justifyContent: 'space-between',
        margin: 'auto'
      }}>
        {PointCards}
      </div>
    </div>
  );
}


