import React from 'react'
import './home.css'
import Social from './Social'
import Greeting from './Greeting'

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Greeting />
        </div>
      </div>
    </section>
  )
}

export default Home
