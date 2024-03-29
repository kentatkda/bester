import React from 'react'
import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom';
import Modal from 'react-modal'
import { useState } from 'react';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from 'react-router-dom';

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
    boxShadow: "0px 0px 10px 0px black"
  },
};


function ModalComponent() {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  return (
    <div className='container' >
      <Button
        variant="warning"
        onClick={() => {
          setEditModalIsOpen(true);
        }}
      >
        新歓に参加 →
      </Button>
      <Modal isOpen={editModalIsOpen} style={customStyles}>
        <div className='tet-center text-dark my-3'>
          <h3 className='text-center'>BESTERの新歓に参加</h3>
          <li className='my-3 fw-bold text-center' style={{
            listStyle: 'none',
            justifyContent: 'center',
            alignContent: 'center',
            margin: 'auto',
          }}>
          <a  className="text-center justify-content-center" href="https://docs.google.com/forms/d/e/1FAIpQLSeCYrwDQU9gSNg9isITgTPw2vnQl_xYLTqYerwSaZ7WGVp2SA/viewform" >
              <LinkIcon/>
              テニス練習に参加
          </a>
          </li>
          <li className='my-3 fw-bold text-center' style={{
            listStyle: 'none',

            }}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScGd1GUGHs0WEt60JSf8lHXGq5nIzC8SCy4jYHOMt-H1FIfBw/viewform" >
              <LinkIcon/>
              イベントに参加
          </a>
          </li>
          <li className='my-3 fw-bold text-center' style={{listStyle: 'none'}}>
          <a href="https://twitter.com/BESTER_2024" >
              <LinkIcon/>
              twitter.com/BESTER_2024
          </a>
          </li>
          <li className='my-3 fw-bold text-center' style={{listStyle: 'none'}}>
          <a href="https://www.instagram.com/bester_2024" >
            <LinkIcon/>
            instagram.com/bester_2024
          </a>
          </li>
        </div>
      </Modal>
    </div>
  );
}

export default ModalComponent;
