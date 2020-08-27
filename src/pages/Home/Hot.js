import React, { Component } from 'react';
import '../../assets/css/hot.css'
import BScroll from 'better-scroll'
//需要满足父元素下面只有一个子元素，2.子元素的高度必须大于父元素的高度
//父元素必须overflow：hidden
class Hot extends Component {
  constructor() {
    super()
    this.state = {
      hotList: {},
      tracks: [],
      num: 1
    }
  }

  componentDidMount() {
    this.$http.get('/top/list?idx=1').then(res => {
      console.log(res);
      this.setState({
        hotList: res.data.playlist,
        tracks: res.data.playlist.tracks
      })
    })

    let bs = new BScroll(".hotlist",{

    })

  }

  play(id) {
    console.log(this);
    this.props.history.push('/play?id=' + id)
  }


  render() {
    let { hotList, tracks, num } = this.state
    return (
      <div className="hot">
        <div className="banner">
          <img src={hotList.coverImgUrl} alt="" />
        </div>
        <div className="hotlist">
          <ul>
            {
              tracks.map((item, index) => {
                return <li key={item.id} onClick={this.play.bind(this, item.id)} >
                  <div className="num">{num < 10 ? "0" + num++ : num++}</div>
                  <div className="right">
                    <p className="name">
                      {item.name}
                      <span>{item.alia.length ? "(" + item.alia + ")" : ""}</span>
                    </p>
                    <p className="dec">{item.ar.map(item => {
                      return item.name
                    })}-{item.name}</p>
                  </div>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Hot;