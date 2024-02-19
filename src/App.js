import React from 'react';
import './cssFiles/app.css';
import {Navbar} from './components';
import {Blog, Footer, Header, Possibility} from './containers';
import './App.css';
import Brand from './components/brand/Brand';
import WhatGPT3 from './containers/skillRevive/WhatGPT3';
import Features from './containers/features/Features';
import CTA from './components/cta/CTA';
import SignupForm from './components/signup/SignupForm';
const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar/>
            <Header/>
        </div >
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <SignupForm/>
        <Footer/>
    </div>
  )
}

export default App