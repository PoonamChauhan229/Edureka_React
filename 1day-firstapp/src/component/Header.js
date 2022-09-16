import React from 'react'
import './Header.css'

export default function Header() {

    const myStyle={
        header:{
            backgroundColor:"navy",
            textAlign:"center",
            fontSize:"30px"
        },
        logo:{
            backgroundColor:"yellow",
            fontSize:"25px"
        }

    }
  return (
    <React.Fragment>
        <header style={myStyle.header}>
            <div style={{color:'red'}}>React App</div>
            <center>
                <input/>
                <div style={{color:'pink',fontSize:"30px"}}>User Text Here</div>
                <div style={myStyle.logo}>Hello Logo</div>
            </center>
            <div className='external'>Hi, Connecting External CSS</div>
        </header>
    </React.Fragment>
  )
}
