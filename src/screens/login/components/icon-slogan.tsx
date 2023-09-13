import React from 'react'
import logo from "../../../assets/logo.png";

const IconsSlogan = () => {
    return (
        <div className="wrapper text-center px-10">
            <img src={logo} className="h-20 mx-auto mb-2" alt="" />
            <p className="text-2xl mb-4 font-bold italic">CleanMyCar</p>
            <p className="text-lg font-medium">India's first waterless car cleaning company</p>
        </div>
    )
}

export default IconsSlogan