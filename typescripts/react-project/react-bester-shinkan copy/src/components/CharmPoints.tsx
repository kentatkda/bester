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
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className="col-md-3 col-sm-6 col-xs-6 col-xs-3 px-2 ">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="my-3" 
      style={{
        overflow:'hidden',
      }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <img src={item.src} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="my-3 text-dark" >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <b> {item.title} </b>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className='my-3 text-dark'>
        {item.desc}
      </div>
  </div>
  )

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className='container'
    style={{
      position: 'relative',
      zIndex: '-100',
      width: '90%',
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      margin:'auto',
      marginTop: '20vh'
    }}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <h1 className='fw-bold text-dark my-5'>
        FEATURES
      </h1>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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


