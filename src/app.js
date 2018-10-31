import React from 'react'
import ReactDom from 'react-dom'
import girl from './common/girl.jpg'
import timg from './common/timg.jpg'
import a from './a.less'
import b from './b.less'
console.log(a)
console.log(b)
ReactDom.render(
  <div>
    <h1 className={a.name}>hellow world!</h1>
    <div className={b.name}>12312</div>
    <img src={girl} alt=""/>
    <img src={timg} />
  </div>,
  document.getElementById('root')
)
