import React from 'react'
import { Button } from '@chakra-ui/react';
import '../../cssFiles/button.css';
import './freelancercard.css';
const FreelancerCard = () => {
    return (
        <div className="freelancercard" id="wgpt3">
        <div className='freelancercard__task'>Android Developer</div>
        <div className='freelancercard__time'>Sample work drive link</div>
        <div className='freelancercard__priceandexperience'>
            <div className='freelancercard__price'>
                INR 200
            </div>
            <div className='freelancercard__experience'>Beginner</div>
        </div>
        <div className='freelancercard__description'>
            <div>Description: </div>
            <p> An experinced android developer with knowledge of backend</p>
        </div>
        <div className='freelancercard__skills'>Android Studio Java Kotlin </div>
        <div className='freelancercard__owner'>Sakshi Singh</div>
        <div className='freelancercard__button'><Button className='raise'>See more</Button></div>
    
      </div>
      );
}

export default FreelancerCard