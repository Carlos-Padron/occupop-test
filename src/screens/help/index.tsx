import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Accordion from '../../components/accordion'
import { accordionMockData } from '../../utils/accordionMockData'


const Index = () => {

    const [accordionData, setAccordionData] = useState(accordionMockData)

    const openAccordion = (accordion_id: number) => {

        const newState = accordionData.map(acc_data => {
            if (acc_data.id === accordion_id) {
                return { ...acc_data, isOpen: !acc_data.isOpen }
            }
            return acc_data

        })

        setAccordionData(newState)
    }

    return (
        <div className='w-screen h-screen flex bg-emerald-50'>
            <div id="help-section" className="w-full h-full p-8 flex flex-col ">
                <div id="content-wrapper" className="ml-auto mr-auto mt-10 card bg-white shadow-xl w-8/12 ">
                    <div id="logo-instructions-wrapper" className="card-body flex flex-col justify-center align-middle h-fit">
                        <img src={Logo} className='h-auto w-24 ml-auto mr-auto' alt="" />
                        <p className="font-bold text-2xl text-center">Need some help?</p>
                        <p className="text-ld text-center">Feel free to leave us an email with all the details or try our <a href='https://www.lipsum.com/feed/html' target='_blank' className="link link-success"> live chat</a>!</p>
                        <a className="link link-success text-center" href='mailto:example@email.com' >example@email.com</a>
                    </div>



                    {accordionData.map(elem => {
                        return <Accordion key={elem.id} {...elem} openAccordion={openAccordion} />
                    })}

                </div>
            </div>
        </div>
    )
}

export { Index }