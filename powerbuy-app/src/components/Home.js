import React from 'react'
import NavBar from './Header/NavBar'
import ButtonComp from './UI/ButtonComp'
import Card from './UI/CardBox'
import cover from './UI/cover.jpeg'
import Dummy from './UI/Dummy'
import './Home.css'

export const Home = () => {
    return (
        <div className='home'>
           <NavBar />
           <div className='dummy' style={{ backgroundImage: `url(${cover})`}}>
           </div>
           <br/>
           <div className='container'>
               <Card />
           </div>
        </div>
)
}
