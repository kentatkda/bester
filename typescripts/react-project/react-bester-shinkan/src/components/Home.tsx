import React, { useState, useEffect } from 'react'
// @ts-expect-error TS(6142): Module './Social' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import Social from './Social'
// @ts-expect-error TS(6142): Module './Events' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import Events from './Events'
// @ts-expect-error TS(6142): Module './AboutBester' was resolved to 'C:/Users/M... Remove this comment to see the full error message
import AboutBester from './AboutBester'
// @ts-expect-error TS(6142): Module './Tennis' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import Tennis from './Tennis'
// @ts-expect-error TS(6142): Module './Footer' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import Footer from './Footer'
// @ts-expect-error TS(6142): Module './Gallery' was resolved to 'C:/Users/MEIP-... Remove this comment to see the full error message
import Gallery from './Gallery'
// @ts-expect-error TS(6142): Module './JoinUs' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import JoinUs from './JoinUs'
// @ts-expect-error TS(6142): Module './ShowLogo' was resolved to 'C:/Users/MEIP... Remove this comment to see the full error message
import ShowLogo from './ShowLogo'
// @ts-expect-error TS(6142): Module './Header' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import Header from './Header'
import { useNavigate } from "react-router-dom"
// @ts-expect-error TS(6142): Module './PageCover' was resolved to 'C:/Users/MEI... Remove this comment to see the full error message
import PageCover from './PageCover'
// @ts-expect-error TS(6142): Module './Contacts' was resolved to 'C:/Users/MEIP... Remove this comment to see the full error message
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {showLogo && <ShowLogo />}
      {!showLogo && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <HomePage/>
      )}
    </div>
  );
}

const HomePage = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className='wrapper'>
        
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Header/>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PageCover/>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Social/>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AboutBester/>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Gallery />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tennis/>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Events/>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <JoinUs/>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ContactsDesc/>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Footer/>
    </div>
  )
}
