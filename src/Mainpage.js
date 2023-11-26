import './Mainpage.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Mainpage extends Component {
  render() {
    return (
      <div className='mainbg'><div class="text-block">
      <center> <h1>BEAUTY AND THE BEAST</h1> </center><br></br><br></br><br></br><br></br><br></br>
      <center> <h3 style={{backgroundColor:"orange"}}>THANK YOU FOR READING</h3> </center>
      </div><div className="btn-group"><center>
<Link to="/"><button style={{height:"50px",color:"white",width:"200px",fontSize:"20px",backgroundColor:"orange",border:"none",marginTop:"-30px",marginBottom:"48px"}}>-THE END-</button></Link>
</center>
</div></div>
      
    )
  }
}

export default Mainpage
