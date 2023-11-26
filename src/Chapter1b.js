import './Chapter1.css'
import { Button } from '@mui/material'
import useSound from 'use-sound'
import { Link } from 'react-router-dom'
import React from 'react'
import startup from './Audio.mp3'
import { useState } from 'react'
export default function Chapter1b() {
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
                <p > All at once, the rich father became as poor as poor could be.  

The family could no longer stay in their big house.    
“My daughters!” said the happy father. “I am going to town.  Tell me what fine gift I can bring back for you.”

“Bring me the best dress from the best shop in town,” said the oldest sister.

“I want one just like it,” said the middle sister.

“And you, Beauty?” he said.

“All I want, Father,” she said,<br></br> </p>
<button style={{height:"32px"}} onClick={() => handleChoice('choice1')}>ROSE</button>
      <button style={{height:"32px",marginLeft:"30px"}} onClick={() => handleChoice('choice2')}>ORCHID</button>
      <button style={{height:"32px",marginLeft:"30px"}} onClick={() => handleChoice('choice3')}>LILAC</button><br></br>
      <div>
        {chosenOption && (
            <div>
            {chosenOption === 'choice1' && <p style={{fontSize:"15px"}}>“is a rose.”

“Can you believe her?” said the eldest sister.
Ezoic

“What a fool!” said the middle sister.  And they both laughed.

“Girls!” said the father.  “If that is what Beauty wants, that is what I will bring for her.”</p>}
            {chosenOption === 'choice2' && <p style={{fontSize:"15px"}}>“is a orchid.”

“Can you believe her?” said the eldest sister.
Ezoic

“What a fool!” said the middle sister.  And they both laughed.

“Girls!” said the father.  “If that is what Beauty wants, that is what I will bring for her.”</p>}
            {chosenOption === 'choice3' && <p style={{fontSize:"15px"}}>“is a lilac.”

“Can you believe her?” said the eldest sister.
Ezoic

“What a fool!” said the middle sister.  And they both laughed.

“Girls!” said the father.  “If that is what Beauty wants, that is what I will bring for her.”</p>}
<center><p>-CHAPTER ONE ENDS-</p></center>
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
