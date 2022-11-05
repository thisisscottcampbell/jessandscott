import React from 'react'
import './home.css'
import Social from './Social'
import Greeting from './Greeting'

const getDeviceType = () => {
  const ua = navigator.userAgent
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet'
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua,
    )
  ) {
    return 'mobile'
  }
  return 'desktop'
}

const Home = ({ setIsMobile }) => {
  const deviceType = getDeviceType()
  const isMobile = deviceType == 'mobile' ? true : false
  setIsMobile(isMobile)
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          {!isMobile && <div className="home__img"></div>}

          <Greeting isMobile={isMobile} />
        </div>
      </div>
    </section>
  )
}

export default Home
