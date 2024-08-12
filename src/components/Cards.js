import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Íme autodidakta tanulásom gyakorlásának lépcsői:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='projekt 1'
              label='Adventure'
              path='/project1'
            />
            <CardItem
              src='images/img-7.jpg'
              text='projekt 2'
              label='Luxury'
              path='/project2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='projek t3'
              label='Mystery'
              path='/project3'
            />
            <CardItem
              src='images/img-4.jpg'
              text='project 4'
              label='Adventure'
              path='/project4'
            />
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
