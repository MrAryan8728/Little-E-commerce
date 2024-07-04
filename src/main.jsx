import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './Components/Error.jsx'
import Body from './Components/Body'
import Product from './Components/Product.jsx'
import Cart from './Components/Cart.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Normal loading which may make app slow.
// import AboutUs from './Components/AboutUs.jsx'
// import ContactUs from './Components/ContactUs.jsx'

//Let's Implement Lazy Loading feature for aboutus and contact us.
const AboutUs = lazy(() => import("./Components/AboutUs.jsx"))
const ContactUs = lazy(() => import("./Components/ContactUs.jsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: "/about",
        element:
          <Suspense fallback = {<h1>Load ho rha hai bhai.........</h1>}>
            <AboutUs />
          </Suspense>,
      },
      {
        path: "/contact",
        element:
          <Suspense fallback = {<h1>Load ho rha hai bhai.........</h1>}>
            <ContactUs />
          </Suspense>,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

    ],
    errorElement: <Error />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
