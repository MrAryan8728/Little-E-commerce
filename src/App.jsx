import React, { useState } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom';
import UserContext from './utils/userContext';
import Store from "./utils/Store";
import { Provider } from 'react-redux';

function App() {
  const [userName, setUserName] = useState("Aryan Tiwari")
  return (
    <>
      <Provider store={Store}>
        <UserContext.Provider value={{ userName: userName, setUserName }}>
          <Header />
          {/* component which get replaced by the children component  */}
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  )
}

export default App
