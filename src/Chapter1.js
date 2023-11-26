import './Chapter1.css'
import { Button } from '@mui/material'
import useSound from 'use-sound'
import { Link } from 'react-router-dom'
import React from 'react'
import startup from './Audio.mp3'
import { useState } from 'react'
export default function Chapter1() {
     const [chosenOption, setChosenOption] = useState(null);

  const handleChoice = (option) => {
    setChosenOption(option);
    handleConsequences(option);
  };

  const handleConsequences = (option) => {
    switch (option) {
      case 'choice1':
        console.log('Consequences for Choice 1');
        break;
      case 'choice2':
        console.log('Consequences for Choice 2');
        break;
      default:
        break;
    }
}
const [play, { pause, isPlaying }] = useSound(startup);
const [playing, setPlaying] = useState(false);

const handlePlay = () => {
  play();
  setPlaying(true);
};

const handlePause = () => {
  pause();
  setPlaying(false);
};

const buttonStyles = {
    padding: '12px 24px',
    fontSize: '18px',
    background: '#feee04',
    color: 'black',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    outline: 'none',
    marginLeft: '1250px',
    marginTop:'400px',
    boxShadow: '0px 2px 5px rgba(255, 255, 255, 0.3)',
    transition: 'background-color 0.2s, transform 0.2s',
  };
    
    return (
    <div className='chapter1bg'>
        <div class="transbox">
           <h2>CHAPTER 1:Beauty's Family</h2> 
                <p >Once upon a time there was a very rich man who lived with his three daughters.  
                    The two older daughters laughed at anyone who did not dress as well as they did.  
                    If the two of them were not resting at home, they were out shopping for as many fine dresses and 
                    hats as they could carry home.  

The youngest daughter, Beauty, loved to read.  “Your nose is always in a book," her two older sisters said.  They laughed.  
"No one will want you! Look at your hair.  You look like a servant girl!”  Beauty did not know why they were so mean.  
But she said nothing.One day, the father got some bad news.<br></br>Continue the story---</p>
<button style={{height:"32px"}} onClick={() => handleChoice('choice1')}>FINANCIAL RUIN</button>
      <button style={{height:"32px",marginLeft:"30px"}} onClick={() => handleChoice('choice3')}>BANKRUPTCY</button><br></br>
      <button style={{height:"32px",marginTop:"10px"}} onClick={() => handleChoice('choice2')}>SHIPWRECKED FINANCES</button><br></br>
      <div>
        {chosenOption && (
            <div>
            {chosenOption === 'choice1' && <p style={{fontSize:"15px"}}> The bank where he had invested all his savings collapsed, leading to a complete financial ruin.</p>}
            {chosenOption === 'choice2' && <p style={{fontSize:"15px"}}>He had spent all of his money on a ship that he sent out to sea for trade. Now he learned the ship was gone! Everything on it was lost.</p>}
            {chosenOption === 'choice3' && <p style={{fontSize:"15px"}}>His business, which was thriving for years, suddenly faced bankruptcy. The wealth he had amassed was now reduced to nothing.</p>}
           <Link to='/Chapter1b'> <button style={{height:"20px"}} >CONTINUE</button></Link>

          </div>
        )}
      </div>
        <br></br>
      </div>
 <div class="pagination">
<Link to='/Chapter2'><Button style={{color:"black" ,height:"30px"}}>- NEXT CHAPTER -</Button></Link></div><br></br><br></br>
 <div class="active">
<Link to ='/'> <Button style={{color:"black",height:"30px"}}>- MAIN PAGE -</Button></Link>
</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button
        onClick={playing ? handlePause : handlePlay}
        style={{ ...buttonStyles }}
        onMouseEnter={() => {
          document.body.style.cursor = 'pointer';
        }}
        onMouseLeave={() => {
          document.body.style.cursor = 'auto';
        }}
      >
        {playing ? 'Pause' : 'Audio'}
      </button>
    </div></div>
  )
}
