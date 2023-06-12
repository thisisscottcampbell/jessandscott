import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

const Contact = () => {
  const form = useRef()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const canSend = name.length > 0 && email.length > 0 && msg.length > 0

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_l0lk0dn',
      'template_ix9g155',
      form.current,
      'F5055NXKzaR8LJOFc',
    )

    window.alert('Message Sent!')

    setName('')
    setMsg('')
    setEmail('')
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
          <h2>RSVP</h2>
          <p>are you in? are you out?</p>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">E-mail</label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">
                  Your plans for Aug 19th
                </label>
                <textarea
                  name="project"
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Let us know who's coming!"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
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
                  color: !canSend ? 'lightGrey' : 'steelBlue',
                  cursor: !canSend ? 'not-allowed' : 'pointer',
                }}
                disabled={canSend ? false : true}
              >
                {canSend ? 'send message' : 'fill out form'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
