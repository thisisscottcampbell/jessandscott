import React from 'react'
import './home.css'

const Greeting = ({ isMobile }) => {
  return (
    <div className="home__data">
      {isMobile && <div className="home__img"></div>}
      <h1 className="home__title">8/19/2023</h1>
      {isMobile && <p>we're getting married (soon)</p>}
      {isMobile && <h5>I'll explain below...</h5>}
      {!isMobile && (
        <>
          <h3 className="home__subtitle">
            Sooo, we're like, getting married and stuff
          </h3>
          <p className="home__description">
            Only not on this particular day. But soon thereafter.
          </p>
          <h3 className="home__subtitle">
            And we want to celebrate with you 🤘
          </h3>
        </>
      )}
    </div>
  )
}

export default Greeting
