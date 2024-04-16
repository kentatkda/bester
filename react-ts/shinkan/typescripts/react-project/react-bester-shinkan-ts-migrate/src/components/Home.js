import React, { useState, useEffect } from 'react'
import Social from './Social'
import Events from './Events'
import AboutBester from './AboutBester'
import Tennis from './Tennis'
import Footer from './Footer'
import Gallery from './Gallery'
import JoinUs from './JoinUs'
import ShowLogo from './ShowLogo'
import Header from './Header'
import { useNavigate } from "react-router-dom"
import PageCover from './PageCover'
import { ContactsDesc } from './Contacts'
// import { AnimatePresence, motion } from 'framer-motion'
// import Layout from './Layout'

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // 1秒後にロゴを非表示にする
    const timeout = setTimeout(() => {
      setShowLogo(false);
    }, 1500);

    const redirectTimeout = setTimeout(() => {
      navigate('/'); // '/homepage'は実際のホームページのパスに置き換えてください
    }, 1000);

    // コンポーネントがアンマウントされたときにクリアする
    return () => {
      clearTimeout(timeout)
      clearTimeout(redirectTimeout)
    };
  }, [navigate]);


  return (
    <div>
      {showLogo && <ShowLogo />}
      {!showLogo && (
        <HomePage/>
      )}
    </div>
  );
}

const HomePage = () => {
  return (
    <div className='wrapper'>
        
        <Header/>
        <PageCover/>
        <Social/>
        <AboutBester/>
        <Gallery />
        <Tennis/>
        <Events/>
        <JoinUs/>
        <ContactsDesc/>
        <Footer/>
    </div>
  )
}
