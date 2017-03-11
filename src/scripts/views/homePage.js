import React from 'react'
import Banner from './components/banner'

var HomePage = React.createClass({
	componentWillMount: function () {
		var boundUpdater = function(){
			this.setState({
				loaded: true,
				collection: this.state.collection 
			})
		}.bind(this)
		this.props.productColl.on('sync', boundUpdater)
	},
	componentWillUnmount: function(){
		this.props.productColl.off('sync')
	},
	getInitialState: function () {
		return {
			collection: this.props.productColl,
			loaded: false
		}
	},
	render: function(){
		if (this.state.loaded !== true){
			return <div>...loading...</div>
		}
		return (
			<div className="home-page">
				<Banner />
				Number of Results: {this.state.collection.models.length}
				<div className="listings">
					{this.state.collection.models.map(function(model){
						return <div className="listing" key={model.get('listing_id')}>
							<a href={`#detail/${model.get('listing_id') }`}>
								<img src={model.get('MainImage').url_170x135} /><br/>
								{model.get('title')}
							</a>
						</div>
					})}
				</div>
			</div>
			)
	}
})

export default HomePage