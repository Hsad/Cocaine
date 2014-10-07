
var NewsFeedLayer = cc.Layer.extend({
	
	//console.log("how many times is this called"),
	sprite : null,
	
	//Constructor. should pass in the windows X Location,
	ctor : function(){
		//initialize the super
		this.scheduleUpdate();
		this._super();
		this.xCent = cc.winSize.width/2 - 127;
		this.yCent = cc.winSize.height/2 + 227;
		//-----------------------------
		//Create the chat window sprite
		//-----------------------------
		this.friendList = new FriendList();
		this.addChild(this.friendList);

		this.feedArray = [];

		this.feedArray[0] = new NewsFeed(this.xCent, this.yCent, allPeople[0]); 
		//this should be random ^^^ so that the same person isn't always first
		this.addChild(this.feedArray[0]);
		//console.log("first Name=")
		//console.log(allPeople[0].name);


		this.timer = 0;
		/*
		if (this.hasChildNodes()) {
			// So, first we check if the object is not empty, if the object has child nodes
			var children = this.childNodes;

			for (var i = 0; i < children.length; i++) {
				// do something with each child as children[i]
				// NOTE: List is live, Adding or removing children will change the list
				//console.log("some thing is working at least");
			}
		}
	*/	
	},
	update: function() {
		if (this.timer > 500){ //the 500 should be a random value
			//
			//something that choses an avalible person for a wall post
			//
			//console.log("allPeople.length = ");
			//console.log(allPeople.length);
			randInt = Math.floor(Math.random() * allPeople.length);
			//console.log("randInt = ");
			//console.log(randInt);

			//console.log("profName= ");
			//console.log(allPeople[randInt].name);
			this.feedArray[this.feedArray.length] = new NewsFeed(
					this.xCent, this.yCent, allPeople[randInt]);
			this.addChild(this.feedArray[this.feedArray.length - 1]); //-1 because the list just got bigger

			var offset = this.feedArray[this.feedArray.length - 1].spriteHeight;
			for (x = 0; x < this.feedArray.length - 1; x++){
				this.feedArray[x].y -= offset;
			}
			//console.log("sir print alot?");
			/*
			if (this.feedArray.length > 10){
				this.feedArray[11].
			}*/
			this.timer = 0;
		}
		this.timer++;
	}
});
var NewsFeed = cc.Layer.extend({
	sprite : null,

	ctor : function(xLoc, yLoc, profile){
		this._super();
		this.spriteHeight = 0;
		//
		//something that figures out the needed size for the wall post, 
		//then lays out the needed background
		//and the extra stuff
		//
		this.topSprite = new cc.Sprite(res.postTopPNG);
		this.topSprite.attr({
			x:  xLoc + 1, //+1 because photoshop keeps crashing.  This is the definition of a hack
			y:  yLoc + 13 + 40,
			scale: 1, 
			rotation: 0,
		});
		this.addChild(this.topSprite);
		this.spriteHeight += 26;
		var postHeight = 4;  //10 is arbitrary, make it enought to cover post image 
		// height * 80 is total post height + a bit more 
		for (x = 0; x < postHeight; x++){
			var postMid = new cc.Sprite(res.postMidPNG);
			postMid.attr({
				x: xLoc,
				y: yLoc - (x * 80),
				scale: 1,
				rotation: 0,
			});
			this.addChild(postMid);
			this.spriteHeight += 80;
		}
		this.sprite = new cc.Sprite(res.postBotPNG);
		this.sprite.attr({
			x: xLoc + 1, //+1 also because PS7 is dieing.  In its defence it is 13 years old 
			y: yLoc - ((postHeight-1)*80) - 15 - 40, //dirty math, take mercy gods of clean code
			scale: 1,
			rotation: 0,
		});
		this.addChild(this.sprite);
		this.spriteHeight += 30;
		this.proSprite = new cc.Sprite(profile.profilePic);
		this.proSprite.attr({
			x: xLoc - 287,
			y: yLoc,
			scale: 1,
			rotation: 0,
		});
		this.addChild(this.proSprite);
		this.nameTxt = new cc.LabelTTF(
				profile.name, "Idolwild", 46, cc.size(240, 56), cc.TEXT_ALIGNMENT_LEFT);
		this.nameTxt.setFontFillColor(new cc.color(59,89,177,255));
		this.nameTxt.x = xLoc-110;
		this.nameTxt.y = yLoc+20;
		this.nameTxt.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
		this.addChild(this.nameTxt);

		
		var text = secret[Math.floor(Math.random()*secret.length)];
		this.Label = new cc.LabelTTF(
				text, "Idolwild", 26, cc.size(240, 56), cc.TEXT_ALIGNMENT_LEFT);
		this.Label.setFontFillColor(new cc.color(127,127,127,255));
		this.Label.x = xLoc-110;
		this.Label.y = yLoc-30;
		this.Label.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
		this.addChild(this.Label);
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

 //untested, just dont delete
var secret = [ //Dash's sooper secret thing that is probably really obvious
	  "just now",
	  "0.00203 milliseconds ago",
	  "literally this instant",
	  "moments ago",
	  "sorry ya Just missed 'em",
	  "just now",
	  "just now",
	  "just now",
	  "just now",
	  "3 days ago",
	  "0.0420 seconds ago",
	  "-3.2 seconds ago",
	  "will have been nearly posted in 2 seconds",
	  "1821 yrs ago",
	  "moments ago",
		"fairly recently",
	  "I don't know, what do I look like? A clock?",
	  "^^ this guy needs to get outside",
	  "just now",
	 "jerst nerw",
	  "help I'm trapped in DerpFerce",
	  "just now",
	  "just now",
	  "just now",
	  "just now",
	  "just now",
		"honestly not paying attention",
		"probably just now",
		"who knows",
		"just now?",
		"just now",
		"joust now!",
		"take a guess",
		"moldy by now",
	  "just now",
	  "just now",
	  "just now",
	  "just now",
	  "just now"
];


