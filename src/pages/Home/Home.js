import React, { Component } from 'react';
import MapRoute from '../../routes/MapRoute';
import { NavLink } from 'react-router-dom';
import '../../assets/css/home.css'

class Home extends Component {

  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    // console.log(this);
    return (
      <div className="home">
        <header>
          <div className="header"></div>
          <div className="nav">
            <NavLink to="/home/recommend">推荐音乐</NavLink>
            <NavLink to="/home/hot">热歌榜</NavLink>
            <NavLink to="/home/search">搜索</NavLink>
          </div>
        </header>

        <div className="main">
          <MapRoute routes={this.props.routes} />
        </div>

      </div>
    );
  }
}

export default Home;