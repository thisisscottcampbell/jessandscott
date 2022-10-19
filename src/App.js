import React, { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import AboutUs from './components/about_us/AboutUs'
import Work from './components/Portfolio/Work'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import SignIn from './components/login/Login'

const App = () => {
  const [user, setUser] = useState(null)
  const [password, setPassword] = useState(null)

  if (password)
    return (
      <>
        <Header />

        <main className="main">
          <Home user={user} />
          {/* About Us */}
          <AboutUs />
          {/* Overview of the day */}
          <About />
          {/* <Skills /> */}
          {/* Details of the day */}
          <Services />
          {/* <Work /> */}
          <Testimonials />
          <Contact />
        </main>

        <Footer />
        <ScrollUp />
      </>
    )

  return <SignIn setUser={setUser} setPassword={setPassword} />
}

export default App
