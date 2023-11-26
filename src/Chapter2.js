import './Chapter2.css'
import { Button } from '@mui/material'
import useSound from 'use-sound'
import { Link } from 'react-router-dom'
import startup from './Audio.mp3'
import { useState } from 'react'
import React from 'react'

export default function Chapter2() {
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
  
  const buttonStyles2 = {
      padding: '12px 24px',
      fontSize: '18px',
      position:'fixed',
      background: 'rgb(7, 72, 201)',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      outline: 'none',
      marginLeft: '1120px',
      marginTop:'30px',
      float:'right',
      transition: 'background-color 0.2s, transform 0.2s',
    };
    return (
        <div className='colorbg'>
      <div className='chapterbg2'>
        <div class="transbox2">
      <h1 style={{fontFamily:"sans-serif"}}>CHAPTER 2: THE CASTLE</h1>
      <p>The father was on his way home when he thought, “Oh my!  I forgot all about the flower for Beauty!”  
        All at once, the sky turned black.  “Dear, me! A storm is coming!”
A moment later, heavy dark rains fell down hard from the sky.  
Soaking wet, the father saw a </p>
<button style={{height:"32px"}} onClick={() => handleChoice('choice1')}>ILLUMINATION</button>
      <button style={{height:"32px",marginLeft:"30px"}} onClick={() => handleChoice('choice3')}>A GLIMMER</button>
      <button style={{height:"32px",marginLeft:"30px"}} onClick={() => handleChoice('choice2')}>A BLINK OF LIGHT</button><br></br>
      <div>
        {chosenOption && (
            <div>
            {chosenOption === 'choice2' && <p style={{fontSize:"15px"}}>a distant glimmer amidst the darkness, like a lighthouse.</p>}
            {chosenOption === 'choice1' && <p style={{fontSize:"15px"}}>glint of illumination like a lone star in the stormy night sky.</p>}
            {chosenOption === 'choice3' && <p style={{fontSize:"15px"}}>blink of light far away.  </p>}
      <p>
He went closer to the light.  
Maybe it was a place he could stay for the night.  When he got up close, he saw that 
it was a large palace with candles in all its windows.  Very odd, but the front door was open.  
So, the father stepped inside.  “Hello?” he said.  No answer.  
There, before him, was a great feast on a long table.  
“Hello?” he said again.  Still no answer.  He dared not touch any food on the table.  
The father sat down in front of the fire to warm himself.  He waited.  But no one came. 
“I suppose it would be all right if I stayed the night,” said the father.  
Unable to resist the aroma any longer, he took a modest bite from the sumptuous spread. With each chew, 
the flavors told tales of abundance and luxury. Finding a bedroom, he surrendered to fatigue, 
succumbing to a deep slumber as the mysteries of the palace remained shrouded in the silent night. 
He took a quick bite from the feast.  Then he found a bedroom and fell fast asleep.</p>
          </div>
        )}
      </div>
      <br></br>
      </div>
      <div className='pagination2'>
      <Link to='/Chapte1'><Button variant='outlined'>- PREV CHAPTER -</Button></Link>
      <Link to='/'> <Button variant='outlined' style={{marginLeft:"5px"}}>- MAIN PAGE -</Button></Link>
        <Link to='/Chapter3'><Button variant='outlined' style={{marginLeft:"5px"}}>- NEXT CHAPTER -</Button></Link></div>
      <button
        onClick={playing ? handlePause : handlePlay}
        style={{ ...buttonStyles2 }}
        onMouseEnter={() => {
          document.body.style.cursor = 'pointer';
        }}
        onMouseLeave={() => {
          document.body.style.cursor = 'auto';
        }}
      >
        {playing ? 'Pause' : 'Audio'}
      </button>
    </div>
    </div>
    )
}
