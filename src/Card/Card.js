import React from 'react';
import './Card.scss';
import mainImg from './Images/image-equilibrium.jpg';
import avatar from './Images/image-avatar.png';
import ethLogo from './Images/icon-ethereum.svg';
import clock from './Images/icon-clock.svg';
import eye from './Images/icon-view.svg';

const Card = () => {


    return (
        <main className='card'>
            <div className='img-container'>
                <img src={mainImg} 
                alt='' 
                aria-hidden='true' 
                className='img-main'/>
                <img src={eye} alt='' aria-hidden='true' className='eye'/>
            </div>
            <h1>Equilibrium #3429</h1>
            <p>
                Our Equilibrium collection 
                promotes balance and calm.
            </p>
            <div className='nft-info'>
                <p className='eth'>
                    <img src={ethLogo} alt='' aria-hidden='true' />0.041 ETH
                </p>
                <p className='time'>
                    <img src={clock} alt='' aria-hidden='true' />3 days left
                </p>
            </div>
            <div className='line' />
            <div className='user'>
                <div>
                    <img src={avatar} alt='' aria-hidden='true' ></img>
                </div>
                <p>Creation of <span>Jules Wyvern</span></p>
            </div>
        </main>
    );
}
 
export default Card;