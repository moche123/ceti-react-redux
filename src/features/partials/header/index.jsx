import React from "react";
import './header.css'

const Header = ({name='Moisés'}) => {
    return (
        <div className='header'>

            <img className='imgHeader' src="https://ph-files.imgix.net/2fb378d7-0035-4a85-817c-e819d8f5dbaa.png?auto=format&auto=compress&codec=mozjpeg&cs=strip" alt="" />
            <h2>Hi, I'm {name}, a Frontend developer</h2>
        </div>

    )
}

export default Header
