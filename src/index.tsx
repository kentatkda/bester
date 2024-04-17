import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
// @ts-expect-error TS(6142): Module './App' was resolved to 'C:/Users/MEIP-user... Remove this comment to see the full error message
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode basename={import.meta.env.DEV ? "/" : "/bester/"}>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);


// function Layout()  {
//   return (
//     <div>
//       {/* { children } */}
//       <Home/>
//       <ScrollRestoration />
//     </div>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       // { index: true, element: <EventsDetails /> },
//       { path: '/', element: <Home /> },
//       { path: '/events', element: <EventsDetails /> },
//       { path: '/shinkan', element: <Shinkan /> },
//       { path: '/gallery', element: <GalleryDetails /> },
//       { path: '/contacts', element: <Contacts /> },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter router={router} />
//   </React.StrictMode>
// );