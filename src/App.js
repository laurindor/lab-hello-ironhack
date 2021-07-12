import React from 'react';
import './App.css';
import Items from './components/items';

const ironhackLogo ='/images/ironhack-logo.svg'
const menuTop = '/images/menu-top.svg'
const reactLogo = '/images/react-logo.svg';
const icon1 = '/images/icon1.png';
const icon2 = '/images/icon2.png';
const icon3 = '/images/icon3.png';
const icon4 = '/images/icon4.png';

  
function App() {
  return (
    <div className="App">
			<nav>
				<img src={ironhackLogo} className='App-logo' alt='logo' />
        <img src={menuTop} className='menuTop' alt='menu' />
      </nav>

      <div className = "title" > 
        <h1>Say hello to ReactJS </h1>
          <p> You will learn how to use the most popular frontend library, and become a super Ninja Developer.</p>
           <button>Awesome!</button>
      </div>

      <div className="logoBck">
              <img src={reactLogo} alt="thelogo" />
              <img src={reactLogo} alt="thelogo" />
              <img src={reactLogo} alt="thelogo" />
             
       </div>

       <footer>

        <div><Items Img = "/images/icon1.png" arrIndex = {0} /></div>
        <div><Items Img = "/images/icon2.png" arrIndex = {1} /></div>
        <div><Items Img = "/images/icon3.png" arrIndex = {2} /></div>
        <div><Items Img = "/images/icon4.png" arrIndex = {3} /></div>
        </footer>

      
    

        
		</div>
    
	);
}

export default App;

