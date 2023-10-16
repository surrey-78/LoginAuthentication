import React, { useState } from 'react'

const SignupComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const firstNameHandler = (event) => {
        setFirstName(event.target.value)
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value)
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        console.log(firstName, lastName, email, password)
    }

  return (
    <form onSubmit={formSubmitHandler} >
        <h1>Sign up</h1>

        <div className='mb-3'>
            <label>First Name</label>
            <input 
                type='text'
                className='form-control'
                placeholder='Enter your first name'
                value={firstName}
                onChange={firstNameHandler}
                required
            />
        </div>

        <div className='mb-3'>
            <label>Last Name</label>
            <input
                type='text'
                className='form-control'
                placeholder='Enter your last name'
                value={lastName}
                onChange={lastNameHandler}
                required
            />
        </div>

        <div className='mb-3'>
            <label>Email</label>
            <input
                type='email'
                className='form-control'
                placeholder='Enter your email address'
                value={email}
                onChange={emailHandler}
                required
            />
        </div>

        <div className='mb-3'>
            <label>Password</label>
            <input
                type='password'
                className='form-control'
                placeholder='Enter your password'
                value={password}
                onChange={passwordHandler}
                required
            />
        </div>

        <div className='d-grid'>
            <button type='submit' className='btn btn-primary' >Submit</button>
        </div>

        <p className='forgot-password text-right'>
            Already registered, <a href='/login'>Sign in here?</a>
        </p>

      </form>
  )
}

export default SignupComponent