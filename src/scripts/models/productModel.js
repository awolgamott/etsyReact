import Backbone from 'backbone'

export var EtsyCollection = Backbone.Collection.extend({
	url: "https://openapi.etsy.com/v2/listings/active.js",
	_key: "ayhxghvva4um3zjemhg60emb",
	parse: function(apiResponse) {
		return apiResponse.results
	}
})

export var EtsyModel = Backbone.Model.extend({
	parse: function(apiResponse){
		return apiResponse.results[0]
	}
})