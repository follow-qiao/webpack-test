import React from 'react'
import ReactDom from 'react-dom'
import './main.css'
import girl from './girl.jpg'
import timg from './timg.jpg'
ReactDom.render(
  <div>
    <h1>hellow world!</h1>
    <img src={girl} alt=""/>
    <img src={timg} />
  </div>,
  document.getElementById('root')
)
