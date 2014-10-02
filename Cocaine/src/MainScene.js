var NewsFeedLayer = cc.Layer.extend({
	
});

var TextLogLayer = cc.Layer.extend({

});

var ChatWindowLayer = cc.Layer.extend({

});

var MainScene = cc.Scene.extend({
	onEnter : function(){
		this._super();
		
		console.log("I hate everything");
		
		//gotta instantiate the layers and then make references to them and add them as children
		this.newsFeedLayer = new NewsFeedLayer();
		this.addChild(this.newsFeedLayer);
		this.textLogLayer = new TextLogLayer();
		this.addChild(this.textLogLayer);
		this.chatWindowLayer = new ChatWindowLayer();
		this.addChild(this.chatWindowLayer);
	}
});