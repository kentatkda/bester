import React from 'react'
import ContactsDesc  from './Contacts'
import Header from './Header'
import Footer from './Footer'
import TennisImg from './images/shinkan/ShinkanTennisImg.jpg'
import MealImg from './images/shinkan/ShinkanEventImg.png'
import GassyukuImg from './images/shinkan/ShinkanGassyukuImg.png'
import IchinenImg from './images/shinkan/ShinkanIchinenImg.jpg'
import { CalendarSlides } from './JoinUs'
import Social from './Social'
import ShinkanJoinButton from './ShinkanJoinButton'


// const ButtonComponent = () => {

//   return (
//     <div className='container my-2 px-0 mx-0'>
//         <div className='row'
//         style={{
//             justifyContent: 'space-between',
//             alignContent: 'center',
//             margin: 'auto'
//         }}>
//             <div className='col-5 text-center my-4 ' style={{
//                 justifyContent: 'center',
//                 margin: 'auto',
//             }}>
//                 <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCYrwDQU9gSNg9isITgTPw2vnQl_xYLTqYerwSaZ7WGVp2SA/viewform">
//                     <Button variant="warning">テニスに参加 →</Button>
//                 </a>
//             </div>
//             <div className='col-5 text-center my-4' style={{
//                 justifyContent: 'center',
//                 margin: 'auto',
//             }}>
//                 <a href="https://docs.google.com/forms/d/e/1FAIpQLScGd1GUGHs0WEt60JSf8lHXGq5nIzC8SCy4jYHOMt-H1FIfBw/viewform">
//                     <Button variant="warning">イベントに参加 →</Button>
//                 </a>
//             </div>
//         </div>
//   </div>
//   )
// };

const WhatWeDoHeader = () => {
  return (
      <h1 className='mb-3 d-flex text-uppercase fw-bold text-align-center justify-content-center' 
      style={{
          margin:'auto'
      }}>
          <p className='text-warning'> WHAT </p>
          &nbsp; WE Do
      </h1>
  )
}

function ShinkanDescription () {
  const data = [
    {title: "テニス練習会",
    src:TennisImg,
    desc:"基本週３回のペースで新歓テニス練習を実施しています。主に、浮間舟渡駅、茗荷谷駅、駒場近くのコートで練習しているので都合のいいコートの練習日を選ぶことができます！初心者の方には、ラケットを貸し出して１から先輩が教えてくれるので是非気軽に参加してみてください。"
    },
    {title: "食事会",
    src:MealImg,
    desc:"食事会は週１回開かれます。先輩や新入生と話す中で、BESTERの雰囲気を体感することができるのではないでしょうか？さらになんと！新入生は新歓時期特別価格500円で飲み食いすることができます！！人気故にすぐに定員に達してしまうので、１年生はフォーム提出を急げ！！"
    },
    {title: "一年会",
    src:IchinenImg,
    desc:"一年会は、食事をするだけではなく遠足のように半日一緒に過ごすことで仲を深めようという企画です！例年、浅草や横浜を散策しています。食事会より長い時間一緒に話せるのでより仲良くなれるはず！"
    },
    {title: "新歓合宿",
    src:GassyukuImg,
    desc:"新歓合宿は、GWに開催される新年度最初の合宿になります。毎年新入生はこの合宿を機に仲良くなることが多く、テニスもみっちり教えてもらえるのでとても上達できるのが特徴です。"
    },]

    const ShinkanCards = data.map((item) =>
    <div className='container justify-content-space-between text-align-center shadow'
    style={{
      width: '80%',
      marginBottom: '10vh'
    }}>
        <div className='row'>
            <div className='col-lg-6 d-flex justify-content-center'>
                <img src={item.src} className='img-fluid border border-3 border-warning' alt="" style={{
                    height:'80%',
                    margin:'auto',
                    justifyContent:'center',

                }}/>
            </div>
            <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-2'>
                <b style={{marginTop: '30px'}}>{item.title}</b>
                <div className='py-2 px-1' style={{
                  textAlign: 'center',
                  width: '90%'
                }}>
                  {item.desc}
                </div>
            </div>
        </div>
    </div>
    )
  return (
    <div>
        <div className='container py-5 justify-content-center'
        style={{
            marginTop: '150px'
        }}>
          <WhatWeDoHeader/>
          <div className='ShinkanCards'
          style={{
              marginTop: '100px'
          }}>
              {ShinkanCards}
          </div>
        </div>
    </div>
)
}

function ShinkanHeader () {
  return (
    <div className='container py-2 text-center' style={{
      width: '80%',
      justifyContent: 'space-around',
      margin: 'auto',
      marginTop: '20vh',
    }}>
      <div className='row'>
        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center"
        style={{
            margin: 'auto',
            width: '450px'
        }}>
          <CalendarSlides/>
        </div>
        <div className="col-lg-4 d-flex flex-column justify-content-center" style={{
          alignContent: 'left',
          textAlign: 'center',
          justifyContent: 'center',
          marginRight: 'auto',
        }}>
            <h2 className="fs-1 mb-3 text-uppercase fw-bold text-center justify-content-center"style={{marginTop: '50px'}}> Shinkan  <p className='text-warning'>Info</p> </h2>
            <p className="mb-3" style={{
              // maxWidth: '90%',
              textAlign: 'center',
              fontSize: '16px',
              margin: 'auto'
            }}>
              少し気になったな～というそこのあなた！
              一度、新歓練習やイベントに参加してBESTERの雰囲気を味わってみませんか？
              あなたもきっとBESTERを好きになるはず..！
              連絡は下のリンクまたは、X, Instagram のDMからお待ちしています！
            </p>
            <ShinkanJoinButton/>
        </div>
      </div>
    </div>
  )
}

// function Calendar() {
//   return(
//   <div className=' container justify-content-space-between text-align-center'
//   style={{
//   width: '70%',
//   marginBottom: '10vh',
//   marginTop: '30vh'
//   }}>
//     <div className='row'
//     style={{
//       justifyContent: 'space-between',
//       margin: 'auto'
//     }}>
//       <div className='col-lg-5 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-2'
//       style={{
//           marginTop: '20px',
//       }}>
//           <h1 className='mb-0 d-flex text-uppercase fw-bold text-center justify-content-center' 
//           style={{
//               margin:'auto'
//           }}>
//             Shinkan
//           </h1>
//           <h1 className='mb-3 d-flex text-warning text-uppercase fw-bold text-center justify-content-center' 
//           style={{
//             justifyContent: 'space-around',
//             alignItems: 'center',
//             margin:'auto'
//           }}>
//             Schedule
//           </h1>
//           <div className='text-center' style={{
//             width: '90%'
//           }}>
//             BESTERの新歓では、テニス練習 / 食事会 / 一年会 / 新歓合宿 の主に4種類の企画があります。
//             都合のいい日時の企画に足を運んでみてください。お待ちしてます！
//           </div>
//       </div>
//       <div className='col-md-5 d-flex justify-content-center'>
//           <CalendarSlides/>
//       </div>
//     </div>
//   </div>
//   )
// }

function ShinkanDetails() {
  return (
    <div >
      <ShinkanHeader/>
      <ShinkanDescription/>
    </div>
  )
}

export default ShinkanDetails
