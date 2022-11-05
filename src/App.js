import React, { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import AboutTheDay from './components/about_the_day/AboutTheDay'
import Details from './components/details/Details'
import AboutUs from './components/about_us/AboutUs'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import SignIn from './components/login/Login'

const App = () => {
  const [password, setPassword] = useState(null)
  const is_auth = localStorage.getItem('is_auth')

  const [isMobile, setIsMobile] = useState(false)

  if (is_auth || password)
    return (
      <>
        <Header isMobile={isMobile} />

        <main className="main">
          {/**Greeting/Top of page */}
          <Home setIsMobile={setIsMobile} />

          {/* Our story */}
          <AboutUs />

          {/* Overview of the day */}
          <AboutTheDay />

          {/* Details of the day */}
          <Details />

          <Contact />
        </main>

        <Footer />
        <ScrollUp />
      </>
    )

  return <SignIn setPassword={setPassword} />
}

export default App
