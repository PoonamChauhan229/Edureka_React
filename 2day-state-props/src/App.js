import React, { Component } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import JSON from './component/db.json'
import ProductDisplay from './component/ProductDisplay'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      productData:JSON,
      filteredData:JSON 
    }
  }

  filteredProduct=(keyword)=>{
    let output=this.state.productData.filter((data)=>{
      return data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
    })
    this.setState({
      filteredData:output
    })
  }
  render() {
    return (
      <div>
         <Header userInput={(data)=>{this.filteredProduct(data)}}/>
         <ProductDisplay prodData={this.state.filteredData}/>
     <Footer year="2022" month="September"/>
      </div>


      
    )
  }
}



