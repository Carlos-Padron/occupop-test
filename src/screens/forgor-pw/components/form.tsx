import React, { useState } from 'react'

import Logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'

interface FormState { email: string }
interface FormErrorState { invalidEmail: boolean }

const Form = () => {

    // Hooks
    const [form, setForm] = useState<FormState>({
        email: '',
    })

    const [formError, setFormError] = useState<FormErrorState>({
        invalidEmail: false,
    })

    // functions
    const formChanged = (input: string, value: string) => {
        const newState = { ...form }

        newState[input as keyof FormState] = value as string

        setForm(newState)
    }

    const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        const newErroState = { invalidEmail: false }


        if (form.email === "") {
            newErroState.invalidEmail = true
            setFormError(newErroState)
            return
        }

        setFormError(newErroState)


        alert('Email sent')

    }
    return (
        <div id="content-wrapper" className="m-auto card bg-white shadow-xl ">
            <div id="form-wrapper" className="card-body flex flex-col justify-center align-middle h-fit">
                <img src={Logo} className='h-auto w-24 ml-auto mr-auto' alt="" />
                <p className="font-bold text-2xl text-center">Forgot password?</p>
                <p className="text-ld text-center">Please enter you email to send you a reset link! ☺️</p>
                <form>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Email</span>
                        </label>
                        <input type="text" placeholder="joe@email.com" className="input input-bordered w-full" onChange={e => { formChanged('email', e.target.value) }} value={form.email} />
                        {formError.invalidEmail && <p className='text-red-500 '>Please enter a valid email</p>}
                    </div>
                </form>
                <Link to='/' className="link link-hover text-right mt-2">Log in</Link>
                <button className="btn btn-primary mt-10" onClick={(e) => submitForm(e)}>Reset password</button>
            </div>
        </div>
    )
}

export default Form