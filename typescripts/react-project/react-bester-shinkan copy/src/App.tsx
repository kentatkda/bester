import './App.css';
// @ts-expect-error TS(6142): Module './components/EventsDetails' was resolved t... Remove this comment to see the full error message
import EventsDetails from './components/EventsDetails';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // ScrollRestoration
} from "react-router-dom";
// @ts-expect-error TS(6142): Module './components/Home' was resolved to 'C:/Use... Remove this comment to see the full error message
import Home from './components/Home';
// @ts-expect-error TS(6142): Module './components/Contacts' was resolved to 'C:... Remove this comment to see the full error message
import Contacts from './components/Contacts';
// import TennisDetails from './components/TennisDetails';
// @ts-expect-error TS(6142): Module './components/BesterDetails' was resolved t... Remove this comment to see the full error message
import BesterDetails from './components/BesterDetails';
// @ts-expect-error TS(6142): Module './components/GalleryDetails' was resolved ... Remove this comment to see the full error message
import GalleryDetails from './components/GalleryDetails';
// @ts-expect-error TS(6142): Module './components/Shinkan' was resolved to 'C:/... Remove this comment to see the full error message
import Shinkan from './components/Shinkan';
// import { useLocation,  useEffect} from 'react';
// import { AnimatePresence } from 'framer-motion';
import './style.css';

// const Layout = ({children}) => {
//   return (
//     <div>
//       {/* ... */}
//       {children}
//       <ScrollRestoration />
//     </div>
//   );
// }

function App() {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Router>
        {/* <Layout/> */}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="App">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Routes>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route path="/" element={ <Home /> }/>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route path="/events" element={ <EventsDetails /> } />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route path="/contacts" element={ <Contacts /> } />
            {/* <Route path="/tennis" element={ <TennisDetails /> } /> */}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route path="/bester" element={ <BesterDetails /> } />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route path="/gallery" element={ <GalleryDetails /> } />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route path="/shinkan" element={ <Shinkan /> } />
          </Routes>
        </div>
    </Router>
  );
}


export default App;
