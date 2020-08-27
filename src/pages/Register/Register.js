import React, { Component } from 'react'


export default class Register extends Component {
  render() {
    return (
      <div className="register">
        <h1>注册页面</h1>
        <input type="text" placeholder="手机号" />
        <input type="text" placeholder="密码" />
        <button>注册</button>
      </div>
    )
  }
}
