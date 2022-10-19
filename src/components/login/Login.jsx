import React, { useState } from 'react'
const PASSWORD = { VALID: 'wedding' }

export const SignIn = ({ setUser, setPassword }) => {
  const [userInput, setUserInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSubmit = () => {
    if (passwordInput !== PASSWORD.VALID) {
      setUserInput('')
      setPasswordInput('')
      window.alert(' 🤖 wrong password, try again 🤖')
    } else {
      setUser(userInput)
      setPassword(passwordInput)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ margin: '2rem' }}>🔐sign in 🔐</h1>
      <input
        style={{ margin: '1rem' }}
        type="text"
        value={userInput}
        onChange={(e) => {
          console.log(e.target.value)
          setUserInput(e.target.value)
        }}
        placeholder=" your name"
      />
      <input
        style={{ margin: '1rem' }}
        type="password"
        value={passwordInput}
        onChange={(e) => {
          console.log(e.target.value)
          setPasswordInput(e.target.value)
        }}
        placeholder=" password"
      />
      <button
        disabled={!userInput.length || !passwordInput.length}
        onClick={handleSubmit}
        style={{ margin: '1rem', padding: '.5rem', borderRadius: '10px' }}
      >
        {!userInput.length || !passwordInput.length
          ? ' 🥷 ❌ 🥷'
          : '🥳 let me in 🥳'}
      </button>
    </div>
  )
}

export default SignIn
