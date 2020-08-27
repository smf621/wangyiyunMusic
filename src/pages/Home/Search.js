import React, { Component } from 'react';
import '../../assets/css/search.css'
class Search extends Component {
  constructor() {
    super()
    this.state = {
      hotList: [],
      val: '',
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
    this.setState({
      val: e.target.value
    })
  }
  search(e) {
    //查询歌曲
    console.log(e);
    if (e.keyCode === 13) {
      this.$http.get('/search?keywords=' + this.state.val).then(res => {
        console.log(res);
      })
    }

  }


  render() {
    let { hotList } = this.state
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

        <ul>
          <h3>热门搜索</h3>
          {
            hotList.map((item, index) => {
              return <li key={index} onClick={this.showVal.bind(this, item.first)}>
                {item.first}
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Search;