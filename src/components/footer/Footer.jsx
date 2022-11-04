import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          <a
            href="#"
            style={{ color: 'black' }}
            onMouseEnter={(e) => (e.target.style.color = 'coral')}
            onMouseLeave={(e) => (e.target.style.color = 'black')}
          >
            J & S
          </a>
        </h1>

        <ul className="footer__list">
          <li>
            <a
              href="#about"
              className="footer__link"
              style={{ color: 'black' }}
              onMouseEnter={(e) => (e.target.style.color = 'coral')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              8.19.23
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
