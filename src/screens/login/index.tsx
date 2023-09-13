import IconsSlogan from "./components/icon-slogan"
import Form from './components/form'
import { Link } from "react-router-dom"

const Index = () => {
    return (
        <div className='w-screen h-screen flex'>
            <div id="logo-slogan-section" className="bg-primary sm:w-5/12 h-full hidden sm:flex flex-col justify-center align-middle">
                <IconsSlogan></IconsSlogan>
            </div>
            <div id="form-section" className="w-full h-full p-8 flex flex-col ">
                <Link to={'/help'} className="link link-hover ml-auto flex justify-end">Need help?</Link>
                <div id="content-wrapper" className="mt-auto mb-auto">
                    <Form></Form>
                </div>
            </div>
        </div>
    )
}

export { Index }