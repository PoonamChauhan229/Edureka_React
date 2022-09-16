import React from 'react'
import ReactDOM from 'react-dom';
import Header from './component/Header';

export default function App() {
  return (
    <>
    <div>Hi from React</div>
    <Header/>
    </>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))