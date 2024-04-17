import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/shinkan/ShinkanTennis... Remove this comment to see the full error message
import TennisImg from './images/shinkan/ShinkanTennisImg.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/shinkan/ShinkanEventI... Remove this comment to see the full error message
import MealImg from './images/shinkan/ShinkanEventImg.png'
// @ts-expect-error TS(2307): Cannot find module './images/shinkan/ShinkanGassyu... Remove this comment to see the full error message
import GassyukuImg from './images/shinkan/ShinkanGassyukuImg.JPG'
// @ts-expect-error TS(2307): Cannot find module './images/shinkan/ShinkanIchine... Remove this comment to see the full error message
import IchinenImg from './images/shinkan/ShinkanIchinenImg.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/home/Calendar.jpg' or... Remove this comment to see the full error message
import Calendar from './images/home/Calendar.jpg'
// @ts-expect-error TS(6142): Module './ShinkanJoinButton.tsx' was resolved to 'C... Remove this comment to see the full error message
import ModalComponent from './ModalComponent.tsx'
import { motion } from 'framer-motion';
import ContainerVariants from '../components/ContainerVariants.tsx'

function ShinkanDescription () {
  const data = [
    {title: "テニス練習会",
    src:TennisImg,
    desc:"基本週３回のペースで新歓テニス練習を実施しています。練習場所は主に、浮間舟渡駅、茗荷谷駅、駒場近くのコートです。初心者の方には、ラケットを貸し出して１から先輩が教えてくれるので是非気軽に参加してみてください。"
    },
    {title: "食事会",
    src:MealImg,
    desc:"食事会は週１回開かれます。先輩や新入生と話す中で、BESTERの雰囲気を体感することができるのではないでしょうか？すぐ定員に達してしまうので興味のある人はフォーム提出を急げ！！"
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
    <motion.div
      variants={ContainerVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      key={item.title}>
      <div className='container justify-content-space-between text-align-center shadow'
      style={{
        width: '80%',
        marginBottom: '10vh',
        borderRadius: '10px', // 任意の角の半径を指定します
        backgroundColor: '#f0f0f0', // 任意の背景色を指定します
        padding: '20px',
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
    </motion.div>
    )
  return (
    <div>
        <div className='container py-5 justify-content-center'
        style={{
            marginTop: '150px'
        }}>
          <motion.div
          variants={ContainerVariants()}
          initial="hidden"
          whileInView="visible">
            <h1 className='mb-3 d-flex text-uppercase fw-bold text-align-center justify-content-center' 
            style={{
                margin:'auto'
            }}>
                <p className='text-warning'> WHAT </p>
                &nbsp; WE Do
            </h1>
          </motion.div>
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
      <motion.div
      variants={ContainerVariants()}
      initial="hidden"
      whileInView="visible">
        <div className='row'>
          <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center text-center"
          style={{
              margin: 'auto',
              width: '450px',
              justifyContent: 'center',
              alignContent: 'space-between'
          }}>
            <div className='d-flex justify-content-center'>
              <img className='img-fluid border border-3 border-dark' src={Calendar} alt="" style={{maxHeight: '300px', objectFit: 'cover'}}/>
            </div>
          </div>
          <div className="col-lg-5 d-flex flex-column justify-content-center" style={{
            alignContent: 'left',
            textAlign: 'center',
            justifyContent: 'center',
            marginRight: 'auto',
            marginBottom: '40px'
          }}>
              <h2 className="fs-1 mb-3 text-uppercase fw-bold text-center justify-content-center" style={{marginTop: '30px', marginBottom: '10px'}}> Shinkan  <p className='text-warning'>Info</p> </h2>
              <p className="mb-3" style={{
                maxWidth: '450px',
                textAlign: 'center',
                fontSize: '16px',
                margin: 'auto'
              }}>
                少し気になったな～というそこのあなた！
                一度、新歓練習やイベントに参加してBESTERの雰囲気を味わってみませんか？
                あなたもきっとBESTERを好きになるはず..！
                連絡お待ちしています！
              </p>
              <ModalComponent fontSize={'16px'}/>
          </div>
        </div>
      </motion.div>
    </div>
  )
}


function Shinkan() {
  return (
    <div >
      <ShinkanHeader/>
      <ShinkanDescription/>
    </div>
  )
}

export default Shinkan
