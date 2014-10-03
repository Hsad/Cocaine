var NewsFeedLayer = cc.Layer.extend({
	
});

var TextLogLayer = cc.Layer.extend({

});

var ChatWindowLayer = cc.Layer.extend({
	chatWinSprite : null,
	
	//Constructor. should pass in the windows X Location,
	ctor : function(_xSpawn, _person){
		//initialize the super
		this._super();
		
		//-----------------------------
		//Create the chat window sprite
		//-----------------------------
		this.chatWinSprite = new cc.Sprite(res.chatCleanPNG);
		this.chatWinSprite.attr({
			x: _xSpawn,
			y: 130,
			scale: .5,
			rotation: 0,
		});
		this.addChild(this.chatWinSprite);
		
		//------------------------------------------------
		// create the sub-layer that is the text Log stack
		//------------------------------------------------
		this.textLogLayer = new TextLogLayer();
		this.addChild(this.textLogLayer);
	}
});

var MainScene = cc.Scene.extend({
	onEnter : function(){
		this._super();
		
		console.log("I hate everything");
		
		//gotta instantiate the layers and then make references to them and add them as children
		this.newsFeedLayer = new NewsFeedLayer();
		this.addChild(this.newsFeedLayer);
		
		
		//-------------------------
		//Create the Chat windows!!
		//-------------------------
		this.chatWindowLayer = new ChatWindowLayer(cc.winSize.width-175, dercterMerc);
		this.addChild(this.chatWindowLayer);
		this.chatWindowLayer = new ChatWindowLayer(cc.winSize.width-350, dercterMerc);
		this.addChild(this.chatWindowLayer);
		this.chatWindowLayer = new ChatWindowLayer(cc.winSize.width-525, dercterMerc);
		this.addChild(this.chatWindowLayer);
		this.chatWindowLayer = new ChatWindowLayer(cc.winSize.width-700, dercterMerc);
		this.addChild(this.chatWindowLayer);
	}
});