import React from 'react';
import '../../App.css';
import './Intro.css'; // Custom styles for the Intro component

export default function Intro() {
  return (
    <div>
      <h1 className='services'>RÓLAM</h1>
        <div className='intro-section'>
      <div className='intro'>
        <div className='intro__content'>
          <img 
            src='/images/me.jpg' 
            alt='Your Name' 
            className='intro__photo' 
          />
          <div className='intro__text'>
            <p>
              <strong>Helló!</strong> Üdv a portfólió oldalamon. Magamról annyit, hogy közgazdász végzettséggel a zsebemben dolgoztam több multinacionális cégnél értékesítés és marketing területen. A Volvo Construction Equipment magyar leányvállalatánál a weboldalak kezelésénél pillanthattam bele először, hogy mennyire izgalmas dolgokat tartogathat ez a terület.
            </p>
            <p>
              Önszorgalomból kezdtem ezzel foglalkozni szabadidőmben, miközben született 3 cuki gyerekem. Jelenleg itthon vagyok a legkisebbel, és napi 3-4 órában tudok HTML, CSS, JavaScript, és React kezdő szinten munkát vállalni. A lelkesedésem töretlen. Dolgozzunk együtt!
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
