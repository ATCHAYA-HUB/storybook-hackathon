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
      <h1 style={{fontFamily:"sans-serif"}}>CHAPTER 4: THE CURSE</h1>
      <p>"You have daughters?” said the Beast. “Well.  If one of them will come stay here in your place, I will let you go free.  She must stay here forever. 
      When the father got home, Beauty could tell something was wrong.  “What is it, Father?” she said. The father told his girls what the Beast had said. 
      Beauty went to the castle where the Beast lived.At the Beast's palace, the days were long.
      One night, the Beast said, “Beauty, if you will not marry me, what can I do to make you happy?”
      “If you must know,” she said, “it would be to see my father.The next night, the Beast gave Beauty two magical gifts </p>
<button style={{height:"32px"}} onClick={() => handleChoice('choice1')}>MIRROR AND RING</button>
      <button style={{height:"32px",marginLeft:"30px"}} onClick={() => handleChoice('choice2')}>MIRROR AND BRACELET</button>
      <div>
        {chosenOption && (
            <div>
            {chosenOption === 'choice2' && <p style={{fontSize:"15px"}}>- a mirror and a bracelet. “If you want to see your father,” he said, 
      “just ask the magic mirror to take you to him.  When you are ready to come back, turn the bracelet on your finger three times.  Ask the mirror to bring you back here.  
      But please do not be gone for more than one week.  For I will die of grief!” Beauty was glad to agree and went home.Such joy her father felt when he looked up and saw Beauty! 
      After a week, in her dream, the Beast lay sick and dying. At once, she turned the magic bracelet three times.  “Take me back to the Beast!” she said.  In a moment she was sitting 
      next to the poor, sick Beast, who could only gasp for air.</p>}
            {chosenOption === 'choice1' && <p style={{fontSize:"15px"}}>- a mirror and a ring. “If you want to see your father,” he said, 
      “just ask the magic mirror to take you to him.  When you are ready to come back, turn the ring on your finger three times.  Ask the mirror to bring you back here.  
      But please do not be gone for more than one week.  For I will die of grief!” Beauty was glad to agree and went home.Such joy her father felt when he looked up and saw Beauty! 
      After a week, in her dream, the Beast lay sick and dying. At once, she turned the magic ring three times.  “Take me back to the Beast!” she said.  In a moment she was sitting 
      next to the poor, sick Beast, who could only gasp for air.</p>}
          </div>
        )}
      </div>
      <br></br>
      </div>
      <div className='pagination2'>
      <Link to='/Chapte3'><Button variant='outlined'>- PREV CHAPTER -</Button></Link>
      <Link to='/'> <Button variant='outlined' style={{marginLeft:"5px"}}>- MAIN PAGE -</Button></Link>
        <Link to='/Chapter5'><Button variant='outlined' style={{marginLeft:"5px"}}>- NEXT CHAPTER -</Button></Link></div>
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
