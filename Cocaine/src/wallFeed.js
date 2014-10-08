
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

		//this.feedArray[0]; //= new NewsFeed(this.xCent, this.yCent, allPeople[0]); 
		//this should be random ^^^ so that the same person isn't always first
		//this.addChild(this.feedArray[0]);
		//console.log("first Name=")
		//console.log(allPeople[0].name);

		this.contUp = false;
		this.timer = 100000;
		this.tempPostHolder;

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
		if (this.timer > (
				Math.random()*2000)+(Math.random()*2000)+(Math.random()*2000)//Mmm math
			 	|| this.contUp){ //the 500 should be a random value
			if (this.contUp == false){
				this.ammountMoved = 0;
				this.contUp = true; //once started run till completion
				var hasPost = false;
				var randInt;
				while (!hasPost){
					randInt = Math.floor(Math.random() * allPeople.length);
					if (allPeople[randInt].posts.length > 0){
						hasPost = true;
					}
				}
				this.tempPostHolder = new NewsFeed(this.xCent, this.yCent, allPeople[randInt]);
				//this.addChild(this.feedArray[this.feedArray.length - 1]); //-1 because the list just got bigger
				this.offset = this.tempPostHolder.spriteHeight;
			}
			
			for (x = 0; x < this.feedArray.length; x++){
				this.feedArray[x].y -= 12;
				//console.log("moving old posts");
			}
			
			this.ammountMoved += 12;

			if (this.ammountMoved >= this.offset){
				this.contUp = false;
				this.feedArray[this.feedArray.length] = this.tempPostHolder; 
				this.addChild(this.tempPostHolder);
				//id action = [CCActionFadeIn actionWithDuration:0.5];
				//[this.tempPostHolder runAction:action];
				this.timer = 0;
			}
			
			if (this.feedArray.length > 10){
				this.removeChild(this.feedArray.shift());
				//console.log("number of children:");  //I was trying to see if I was truely removing the 
				//console.log(this.hasChildNodes); // child, but I couldnt tell,  seems to work
			}
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
		//
		//all the front stuff first so I can calculate its size
		//then put in the back, 
		//then add the front stuff to the child group
		var postHeight = 2;  //2 is arbitrary, make it enought to cover post image 
		// height * 80 is total post height + a bit more
		//
		//
		//text returns around 100-58-30 characters
		//var text = "this is my post, there are many like it, but this one isv mine";
		var randPost = Math.floor(Math.random()*profile.posts.length);
		//console.log(profile.posts.length);
		//console.log("prof");
		//console.log(randPost);
		//console.log(profile.posts[randPost]);
		//console.log(profile.posts[randPost][0]);
		var text = profile.posts[randPost][0];
    //this is my post, there are many like it, but this one is
		this.postText = new cc.LabelTTF(
				text, "Idolwild", 24, cc.size(640, 620), cc.TEXT_ALIGNMENT_LEFT);
		//console.log("text length:");
		//console.log(text.length);
		this.postText.setFontFillColor(new cc.color(0,0,0,255));
		this.postText.x = xLoc;
		this.postText.y = yLoc-355;
		this.postText.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
		//this.addChild(this.Label);
		//height count
		var lines = (text.length / 50) ;
		postHeight += Math.floor((lines / 3)) ;  //this will need to be tweaked
		// text length / 50 = extra line numbers
		// after 2-3 extra lines, postheight += 1
		// plus somehting to bump images down

		if (profile.posts[randPost].length > 1){
			this.postSprite = new cc.Sprite(profile.posts[randPost][1]);
			this.postSprite.attr({
				x: xLoc,
				y: yLoc - (200 + (lines * 45)),
				scale: 1,
				rotation: 0,
			});
			//console.log("image height: ");
			//console.log(this.postSprite.height);
			//this.addChild(this.postSprite);
			postHeight += Math.floor(this.postSprite.height / 80) +1;
			//add to total height count
			//added image height = sprite.height / 80 =+ postHeight
		}
		//
		//
		//
		//
		//
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
		 
		for (x = 0; x < postHeight; x++){
			var postMid = new cc.Sprite(res.postMidPNG);
			postMid.attr({
				x: xLoc,
				y: yLoc - (x * (80)) ,
				scale: 1,
				rotation: 0,
			});
			this.addChild(postMid);
			this.spriteHeight += 80;
		}
		//console.log("postHeight");
		//console.log(postHeight);
		this.sprite = new cc.Sprite(res.postBotPNG);
		this.sprite.attr({
			x: xLoc + 1, //+1 also because PS7 is dieing.  In its defence it is 13 years old 
			y: yLoc - ((postHeight)*80) - 15 + 40, //dirty math, take mercy gods of clean code
			scale: 1,
			rotation: 0,
		});

		this.addChild(this.sprite);
		this.spriteHeight += 30;
		this.proSprite = new cc.Sprite(profile.profilePic);
		this.proSprite.attr({
			x: xLoc - 287,
			y: yLoc,
			scale: 0.8,
			rotation: 0,
		});
		this.addChild(this.proSprite);
		this.nameTxt = new cc.LabelTTF(
				profile.name, "Idolwild", 46, cc.size(1400, 56), cc.TEXT_ALIGNMENT_LEFT);
		this.nameTxt.setFontFillColor(new cc.color(59,89,177,255));
		this.nameTxt.x = xLoc+470;
		this.nameTxt.y = yLoc+15;
		this.nameTxt.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
		this.addChild(this.nameTxt);

		
		var text = secret[Math.floor(Math.random()*secret.length)];
		this.Label = new cc.LabelTTF(
				text, "Idolwild", 20, cc.size(1400, 56), cc.TEXT_ALIGNMENT_LEFT);
		this.Label.setFontFillColor(new cc.color(127,127,127,255));
		this.Label.x = xLoc+470;
		this.Label.y = yLoc-35;
		this.Label.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
		this.addChild(this.Label);

		//
		//
		//
		this.addChild(this.postText);

		if (profile.posts[randPost].length > 1){
			this.addChild(this.postSprite);
			//add to total height count
		}
		//

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
		//for each friend, randomize list, then runthough and create each
		// image > name > online/off
	}
});

var friendIcon = cc.Layer.extend({
	sprite : null,
	ctor : function(xLoc, yLoc, profile){
		this._super();
    this.sprite = new cc.Sprite(profile.profilePic);
		this.sprite.attr({
			x: xLoc,
			y: yLoc,
			scale: 1,
			rotation: 0,
		});
		this.addChild(this.sprite);
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
		"honestly wasn't paying attention",
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
	  "mentoes ago",
	  "momentum ago",
	  "memento ago",
	  "moments before",
	  "moments ago",
	  "moments ago",
		"soon",
	  "just now"
];


