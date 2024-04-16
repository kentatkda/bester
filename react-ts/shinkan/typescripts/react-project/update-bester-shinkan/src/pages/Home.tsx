import React, { useState, useEffect } from 'react'
import Social from '../components/Social'
import Events from '../components/Events'
import AboutBester from '../components/AboutBester'
import Tennis from '../components/Tennis'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import JoinUs from '../components/JoinUs'
// import ShowLogo from '../components/ShowLogo'
import Header from '../components/Header'
// import { useNavigate } from "react-router-dom"
import PageCover from '../components/PageCover'
import  ContactsDesc from '../components/Contacts'

export const Home = () => {
//   const [showLogo, setShowLogo] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // 1秒後にロゴを非表示にする
//     const timeout = setTimeout(() => {
//       setShowLogo(false);
//     }, 1500);

//     const redirectTimeout = setTimeout(() => {
//       navigate('/'); // '/homepage'は実際のホームページのパスに置き換えてください
//     }, 1000);

//     // コンポーネントがアンマウントされたときにクリアする
//     return () => {
//       clearTimeout(timeout)
//       clearTimeout(redirectTimeout)
//     };
//   }, [navigate]);


  return (
    <div>
      {/* {showLogo && <ShowLogo />}
      {!showLogo && (
        <HomePage/>
      )} */}
      <HomePage/>
    </div>
  );
}

const HomePage = () => {
  return (
    <div className='wrapper'>
        
        {/* <Header/>
        <PageCover/>
        <Social/>
        <AboutBester/>
        <Gallery />
        <Tennis/>
        <Events/>
        <JoinUs/> */}
        <ContactsDesc/>
        <Footer/>
    </div>
  )
}
