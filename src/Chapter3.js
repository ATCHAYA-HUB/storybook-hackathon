import './Chapter3.css'
import { Button } from '@mui/material'
import useSound from 'use-sound'
import { Link } from 'react-router-dom'
import React from 'react'
import startup from './Audio.mp3'
import { useState } from 'react'
export default function Chapter3() {
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
    marginTop:'300px',
    boxShadow: '0px 2px 5px rgba(255, 255, 255, 0.3)',
    transition: 'background-color 0.2s, transform 0.2s',
  };
    
    return (
    <div className='chapter3bg'>
        <div class="transbox3">
           <h2>CHAPTER 3:THE HIDDEN HUMANITY</h2> 
                <p >The next morning the table was laid again, but this time with breakfast.  Again - most odd! - no one was there.  “I suppose I should leave now,” said the father.  

On the way out, he passed a flower garden.  “Ah, I was to bring Beauty a flower!" he remembered.  "I will take just one.”  And he picked a flower for Beauty.

Just then,</p>
<button style={{height:"32px"}} onClick={() => handleChoice('choice1')}>GROWL</button>
      <button style={{height:"32px",marginLeft:"30px"}} onClick={() => handleChoice('choice3')}>ECHO</button>
      <button style={{height:"32px",marginLeft:"30px"}} onClick={() => handleChoice('choice2')}>A LOUD STOMP</button><br></br>
      <br></br>
      <div>
        {chosenOption && (
            <div>
            {chosenOption === 'choice1' && <p style={{fontSize:"15px"}}> the air filled with a menacing growl, a sound that seemed to emanate from the very earth beneath him</p>}
            {chosenOption === 'choice3' && <p style={{fontSize:"15px"}}>a deafening roar shattered the silence, echoing through the garden. "You took my flower!"</p>}
            {chosenOption === 'choice2' && <p style={{fontSize:"15px"}}>a loud stomp came up from behind.</p>}
<p>


Roared a voice - “You took my flower!”

The father spun around.  There before him was an awful, huge monster.  “I… I’m sorry!” he said.  “I didn’t know.”  

"How could you not know?" roared the Beast. “You will pay for this! You will die!”  

The father fell on his knees.  “Please!” he begged.  “Do not kill me! I only picked the rose for one of my daughters.”</p>
        <br></br>
          </div>
        )}
      </div>
      </div>
 <div class="pagination3">
<Link to='/Chapter4'><Button style={{color:"black" ,height:"30px"}}>- NEXT CHAPTER -</Button></Link></div><br></br><br></br>
<div class="pagination3b">
<Link to='/Chapter2'><Button style={{color:"black" ,height:"30px",marginLeft:"-4px",left:"2px"}}>- PREV CHAPTER -</Button></Link></div><br></br><br></br>
 <div class="active3">
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
