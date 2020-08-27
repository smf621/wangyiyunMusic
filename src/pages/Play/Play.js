import React, { Component } from 'react';
import qs from 'querystring'
import '../../assets/css/play.less'

class Play extends Component {
  constructor(){
    super()
    this.state = {
      picUrl:"" ,//歌曲图片
      bgStyle:{} ,//大盒子的背景样式
      url:"",//歌曲地址
      lyric:'',//歌词
      lrcArr: [], //歌词数组
      timeArr: [], // 时间数组
      ind:0,//默认显示第一句歌词
    }
  }

  componentDidMount(){
    let str = this.props.location.search.slice(1)
    let obj = qs.parse(str)
    let id = obj.id
    // console.log(id);
    //获取歌曲详情
    this.$http.get('song/detail?ids=' + id).then(res=>{
      console.log(res);
      this.setState({
        picUrl:res.data.songs[0].al.picUrl,
        bgStyle:{
          background:`url(${res.data.songs[0].al.picUrl}) no-repeat center center`,
          filter:"blur(20px)",
          
        }
      })
    })
    //获取歌曲地址
    this.$http.get("/song/url?id=" + id).then(res=>{
      this.setState({
        url:res.data.data[0].url
      })
    })
    //获取歌词
    this.$http.get("/lyric?id=" + id).then(res=>{
      this.setState({
        lyric:res.data.lrc.lyric
      },()=>{
        let arr = this.state.lyric.split(/\n/) //空格分隔
        let lrcArr = [] //歌词数组
        let timeArr= [] //时间数组
        arr.forEach(item=>{
          let a = item.split(']')
          if(a[1]){
            lrcArr.push(a[1])
                // [00:00.372
            let str = a[0].slice(1)  //去掉最前面的[
            timeArr.push(this.format(str))
          }
        })
        this.setState({
          lrcArr,
          timeArr
        })
      })
    })
  }

  format(str){
    let b = str.split(':')
    return parseInt(b[0]) * 60 + parseFloat(b[1])
  }

  render() {
    let {picUrl,bgStyle,url,lrcArr,ind} = this.state
    return (
      <div className="play" >
        <div className="bg" style={bgStyle}></div>        
        <div className="changbi"></div>
        <div className="changyuan">
          <div className="img-box">
            <img src={picUrl} alt=""/>
            <i></i>
          </div>
        </div>
        <div className="lyric">
          <ul>
            {
              lrcArr.map((item,index)=>{
                return <li className={index == ind ? "active" :''}>
                  {item}
                </li>
              })
            }
          </ul>
        </div>

        <audio src={url}></audio>

      </div>
    );
  }
}

export default Play;