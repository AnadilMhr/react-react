import React from 'react';
import './ClientStyles.css';

import adobe from '../../assets/adobe.png'


const Client = () => {
    return (
        <>
      <div className='clients'>
        <h1 className='cl-title'>My <span>Clients</span></h1>
        <p className='cl-des'>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam and trust! </p>
        <div className='cl-imgs'>
        <img src={adobe} alt='client' className='client-img'/>
        <img src={adobe} alt='client' className='client-img'/>
        <img src={adobe} alt='client' className='client-img'/>
        <img src={adobe} alt='client' className='client-img'/>
        </div>
      </div>
     
        </>
    );              
};

export default Client;