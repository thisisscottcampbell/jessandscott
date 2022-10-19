import React, { useState } from 'react'

const PASSWORD = {
  VALID: 'certified',
}

const isValid = (password) => {
  let isValid = false

  for (const key in PASSWORD) {
    const valid = PASSWORD[key]

    if (password === valid) isValid = true
  }
  return isValid
}

export const SignIn = ({ setUser, setPassword }) => {
  const [userInput, setUserInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSubmit = () => {
    if (!isValid(passwordInput)) {
      setPasswordInput('')
      window.alert(
        ` 🤖 "${passwordInput}" is incorrect. try lower case? learn to spell? 🤖`,
      )
    } else {
      setUser(userInput)
      setPassword(passwordInput)
    }
  }

  const isDisabled = !userInput.length || !passwordInput.length

  const handleKeyPress = (e) =>
    !isDisabled && e.key === 'Enter' && handleSubmit()

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
          setUserInput(e.target.value)
        }}
        placeholder=" name"
        onKeyPress={(e) => handleKeyPress(e)}
      />
      <input
        style={{ margin: '1rem' }}
        type="password"
        value={passwordInput}
        onChange={(e) => {
          setPasswordInput(e.target.value)
        }}
        placeholder=" password"
        onKeyPress={(e) => handleKeyPress(e)}
      />
      <button
        disabled={isDisabled}
        onClick={handleSubmit}
        style={{ margin: '1rem', padding: '.5rem', borderRadius: '10px' }}
      >
        {isDisabled ? ' 🥷 ❌ 🥷' : '🥳 let me in 🥳'}
      </button>
    </div>
  )
}

export default SignIn
