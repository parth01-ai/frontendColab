import React from 'react'
import NavBar from '../Components/NavBar';
import Main from '../Components/HomePageCompo/Main';
import Features from '../Components/HomePageCompo/Features';
import Footer from '../Components/Footer';

export default function HomePage() {
  return (
    <div>
        {/* <NavBar/> */}
        <Main/>
        <Features/>
        {/* <Footer/> */}
    </div>
  )
}
