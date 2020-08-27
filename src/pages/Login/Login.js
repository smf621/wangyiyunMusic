import React, { Component } from 'react'


export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <h1>登录页面</h1>
        <input type="text" placeholder="手机号" />
        <input type="text" placeholder="密码"/>
        <button>登录</button>
      </div>
    )
  }
}
