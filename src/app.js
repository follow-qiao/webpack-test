import React from 'react'
import ReactDom from 'react-dom'
import './common/fonticon/iconfont.css'
import a from './a.less'
import b from './b.less'
console.log(a)
console.log(b)
ReactDom.render(
  <div>
    <h1 className={a.name}>hellow world!</h1>
    <div className={b.name}>12312</div>
    <i className="iconfont icon-webpack"></i>
    <img src={require('./common/girl.jpg')} alt=""/>
    <img src={require('./common/timg.jpg')} />
  </div>,
  document.getElementById('root')
)
