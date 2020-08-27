import React, { Component } from 'react';
import '../../assets/css/recommend.css'
class Recommend extends Component {
  constructor() {
    super()
    this.state = {
      //推荐歌单
      recList: [],
      //最新音乐
      newList: []
    }
  }

  componentDidMount() {
    //推荐歌单
    this.$http.get('/personalized?limit=6').then(res => {
      console.log(res);
      this.setState({
        recList: res.data.result
      })
    })
    //最新音乐
    this.$http.get('/personalized/newsong').then(res => {
      console.log(res);
      this.setState({
        newList: res.data.result
      })
    })
  }

  render() {
    // console.log(this)
    let { recList, newList } = this.state
    return (
      <div >
        <p className="title">推荐歌单</p>
        <ul className="recList">
          {
            recList.map((item, index) => {
              return <li key={item.id}>
                <div>
                  <img src={item.picUrl} alt="" />
                </div>
                <p>{item.name}</p>
              </li>
            })
          }
        </ul>
        <p className="title">最新音乐</p>
        <ul className="newList">
          {
            newList.map((item, index) => {
              return <li key={item.id}>
                <div>
                  <p className="tit">{item.name}</p>
                  <p className="name">
                    {item.song.artists.map(son => {
                      return son.name + ""
                    })}-{item.name}
                  </p>
                </div>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Recommend;