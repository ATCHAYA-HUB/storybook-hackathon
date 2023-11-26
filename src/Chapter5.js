import './Chapter3.css'
import { Button } from '@mui/material'
import useSound from 'use-sound'
import { Link } from 'react-router-dom'
import React from 'react'
import startup from './Audio.mp3'
import { useState } from 'react'
export default function Chapter5() {
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
           <h2>CHAPTER 5:THE ETERNAL LOVE</h2> 
                <p >"You came back!” said the Beast in a thick voice.

“I am sorry that I am late!” said Beauty.  

“I could not bear it that you may not come back to me.  And now, I fear it is too late.”  His eyes closed.

“No!” cried Beauty.  “Do not leave me!”  Just then, she knew in her heart what was true.  “I love you!” she cried out.  “Please come back! I will be your wife.”  Tears rolled down her cheeks.

Just then, the Beast opened his eyes.  “Beauty!” he said.  “You did it!”

In a flash, the Beast was changed to a handsome prince!  Beauty did not know what to think.

“Ah, Beauty!” he said.  And the Beast told her his story.  Years ago when he was a prince, an evil fairy had put a spell on him.  He must stay a beast forever, until a maiden grew to love him when he still looked like a Beast.  
Now she had been the one to break the spell!

And so Beauty and her prince lived happily ever after.</p><p>THE MORAL---</p>
      <button style={{height:"32px",marginLeft:"30px"}} onClick={() => handleChoice('choice3')}>"Eternal love blooms."</button>
      <button style={{height:"32px",marginLeft:"30px"}} onClick={() => handleChoice('choice2')}>"Cursed to cherished."</button><br></br>
<button style={{height:"32px",marginLeft:"90px",marginTop:"10px"}} onClick={() => handleChoice('choice1')}>"Love conquers enchantment."</button><br></br>
      <div>
        {chosenOption && (
            <div>
            {chosenOption === 'choice1' && <p style={{fontSize:"15px"}}> 
"Love conquers enchantment."</p>}
            {chosenOption === 'choice3' && <p style={{fontSize:"15px"}}>"Eternal love blooms."</p>}
            {chosenOption === 'choice2' && <p style={{fontSize:"15px"}}>"Cursed to cherished.".</p>}
        <br></br>
          </div>
        )}
      </div>
      </div>
 <div class="pagination3">
<Link to='/Mainpage'><Button style={{color:"black" ,height:"30px"}}>- NEXT CHAPTER -</Button></Link></div><br></br><br></br>
<div class="pagination3b">
<Link to='/Chapter4'><Button style={{color:"black" ,height:"30px",marginLeft:"-4px",left:"2px"}}>- PREV CHAPTER -</Button></Link></div><br></br><br></br>
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
