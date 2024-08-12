import React from 'react';
import '../../App.css';
import '../Footer.css';
import { Button } from '../Button';


  export default function SignUp() {
    return (
      <div>
        <h1 className='sign-up'>LIKE és FELIRATKOZÁS</h1>
  
        <div className='footer-container'>
          <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
              Iratkozz fel a hírlevélre további tartalmakért
            </p>
            <p className='footer-subscription-text'>
              Bármikor leiratkozhatsz.
            </p>
            <div className='input-areas'>
              <form>
                <input
                  className='footer-input'
                  name='email'
                  type='email'
                  placeholder='email'
                />
                <Button buttonStyle='btn--outline'>Feliratkozás</Button>
              </form>
            </div>
          </section>
        </div>
      </div>
    );
  }