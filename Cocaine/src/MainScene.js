var NewsFeedLayer = cc.Layer.extend({
	
});

var TextLogLayer = cc.Layer.extend({

});

var ChatWindowLayer = cc.Layer.extend({
	sprite : null,
	
	//Constructor. should pass in the windows X Location,
	ctor : function(_xSpawn, _person){
		//initialize the super
		this._super();
		//-----------------------------
		//Create the chat window sprite
		//-----------------------------
		this.sprite = new cc.Sprite(res.chatCleanPNG);
		this.sprite.attr({
			x: _xSpawn,
			y: this.sprite.height/2+5,
			scale: 1,
			rotation: 0,
		});
		this.addChild(this.sprite);
		var templateLabel = new cc.LabelTTF(_person.name, cc.size(350, 0), cc.TEXT_ALIGNMENT_LEFT, "Arial", 12);
        templateLabel.setFontFillColor(cc.color(255,255,255,255));
        templateLabel.x = _xSpawn;
        templateLabel.y = 220;
		console.log(this.sprite.width);
        this.addChild(templateLabel);
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
		
		var wid = 355 ;
		//-------------------------
		//Create the Chat windows!!
		//-------------------------
		this.chatWindowLayer1 = new ChatWindowLayer(wid*7/2, dercterMerc);
		this.addChild(this.chatWindowLayer1);
		this.chatWindowLayer2 = new ChatWindowLayer(wid*5/2, dercterMerc);
		this.addChild(this.chatWindowLayer2);
		this.chatWindowLayer3 = new ChatWindowLayer(wid*3/2, dercterMerc);
		this.addChild(this.chatWindowLayer3);
		this.chatWindowLayer4 = new ChatWindowLayer(wid/2, dercterMerc);
		this.addChild(this.chatWindowLayer4);
	}
});