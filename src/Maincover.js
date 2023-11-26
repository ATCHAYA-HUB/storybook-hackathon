import './Maincover.css';
import React, { Component } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export class Mainpage extends Component {
  render() {
    return (
      <div className='mainbg1'><div class="text-block1">
      <center> <h1>BEAUTY AND THE BEAST</h1> </center>
      </div>
      <center><div className="btn-group1">
<Link to="/Chapter1"><Button variant='contained' style={{backgroundColor:"rgb(51, 96, 143)"}}>Chapter 1: Enchanted Castle</Button></Link>
<Link to="/Chapter2"><Button variant='contained' style={{backgroundColor:"rgb(51, 96, 143)"}}>CHAPTER 2: Belle's Bond</Button></Link>
<Link to="/Chapter3"><Button variant='contained' style={{backgroundColor:"rgb(51, 96, 143)"}}>CHAPTER 3: Hidden Humanity</Button></Link>
<Link to="/Chapter4"><Button variant='contained' style={{backgroundColor:"rgb(51, 96, 143)"}}>CHAPTER 4: The Curse</Button></Link>
<Link to="/Chapter5"><Button variant='contained' style={{backgroundColor:"rgb(51, 96, 143)"}}>Chapter 5: Eternal Love</Button></Link>


</div>
</center></div>
      
    )
  }
}

export default Mainpage
