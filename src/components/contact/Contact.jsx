import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_l0lk0dn',
      'template_ix9g155',
      form.current,
      'F5055NXKzaR8LJOFc',
    )

    window.alert('Message sent!')
    e.target.reset()
  }

  return (
    <section id="contact">
      {/** CONTACT CONTAINER */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        {/** CONTACT HEADER CONTAINER */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '1rem',
            marginRight: '1rem',
          }}
        >
          <h2>Holler!</h2>
          <p>get in touch</p>
        </div>

        {/** FORM CONTAINER */}
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '100%' }}>
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Your name"
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Mail</label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Your email"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">
                  Thoughts/Questions/Concerns
                </label>
                <textarea
                  name="project"
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                className="contact__button"
                style={{
                  padding: '0.5rem',
                  borderRadius: '10px',
                  border: '0.25px solid lightGrey',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'coral')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
