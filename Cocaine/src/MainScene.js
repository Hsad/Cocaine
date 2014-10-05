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

var NewsFeedLayer = cc.Layer.extend({
	
	//console.log("how many times is this called"),
	sprite : null,
	
	//Constructor. should pass in the windows X Location,
	ctor : function(){
		//initialize the super
		this.scheduleUpdate();
		this._super();
		this.xCent = cc.winSize.width/2;
		this.yCent = cc.winSize.height/2;
		//-----------------------------
		//Create the chat window sprite
		//-----------------------------
		this.sprite = new cc.Sprite(res.wallFeedPNG);
		this.sprite.attr({
			x: this.xCent,
			y: this.yCent,
			scale: 1,
			rotation: 0
		});
		this.addChild(this.sprite);;
		//------------------------------------------------
		// create the sub-layer that is the text Log stack
		//------------------------------------------------
		this.friendList = new FriendList();
		this.addChild(this.friendList);

		this.feedArray = [];

		this.feedArray[0] = new NewsFeed(this.xCent, this.yCent);
		this.addChild(this.feedArray[0]);


		this.timer = 0;
		/*
		if (this.hasChildNodes()) {
			// So, first we check if the object is not empty, if the object has child nodes
			var children = this.childNodes;

			for (var i = 0; i < children.length; i++) {
				// do something with each child as children[i]
				// NOTE: List is live, Adding or removing children will change the list
				console.log("some thing is working at least");
			}
		}
	*/	
	},
	update: function() {
		if (this.timer > 500){ //the 500 should be a random value
			this.feedArray[this.feedArray.length] = new NewsFeed(this.xCent, this.yCent);
			this.addChild(this.feedArray[this.feedArray.length - 1]); //-1 becasue the list just got bigger

			var offset = this.feedArray[this.feedArray.length - 1].spriteHeight;
			for (x = 0; x < this.feedArray.length - 1; x++){
				this.feedArray[x].sprite.y -= offset;
			}
			console.log("sir print alot?");
			this.timer = 0;
		}
		this.timer++;
	}
});

var NewsFeed = cc.Layer.extend({
	sprite : null,

	ctor : function(xLoc, yLoc){
		this._super();

		this.sprite = new cc.Sprite(res.feedPNG);
		this.sprite.attr({
			x: xLoc,
			y: yLoc,
			scale: 1,
			rotation: 0,
		});
		this.addChild(this.sprite);
		this.spriteHeight = this.sprite.height;
	}
});

var FriendList = cc.Layer.extend({
	sprite : null,
	
	ctor : function(){
		this._super();

		this.sprite = new cc.Sprite(res.friendListPNG);
		this.sprite.attr({
			x: cc.winSize.width - this.sprite.width/2,
			y: cc.winSize.height/2,
			scale: 1,
			rotation: 0,
		});
		this.addChild(this.sprite);
		//console.log("Oh hi");
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
			y: this.sprite.height/2,
			scale: 1,
			rotation: 0,
		});

		this.addChild(this.sprite);

		var templateLabel = new cc.LabelTTF(_person.name, "Arial", 16, cc.size(335, 0), cc.TEXT_ALIGNMENT_LEFT);
        templateLabel.setFontFillColor(cc.color(255,255,255,255));
        templateLabel.x = _xSpawn + 30;
        templateLabel.y = this.sprite.height - 25;
		
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
        this.backgroundLayer = new bgLayer();
        this.addChild(this.backgroundLayer);
		this.newsFeedLayer = new NewsFeedLayer();
		this.addChild(this.newsFeedLayer);
		
		var wid = 335 ;
		//-------------------------
		//Create the Chat windows!!
		//-------------------------
		this.chatWindowLayer1 = new ChatWindowLayer(wid*7/2, mercDersterferner);
		this.addChild(this.chatWindowLayer1);
		
		this.chatWindowLayer2 = new ChatWindowLayer(wid*5/2, bernCherng);
		this.addChild(this.chatWindowLayer2);
		this.chatWindowLayer3 = new ChatWindowLayer(wid*3/2, sperncer);
		this.addChild(this.chatWindowLayer3);
		this.chatWindowLayer4 = new ChatWindowLayer(wid/2, dersh);
		this.addChild(this.chatWindowLayer4);
		
	}
});
