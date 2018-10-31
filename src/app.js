import React from 'react'
import ReactDom from 'react-dom'
import './main.css'
import girl from './common/girl.jpg'
import timg from './common/timg.jpg'
import a from './a.css'
import b from './b.css'
console.log(a)
console.log(b)
ReactDom.render(
  <div>
    <h1 class={a.name}>hellow world!</h1>
    <div class={b.name}>12312</div>
    <img src={girl} alt=""/>
    <img src={timg} />
  </div>,
  document.getElementById('root')
)
