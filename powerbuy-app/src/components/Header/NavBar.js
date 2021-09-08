import React from 'react'
import './NavBar.css'
import ButtonComp from '../UI/ButtonComp'

const NavBar = () => {
    return (
        <div className='header'>
            <div className='logo'>LOGO</div>
            <div className='buttonBox'>
                <div>
                    <ButtonComp name={'Log in'} direct={'Login'}/>
                </div>
                <div>
                    <ButtonComp name={'Sign up'} direct={'Signup'}/>
                </div>
            </div>  
        </div>
    )
}


export default NavBar;
