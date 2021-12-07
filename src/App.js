
import './App.css'
import React from 'react'
import {Header,Navbar,
       Inspired,Collaboration,
       ShareWithPride,ImageGallery,
       Solo,Team,Company,
       Footer} from './components';


const App = () => {
  return (
    <>
          
            <Navbar/> 
            <Header/>
            <Inspired/>
            <Collaboration/>
            <ShareWithPride/>
            <ImageGallery/>
            <Solo/>
            <Team/>
            <Company/>
            {/* <Business/> */}
            <Footer/>


          
    </>
  )
}

export default App
