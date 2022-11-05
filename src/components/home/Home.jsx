import React from 'react'
import './home.css'
import Social from './Social'
import Greeting from './Greeting'

const Home = ({ isMobile }) => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Greeting isMobile={isMobile} />
        </div>
      </div>
    </section>
  )
}

export default Home
