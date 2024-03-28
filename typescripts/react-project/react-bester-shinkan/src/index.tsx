import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// @ts-expect-error TS(6142): Module './App' was resolved to 'C:/Users/MEIP-user... Remove this comment to see the full error message
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// @ts-expect-error TS(2345): Argument of type 'HTMLElement | null' is not assig... Remove this comment to see the full error message
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.StrictMode>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <App />
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