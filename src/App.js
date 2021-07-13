import React from 'react';
import './App.css';


const ironhackLogo ='/images/ironhack-logo.svg'
const menuTop = '/images/menu-top.svg'
const reactLogo = '/images/react-logo.svg';

  
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


        </footer>

      
    

        
		</div>
    
	);
}

export default App;

