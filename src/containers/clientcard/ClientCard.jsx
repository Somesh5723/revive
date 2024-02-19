import React from 'react';
import './clientcard.css';
import Feature from '../../components/feature/Feature';
import { Button } from '@chakra-ui/react';
import '../../cssFiles/button.css';

const ClientCard = () => {
  return (
    <div className="clientcard" id="wgpt3">
    <div className='clientcard__task'>Android App Development</div>
    <div className='clientcard__time'>Posted 18 hours ago</div>
    <div className='clientcard__priceandexperience'>
        <div className='clientcard__price'>
            INR 200
        </div>
        <div className='clientcard__experience'>Beginner</div>
    </div>
    <div className='clientcard__description'>
        <div>Description: </div>
        <p>Want a fully resposive android application for a e-commerce website, java,kotlin knowledge is must, flutetr and react native knowledge will be plus</p>
    </div>
    <div className='clientcard__skills'>Android Studio Java Kotlin </div>
    <div className='clientcard__owner'>Sakshi Singh</div>
    <div className='clientcard__button'><Button className='raise'>See more</Button></div>

  </div>
  );
}

export default ClientCard;
