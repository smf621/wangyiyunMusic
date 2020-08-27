import React, { Component } from 'react';
import '../../assets/css/hot.css'

class Hot extends Component {
  constructor(){
    super()
    this.state = {
      hotList:{},
      tracks:[],
      num:1
    }
  }

  componentDidMount(){
    this.$http.get('/top/list?idx=1').then(res=>{
      console.log(res);
      this.setState({
        hotList:res.data.playlist,
        tracks:res.data.playlist.tracks
      })
    })
  }


  render() {
    let {hotList,tracks,num} = this.state
    return (
      <div className="hot">
        <div className="banner">
          <img src={hotList.coverImgUrl} alt=""/>
        </div>
        <ul>
          {
            tracks.map((item,index)=>{
              return <li key={item.id}>
                <div className="num">{num<10 ? "0"+ num++ :num++}</div>
                <div className="right">
                  <p className="name">
                    {item.name}
                    <span>{item.alia.length ? "("+item.alia+")":""}</span>
                  </p>
                  <p className="dec">{item.ar.map(item=>{
                    return item.name
                  })}-{item.name}</p>
                </div>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Hot;