import React from 'react'
import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom';
import Modal from 'react-modal'
import { useState } from 'react';
import './ModalComponent.css'
import CloseIcon from '@mui/icons-material/Close';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const customStyles = {
  content: {
    top: "50%",
    margin:'auto',
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "40%",
    border: "none",
    borderRadius: "20px",
    boxShadow: "0px 0px 10px 0px black",
  },
};


function ModalComponent() {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

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
      >
        新歓に参加 →
      </Button>
      <Modal isOpen={editModalIsOpen} onRequestClose={() => setEditModalIsOpen(false)} style={customStyles}>
        <div className='text-dark my-3 px-0'>
          <div className='container' style={{
            boxShadow: '0px 5px 5px -3px rgba(255, 187, 0, 0.8)',
            justifyContent: 'space-between',
            margin: 'auto',
            display: 'flex',
            alignContent: 'center',
            marginBottom: '40px',
            }}>
            <div className='col-10'>
              <h4 className='text-dark fw-bold px-0 mx-0 my-3' style={{
                fontSize: '20px'
              }}> BESTERの新歓に参加</h4>
            </div>
            <CloseIcon className='col-2 mx-2' style={{
              fontSize: '50px',
              justifyContent:'flex-end' ,
              alignContent: 'flex-end',
              color: 'black',
              }}
              onClick={() => {
                setEditModalIsOpen(false);
              }}/>
          </div>
          <p style={{
            maxWidth: '80%',
            fontSize: '14px',
            marginLeft: '30px',
          }}>新歓への参加希望はX, instagramのDMから受け付けております。</p>
          <div className='row d-flex mx-3' style={{
            justifyContent: 'center',
            alignContent: 'center'
          }}>
            <div className='col-6 my-3 fw-bold text-center' style={{
              justifyContent: 'center',
              alignContent: 'center',
              margin: 'auto',
            }}>
            <a  className="text-center justify-content-center" href="https://twitter.com/BESTER_2024" >
              <XIcon style={{color: 'black', fontSize: '40px', pointerEvents: 'none', marginBottom: '15px',}}/>
                <div>
                  <Button variant='warning' className='' style={{marginTop: '10px'}} >
                  <div style={{fontSize: '13px'}}>
                    XからDM →
                  </div>
                  </Button>
                </div>
            </a>
            </div>
            <div className='col-6 my-3 fw-bold text-center' style={{
              alignContent: 'center',
              margin: 'auto',

              }}>
            <a href="https://www.instagram.com/bester_2024" >
                  <InstagramIcon style={{color: 'black', fontSize: '40px', marginBottom: '15px'}}/>
                  <div>
                    <Button variant='warning' style={{marginTop: '10px'}}>
                      <div style={{ fontSize: '13px'}}>
                        インスタからDM →
                      </div>
                    </Button>
                  </div>
            </a>
            </div>
          </div>
          {/* <div className='row d-flex' style={{
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
            margin: 'auto'
          }}>
            <div className='col-1 my-3 mx-1 px-1' >
              <a href="https://twitter.com/BESTER_2024">
                <XIcon className='modal-social' style={{ color: 'black' }} />
              </a>
            </div>
            <div className='col-1 my-3 mx-3 px-1' >
              <a href="https://www.instagram.com/bester_2024">
                <InstagramIcon className='modal-social' style={{ color: 'black' }} />
              </a>
            </div>
          </div> */}
        </div>
      </Modal>
    </div>
  );
}

export default ModalComponent;
