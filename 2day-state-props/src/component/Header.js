import React from 'react'
import './Header.css'

export default class Header extends React.Component {
    constructor(){
        super()
        this.state={
            title:"React App",
            keyword:"Your text goes here!!!"
        }
    }
    handleChange=(event)=>{
        // console.log(event.target.value)
        this.setState({
            keyword:event.target.value?event.target.value:"Your text goes heree!!!"             
        })
        // we are calling to pass the data
        this.props.userInput(event.target.value)
    }
  render() {
    return (
     <React.Fragment>
        <header>
           <div className='logo'>{this.state.title}</div>
           <center>
                <input onChange={this.handleChange}/>
                <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
           </center>
        </header>
     </React.Fragment>
    )
  }
}

