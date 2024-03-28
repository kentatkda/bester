import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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