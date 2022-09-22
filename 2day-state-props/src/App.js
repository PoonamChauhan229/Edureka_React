import React, { Component } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import JSON from './component/db.json'
import ProductDisplay from './component/ProductDisplay'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      productData:JSON  
    }
  }
  render() {
    return (
      <div>
         <Header/>
         <ProductDisplay prodData={this.state.productData}/>
     <Footer year="2022" month="September"/>
      </div>


      
    )
  }
}



