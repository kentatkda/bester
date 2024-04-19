import React from 'react'
import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom';
import Modal from 'react-modal'
import { useState, useEffect } from 'react';
import './ModalComponent.css'
import CloseIcon from '@mui/icons-material/Close';
// import XIcon from '@mui/icons-material/X';
// import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// @ts-expect-error TS(2307): Cannot find module './images/symbol/insta_logo.png'... Remove this comment to see the full error message
import  InstaImage from './images/symbol/insta_logo.png'
// @ts-expect-error TS(2307): Cannot find module './images/symbol/x_logo.png' o... Remove this comment to see the full error message
import XImage from './images/symbol/x_logo.png'

const customStyles = {
  content: {
    top: "50%",
    margin:'auto',
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: '350px',
    border: "none",
    borderRadius: "20px",
    boxShadow: "0px 0px 5px 0px black",
    zIndex: '102'
  },
};


function ModalComponent({ fontSize }) {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  useEffect(() => {
    // モーダルが開かれる前にApp要素を設定する
    Modal.setAppElement('#root'); // ここでは、#rootがAppの要素だと仮定しています。適切な要素を指定してください。
  }, []);


  return (
    <div className='container' style={{
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      margin: 'auto',
    }}>
      <Button
        variant="warning"
        onClick={() => {
          setEditModalIsOpen(true);
          console.log('modal is opened.')
        }}
        style={{fontSize: fontSize}}
      >
        新歓に参加 →
      </Button>
      <Modal isOpen={editModalIsOpen} onRequestClose={() => setEditModalIsOpen(false)} style={customStyles}>
        <div className='text-dark px-0' style={{zIndex:'102'}}>
          <div className='container' style={{
            justifyContent: 'center',
            margin: 'auto',
            alignContent: 'center',
            marginBottom: '25px',
            maxWidth: '90%'
            }}>
              <h4 className='text-dark text-center fw-bold px-0 mx-0 my-3' style={{
                fontSize: '20px',
                marginBottom: '50px'
              }}> BESTERの新歓に参加</h4>
          </div>
          <p style={{
            maxWidth: '80%',
            fontSize: '15px',
            textAlign: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            margin: 'auto',
            marginBottom: '20px'
          }}>新歓への参加希望はX, instagramのDMから受け付けております。</p>
          <div id="modal-x" className='my-2 shadow py-3'>
            <a  className="text-center justify-content-center" href="https://twitter.com/BESTER_2024" style={{textDecoration:'none'}}>
              <div style={{display:'flex', justifyContent: 'center', alignContent: 'center', margin: 'auto'}}>
                {/* <XIcon className='mx-3' style={{position: 'fixed', left: '35px', color: 'black', fontSize:'20px'}}/> */}
                <img src={XImage} alt="" className='mx-3' style={{position: 'fixed', left: '35px', color: 'black', width:'20px'}}/>
                <div className='mx-3 text-center' style={{fontSize: '17px', color:'black',}}>
                  XからDM
                </div>
                <ArrowForwardIcon className='mx-3' style={{color:'black', position:'fixed', right: '40px'}}/>
              </div>
            </a>
          </div>
          <div id="modal-insta" className='my-2 shadow py-3'>
            <a className="text-center justify-content-center" href="https://www.instagram.com/bester_2024" style={{textDecoration:'none'}}>
              <div style={{display:'flex', justifyContent: 'center', alignContent: 'center', margin: 'auto'}}>
                {/* <InstagramIcon className='mx-3' style={{position: 'fixed', left: '35px' ,color: 'black', fontSize:'20px'}}/> */}
                <img src={InstaImage} alt="" className='mx-3' style={{position: 'fixed', left: '35px', color: 'black', width:'20px'}}/>
                <div className='mx-3' style={{fontSize: '17px', color:'black'}}>
                  InstagramからDM
                </div>
                <ArrowForwardIcon className='mx-3' style={{color:'black', position:'fixed', right: '40px'}}/>
              </div>
            </a>
          </div>
          <div id="close" className='container' style={{backgroundColor: 'rgba(255, 165, 0, 0.8)', marginTop: '20px'}}>
            <div className='row d-flex py-1'
            style={{display:'flex'}}
            onClick={() => {
              setEditModalIsOpen(false);
            }}>
              <div className='mx-2  text-center py-2' style={{fontSize:'17px', color: 'white', justifyContent: 'center', alignContent:'center', margin: 'auto'}}>
                閉じる
              </div>
              <CloseIcon className='mx-2' style={{
                fontSize: '40px',
                color: 'white',
                position: 'fixed',
                right: '40px',
                alignContent: 'center',
                margin: 'auto',
                }}
                />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalComponent;
