import React, { Component } from 'react';
import '../../assets/css/search.css'
import SongList from '../../components/SongList'
class Search extends Component {
  constructor() {
    super()
    this.state = {
      hotList: [],
      newList:[],
      val: '',
      flag: true,
    }
  }
  componentDidMount() {
    //热搜列表
    this.$http.get('/search/hot').then(res => {
      console.log(res);
      this.setState({
        hotList: res.data.result.hots
      })
    })

  }
  showVal(val) {
    this.setState({
      val
    })
  }
  changVal(e) {
    if(e.target.value){
      this.setState({
        val: e.target.value,
        flag: false
      })
    }else{
      this.setState({
        val: e.target.value,
        flag: true
      })
    }

  }
  search(e) {
    //查询歌曲
    // console.log(e);
    if (e.keyCode == 13) {
      this.$http.get('/search?keywords=' + this.state.val).then(res => {
        console.log(res);
        this.setState({
          newList:res.data.result.songs
        })
      })
    }
  }


  render() {
    let { hotList,flag,newList } = this.state
    return (
      <div className="search">
        <div className="seainp">
          <input type="text"
            value={this.state.val}
            onChange={this.changVal.bind(this)}
            onKeyDown={this.search.bind(this)}
            placeholder="搜索歌曲、歌手、专辑"
          />
        </div>

        <div>
          {flag && <ul className="hot">
             <h3>热门搜索</h3>
            {
              hotList.map((item, index) => {
                return <li key={index} onClick={this.showVal.bind(this, item.first)}>
                  {item.first}
                </li>
              })
            }
          </ul>}
           <SongList newList={newList}/>
        
        </div>
      </div>
    );
  }
}

export default Search;