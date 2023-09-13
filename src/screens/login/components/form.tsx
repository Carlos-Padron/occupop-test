import { useState } from 'react'
import { Link } from 'react-router-dom'


interface FormState { email: string, password: string }
interface FormErrorState { invalidEmail: boolean, invalidPassword: boolean }

const Form = () => {

    // Hooks
    const [form, setForm] = useState<FormState>({
        email: '',
        password: '',
    })

    const [formError, setFormError] = useState<FormErrorState>({
        invalidEmail: false,
        invalidPassword: false,
    })


    // functions
    const formChanged = (input: string, value: string) => {
        const newState = { ...form }

        newState[input as keyof FormState] = value as string

        setForm(newState)
    }

    const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        const newErroState = { invalidEmail: false, invalidPassword: false }

        if (form.email === "" && form.password === "") {

            newErroState.invalidEmail = true
            newErroState.invalidPassword = true
            setFormError(newErroState)
            return
        }
        if (form.email === "") {
            newErroState.invalidEmail = true
            setFormError(newErroState)
            return
        }

        if (form.password === "") {
            newErroState.invalidPassword = true
            setFormError(newErroState)
            return
        }


        alert('Invalid credentials')

    }


    return (
        <div id="form-wrapper" className="flex flex-col justify-center align-middle m-10 sm:m-10 md:m-14 lg:m-40 h-fit">
            <p className="font-bold text-2xl text-center">Log in</p>
            <form>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Email</span>
                    </label>
                    <input type="text" placeholder="joe@email.com" className="input input-bordered w-full" onChange={e => { formChanged('email', e.target.value) }} value={form.email} />
                    {formError.invalidEmail && <p className='text-red-500 '>Please enter a valid email</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Password</span>
                    </label>
                    <input type="password" placeholder="Enter your password" className="input input-bordered w-full" onChange={e => { formChanged('password', e.target.value) }} value={form.password} />
                    {formError.invalidPassword && <p className='text-red-500 '>Please enter your password</p>}
                </div>
            </form>
            <Link to={'/forgot-password'} className="link link-hover text-right mt-2">Forgot password?</Link>
            <button className="btn btn-primary mt-10" onClick={(e) => submitForm(e)}>Login</button>
        </div>
    )
}

export default Form