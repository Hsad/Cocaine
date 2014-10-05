var NewsFeedLayer = cc.Layer.extend({
	
	//console.log("how many times is this called"),
	sprite : null,
	
	//Constructor. should pass in the windows X Location,
	ctor : function(){
		//initialize the super
		this._super();
		//-----------------------------
		//Create the chat window sprite
		//-----------------------------
		this.sprite = new cc.Sprite(res.wallFeedPNG);
		this.sprite.attr({
			x: 200,
			y: this.sprite.height,
			scale: 1,
			rotation: 0,
		});
		this.addChild(this.sprite);
		console.log(this.sprite.width);
		console.log("anyonehome?");
		//------------------------------------------------
		// create the sub-layer that is the text Log stack
		//------------------------------------------------
	}
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
		//
		//sprites
		//
		//-----------------------------
		//window sprite
		this.sprite = new cc.Sprite(res.chatCleanPNG);
		this.sprite.attr({
			x: _xSpawn,
			y: this.sprite.height/2 +5,
			scale: 1,
			rotation: 0,
		});
		this.addChild(this.sprite);
		
		//display the persons name whom this chat window belongs
		var templateLabel = new cc.LabelTTF(_person.name, cc.size(350, 0), cc.TEXT_ALIGNMENT_LEFT, "Arial", 24);
        templateLabel.setFontFillColor(cc.color(255,255,255,255));
        templateLabel.x = _xSpawn - this.sprite.width/4-20;
        templateLabel.y = this.sprite.height;
		
        this.addChild(templateLabel);

		//------------------------------------------------
		// create the sub-layer that is the text Log stack
		//------------------------------------------------
		this.textLogLayer = new TextLogLayer();
		this.addChild(this.textLogLayer);
        
        //-----------------------------
        // create the response box
        //-----------------------------
        
        var responseBox = new ResponseHandler(_xSpawn,33,335);
        this.addChild(responseBox);
	}
});

var MainScene = cc.Scene.extend({
	onEnter : function(){
		this._super();
		
        //how Spencer and I both feel right now
		console.log("I hate everything");
		
		//gotta instantiate the layers and then make references to them and add them as children
		this.newsFeedLayer = new NewsFeedLayer();
		this.addChild(this.newsFeedLayer);
		
		var wid = 355 ;
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
