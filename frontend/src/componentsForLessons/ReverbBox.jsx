import React, {useState} from 'react';
import './reverbBox.css';
import ExamplePicture from '../assets/Creamers1950s.jpeg'
import DiamondIcon from '../assets/diamond.png'
import HeartIcon from '../assets/heart.png';

const ReverbBox = () => {
  return (
    <>
        <div className='reverb-wrapper'>
            <div className='overflowing-row'>
                <div className='overflower-row__items'>
                    <div className='overflowing-row__items__inner'>
                        <ul className='listing-grid'>
                            <li className='listing-grid__item'>
                                <div className='listing-card'>
                                    <div className='listing-card__thumbnail'>
                                        <div className='image-carousel'></div>
                                    </div>
                                    <div className='listing-card__favorite-button'>
                                        <div className='watch-badge'>
                                            <button className='favorite-button favorite-button--borderless' type='button'>
                                                <span className='icon' aria-label='favorite button'>{HeartIcon}</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='listing-card__header'>
                                        <div className='listing-card__title-block'>
                                            This is the title block
                                        </div>
                                        <div className='listing-card__condition'>Condition goes here</div>
                                        <div className='listing-card__price'>$55</div>
                                        <div className='listing-card__value'><span className='icon' alt="" >{DiamondIcon}</span>  Great Value</div>

                                    </div>

                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='assignment reverb card'>
                <div className='card-body'>
                    <a href='https://www.google.com/search?q=awesome+guitar' className='link'>
                        <img src={ExamplePicture} className='image' alt='Creamers from 1950s'></img>
                    </a>
                    <h5 className='card-title'>Awesome Guitar!!</h5>
                    <p className='card-condition'>Used - poor</p>
                    <p className='price'>$42</p>

                </div>
            </div>
            <div className='attributions attribute1'>
                <a href="https://www.flaticon.com/free-icons/diamond" title="diamond icons">Diamond icons created by prettycons - Flaticon</a>
            </div>
            <div className='attributions attribute2'>

                <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Freepik - Flaticon</a>
            </div>
        </div>
    </>
  )
}

export default ReverbBox