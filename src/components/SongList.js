import React, { Component } from 'react'
import '../assets/css/songlist.css'
import { withRouter } from 'react-router-dom'

class SongList extends Component {
	constructor() {
		super()
		this.state = {

		}
	}

	play(id) {
		console.log(this);
		this.props.history.push('/play?id=' + id)
	}


	render() {
		let { newList } = this.props
		// console.log(this);
		console.log(newList);
		return (
			<div>
				<ul className="newList" >
					{
						newList.map((item, index) => {

							return <li
								key={item.id}
								onClick={this.play.bind(this, item.id)}
							>
								<div>
									<p className="tit">{item.name}</p>
									<p className="name">

										{
											(function () {
												if (item.song) {
													return item.song.artists.map((val, index) => {
														return val.name
													}).join(" / ")
												} else if (item.ar) {
													return item.ar.map((val, index) => {
														return val.name
													}).join(" / ")
												} else {
													return item.artists.map((val, index) => {
														return val.name
													}).join(" / ")
												}
											})()
										}
                     - <span>{item.name}</span>

									</p>
								</div>
							</li>
						})
					}
				</ul>
			</div>
		)
	}
}
export default withRouter(SongList)