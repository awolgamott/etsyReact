import React from 'react'
import Banner from './components/banner'

var DetailsPage = React.createClass({
	componentWillMount: function () {
		var boundUpdater = function(){
			this.setState({
				loaded: true,
				model: this.state.model 
			})
		}.bind(this)
		this.props.model.on('sync', boundUpdater)
	},
	componentWillUnmount: function(){
		this.props.model.off('sync')
	},
	getInitialState: function () {
		return {
			model: this.props.model,
			loaded: false
		}
	},
	render: function(){

		if (this.state.loaded !== true){
			return <div>...loading...</div>
		}

		return (
			<div className="details-page">
			<Banner />
				<h2>{this.state.model.get('title')}</h2>
					<img className="img-responsive thumbnail" src={this.state.model.get('MainImage').url_570xN} />
					<p>{this.state.model.get('description')}</p>
					<button>{'$'}{this.state.model.get('price')}</button>
			</div>

		
			)
	}
})

export default DetailsPage