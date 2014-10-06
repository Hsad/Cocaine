
var NewsFeedLayer = cc.Layer.extend({
	
	//console.log("how many times is this called"),
	sprite : null,
	
	//Constructor. should pass in the windows X Location,
	ctor : function(){
		//initialize the super
		this.scheduleUpdate();
		this._super();
		this.xCent = cc.winSize.width/2;
		this.yCent = cc.winSize.height/2 + 300;
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

		this.feedArray[0] = new NewsFeed(this.xCent, this.yCent, allPeople[0].profilePic);
		this.addChild(this.feedArray[0]);
		console.log("first Name=")
		console.log(allPeople[0].name);


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
			//
			//something that choses an avalible person for a wall post
			//
			console.log("allPeople.lenght = ");
			console.log(allPeople.length);
			randInt = Math.floor(Math.random() * allPeople.length);
			console.log("randInt = ");
			console.log(randInt);

			console.log("profName= ");
			console.log(allPeople[randInt].name);
			this.feedArray[this.feedArray.length] = new NewsFeed(
					this.xCent, this.yCent, allPeople[randInt].profilePic);
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

	ctor : function(xLoc, yLoc, profilePic){
		this._super();
		this.sprite = new cc.Sprite(profilePic);
		//this.sprite = new cc.Sprite(res.feedPNG);
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

