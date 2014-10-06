var bgLayer = cc.Layer.extend({
    sprite : null,
    ctor: function() {
        this._super();
        this.sprite = new cc.Sprite(res.bgPNG);
        this.sprite.attr({
            x: 800,
            y: 450,
            scale: 1,
            rotation: 0
        });
        this.addChild(this.sprite);
    }
});

var MainScene = cc.Scene.extend({
	onEnter : function(){
		this._super();
		
        //how Spencer and I both feel right now
		console.log("I hate everything");
		
		//gotta instantiate the layers and then make references to them and add them as children
        this.backgroundLayer = new bgLayer();
        this.addChild(this.backgroundLayer);
		this.newsFeedLayer = new NewsFeedLayer();
		this.addChild(this.newsFeedLayer);
		
		var wid = 335 ;
		//-------------------------
		//Create the Chat windows!!
		//-------------------------
		this.chatWindowLayer1 = new ChatWindowLayer(wid*7/2, merc);
		this.addChild(this.chatWindowLayer1);
		this.chatWindowLayer2 = new ChatWindowLayer(wid*5/2, bern);
		this.addChild(this.chatWindowLayer2);
		this.chatWindowLayer3 = new ChatWindowLayer(wid*3/2, sperncer);
		this.addChild(this.chatWindowLayer3);
		this.chatWindowLayer4 = new ChatWindowLayer(wid/2, dersh);
		this.addChild(this.chatWindowLayer4);
		
	}
});
