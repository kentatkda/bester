import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/home/AboutBester.jpg'... Remove this comment to see the full error message
import TennisImg from './images/home/AboutBester.jpg'
import ModalComponent from './ModalComponent.tsx'



function AboutBester() {

  return (
    <div className='container text-light py-5 text-center '
    style={{
      position: 'relative',
      width: '90%',
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      margin:'auto',
      marginTop: '50vh'
    }}>
      <p className='justify-content-space-between text-align'
      style={{
        marginBottom: '100px',
        fontSize: '2.4rem',
        textAlign: 'center',
        color: 'black'
      }}> <b>ABOUT BESTER</b></p>
      <div className='container justify-content-space-between text-align-center'
        style={{
          marginBottom: '10vh',
          color: 'black'
        }}>
        <div className='row' style={{
          justifyContent: 'center',
          alignContent: 'center',
          margin: 'auto'
        }}>
          <div className='col-lg-6 d-flex justify-content-center'>
              <img src={TennisImg} className='img-fluid border border-4 border-dark' alt="" 
              style={{
                maxWidth: '300px'
              }}/>
          </div>
          <div className='col-lg-5 my-3 d-flex flex-column align-items-center justify-content-center mb-2 '
          style={{
            margin: 'auto',
            maxWidth: '90%',
            textAlign: 'center',
            marginTop: '20px',
          }}>
              <div>
                <b>東京大学</b>/<b>日本女子大学</b>/<b>お茶の水女子大学</b>からなるインカレテニスサークル。
                自由度が高すぎるがゆえに人間関係が希薄になりがちな大学生活。
                夏になって<b>「友達少ない...」</b>と気づいて後悔したって後の祭り。
                さあ、後悔する前に新歓に参加し私たちと大学生活という<b>最後の青春時代</b>を全力で謳歌しましょう。
              </div>
              <div className='btn' style={{
                marginTop: '20px'
              }}>
                <ModalComponent/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBester
