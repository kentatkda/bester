import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/home/AboutBester.jpg'... Remove this comment to see the full error message
import TennisImg from './images/home/AboutBester.jpg'
// @ts-expect-error TS(6142): Module './CharmPoints' was resolved to 'C:/Users/M... Remove this comment to see the full error message
import CharmPoints from './CharmPoints'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



function AboutBester() {
  const ButtonComponent = () => {

    return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div
    style={{
      textAlign: 'center',
      marginTop: '50px',
    }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Link to="/events">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button variant="warning">Join Us →</Button>
        </Link>
    </div>)
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className='container text-light py-5 text-align align-items-center '
    style={{
      position: 'relative',
      zIndex: '-100',
      width: '80%',
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      margin:'auto',
      marginTop: '50vh'
    }}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p className='justify-content-space-between text-align'
      style={{
        marginBottom: '100px',
        fontSize: '2.4rem',
        textAlign: 'center',
        color: 'black'
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      }}> <b>ABOUT BESTER</b></p>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className='container justify-content-space-between text-align-center'
        style={{
          marginBottom: '10vh',
          color: 'black'
        }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className='row'>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className='col-md-6 d-flex justify-content-center'>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <img src={TennisImg} className='img-fluid border border-4 border-dark' alt="" 
              style={{
                width: '300px'
              }}/>
          </div>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className='col-md-5 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-2'
          style={{
            margin: 'auto',
            maxWidth: '90%',
            textAlign: 'center',
            marginTop: '20px',
          }}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <b>東京大学</b>/<b>日本女子大学</b>/<b>お茶の水女子大学</b>からなるインカレテニスサークル。
                自由度が高すぎるがゆえに人間関係が希薄になりがちな大学生活。
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                夏になって<b>「友達少ない...」</b>と気づいて後悔したって後の祭り。
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                さあ、後悔する前に新歓に参加し私たちと大学生活という<b>最後の青春時代</b>を全力で謳歌しましょう。
              </div>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <ButtonComponent/>
          </div>
        </div>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CharmPoints/>
    </div>
  )
}

export default AboutBester
