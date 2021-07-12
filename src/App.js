import React from 'react';
import './App.css';

const icon1 = '/images/icon1.png';
const icon2 = '/images/icon2.png';
const icon3 = '/images/icon3.png';
const icon4 = '/images/icon4.png';

const ironhackLogo ='/images/ironhack-logo.svg'
const menuTop = '/images/menu-top.svg'
const reactLogo = '/images/react-logo.svg'

function App() {
    return <div className="App">

            <nav>
				<img src={ironhackLogo} alt='ironhackLogo' />
                <img src={menuTop} alt='menuTop' />
            </nav>



    </div>;
  }
   
  export default App;