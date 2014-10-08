var TextLogLayer = cc.Layer.extend({

	ctor : function(_xSpawn, _ySpawn, _width, _height){
		this._super();
		this.bubbleList = [];
        this.x = _xSpawn;
        this.y = _ySpawn;
        //make clipping node
        this.clippingNode = new cc.ClippingNode();
        this.clippingNode.setContentSize(317,275);
        this.clippingNode.setAlphaThreshold(0.05);
		this.addChild(this.clippingNode);
        
		this.stencil = new cc.Sprite(res.chatClipperPNG);
        this.stencil.setVisible(true);
		this.stencil.attr({
			x: 0,
			y: 12,
			scale: 1,
			rotation: 0
		});
        
        this.clippingNode.setStencil(this.stencil);
        //this.addChild(this.stencil);
        
        this.clippingNode.addChild(this.stencil);
        
		
		
		//-------------
		//addBubble()
		//-------------
		this.addBubble = function(_message, _xSpawn, _ySpawn, _isPlayers){
			this.newestBubble = new ChatBubble(_message, _xSpawn, _ySpawn, _isPlayers);
			this.clippingNode.addChild(this.newestBubble);
			
			this.bubbleList.push(this.newestBubble);
			this.pushLogStack();
		}
		//----------------
		//pushLogStack()
		//-----------------
		this.pushLogStack = function(){
			for(i = 0; i < this.bubbleList.length; i++)
			{
				this.bubbleList[i].y += this.newestBubble.height;
			}
		}
	}
	
});

var ChatBubble = cc.Layer.extend({
	
	ctor : function(_message, _xSpawn, _ySpawn, _isPlayers){
		this._super();
		//calculate how many lines tall this bubble is (based on an average of 30 chars a line)
		this.lines = Math.floor(_message.length / 29) + 1;
		console.log("lines: " + this.lines);
		//height keeps track of the height of all the sprites
		this.height = 0;
		//-------------------------------------
		//first you have to make the top sprite
		//-------------------------------------
		_isPlayers ? this.topSprite = new cc.Sprite(res.playerBubbleTopPNG) : this.topSprite = new cc.Sprite(res.otherBubbleTopPNG);
		/*
        this.topSprite.attr({
			x: _xSpawn,
			y: _ySpawn,
			scale: 1,
			rotation: 0
		});
        */
        this.topSprite.y = -130;
		this.height +=this.topSprite.height/2; 			//height keeps track of the height of all the sprites
		this.addChild(this.topSprite);
		//----------------------------------------------------------------------------
		//if there's more than 1 line of text, add a middle sprite for each extra line
		//----------------------------------------------------------------------------
		this.middleSprite = null;
		if(this.lines > 1)
		{
			//only add a new middle sprite base on the number of lines times some constant (3/5)
			for(i = 0; i < Math.floor(this.lines*3/4); i++) {
				_isPlayers ? this.middleSprite = new cc.Sprite(res.playerBubbleMiddlePNG) : this.middleSprite = new cc.Sprite(res.otherBubbleMiddlePNG);
				//now set the middle sprites attributes. i.e. where it is going to spawn
				this.middleSprite.x  = 0
					// the y needs to take into account how many sprite of this bubble are above this one
                this.height += this.middleSprite.height/2; 	
                this.middleSprite.y = -this.height -130;
				this.addChild(this.middleSprite);
				this.height += this.middleSprite.height/2; 			//height keeps track of the height of all the sprites
			}
		}
		//-------------------------
		//Now the bottom sprite too
		//-------------------------
		var bottomSpawn;		//the bottom sprites location needs to be based on how many middle sprites there were
		_isPlayers ? this.bottomSprite = new cc.Sprite(res.playerBubbleBottomPNG) : this.bottomSprite = new cc.Sprite(res.otherBubbleBottomPNG);
        this.height +=this.bottomSprite.height/2; 	
        this.bottomSprite.y = -this.height -130;
		this.height +=this.bottomSprite.height/2; 			//height keeps track of the height of all the sprites
		this.addChild(this.bottomSprite);
		
		//-----------------------------
		//finally create the text label
		//-----------------------------
		this.text = new cc.LabelTTF(_message, "Arial", 14, cc.size(185, 0), cc.TEXT_ALIGNMENT_LEFT);
		this.text.setFontFillColor(cc.color(0,0,0,255));
		if(_isPlayers)
		{
			this.text.x = 30;
			this.text.y =  - (this.lines * 14)/2 + 5 -130;//this is because the text field is still centered so having more lines throws of the ySpawn
		}
		else
		{
			this.text.x =  - 9;
			this.text.y =  - (this.lines * 15)/2 -130;
		}
		this.addChild(this.text);
        this.height += this.topSprite.height/2;
	}
});

var ChatWindowLayer = cc.Layer.extend({
	sprite : null,
	difficulty : 1,
	usedConversations: [],
	currentConvo: null,
	currentModule: 0,			//these both start at -1 because the selectNewConvo function adds 1 to both of these at the beginning of the fn
	currentQ: 0,
	timer: 0,
	maxTime: 0,
	person: null,
	
	//Constructor. should pass in the windows X Location,
	ctor : function(_xSpawn, _person, _difficulty){
		//initialize the super
        this.scheduleUpdate();
		this._super();
        this.jitterTimer = 0;
        this._xSpawn = _xSpawn;
        this.jittering = false;
		this.person = _person
		this.difficulty = _difficulty;
		//-----------------------------
		//sprites
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
		var templateLabel = new cc.LabelTTF(_person.name, "Idolwild", 18, cc.size(335, 0), cc.TEXT_ALIGNMENT_LEFT);
        templateLabel.setFontFillColor(cc.color(255,255,255,255));
        templateLabel.x = _xSpawn + 30;
        templateLabel.y = this.sprite.height - 25;
        this.addChild(templateLabel);

		//------------------------------------------------
		// create the sub-layer that is the text Log stack
		//------------------------------------------------
		this.textLog = new TextLogLayer(_xSpawn,this.sprite.height/2,317,275);
		this.addChild(this.textLog);
        
        this.overlay = new cc.Sprite(res.overlay1PNG);
        this.overlay.attr({
			x: _xSpawn,
			y: this.overlay.height/2,
			scale: 1,
			rotation: 0,
		});
        this.overlay.setVisible(false);
        this.addChild(this.overlay);
        
        //-----------------------------
        // create the response box
        //-----------------------------
        this.responseBox = new ResponseHandler(_xSpawn,33,335);
        this.responseBox.chatbox = this;
        this.addChild(this.responseBox);
		
	},
    update : function() {
		//you need to update the timer
		this.conversationTick();
		
        if (this.jittering) {
            this.overlay.setVisible(true);
            jitter(this, 5, 5);
            this.jitterTimer += .25;
            if (this.jitterTimer > 3) {
                this.jitterTimer += -3;
            }
            if (this.jitterTimer >= 0 && this.jitterTimer < 1) {
                this.sprite.setTexture(res.chat1PNG);
                this.overlay.setTexture(res.overlay1PNG);
            }
            else if (this.jitterTimer >= 1 && this.jitterTimer < 2) {
                this.sprite.setTexture(res.chat2PNG);
                this.overlay.setTexture(res.overlay2PNG);
            }
            else if (this.jitterTimer >= 2 && this.jitterTimer < 3) {
                this.sprite.setTexture(res.chat3PNG);
                this.overlay.setTexture(res.overlay3PNG);
            }
        }
        else {
            jitter(this, 0, 0);
            this.overlay.setVisible(false);
            this.sprite.setTexture(res.chatCleanPNG);
        }
    },
	//-------------------------------------------------------------------------
	//selectNewConvo()---------------------------------------------------------
	//-------------------------------------------------------------------------
	
	//called to change to a new conversation after your current one is finished
	//and also determine how long you'll have to answer this question
	selectNewConvo : function(){
		
		//need to check if you've already used this post @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		
		var possibleConvos = []
		for(var i = 0; i < this.person.conversations.length; i++){
			if(this.person.conversations[i].difficulty == this.difficulty){
				possibleConvos.push(this.person.conversations[i]);
			}
		}
		var ran = Math.floor(Math.random()* possibleConvos.length);
		this.currentConvo = possibleConvos[ran];
		
		//actually print it to the screen, you know this will always by 
		this.textLog.addBubble(this.currentConvo.modules[0][0], this.x, this.y, false);
		
		//update the response handler required text @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		
		this.determineTimer();
	},
	//----------------------------------------------------------------------------------------------
	//updateConvo()    Called when the player submits a response or the timer ticks all the way down
	//----------------------------------------------------------------------------------------------
	updateConvo : function(){
		
		console.log("gotta update convo");
	
		// update Q number by two so you can read the next question and response from the module
		this.currentQ += 2;
		//now test to see if you need to switch modules, because you've gone over 5 which is the number of strings per module
		if(this.currentQ >= 5)
		{
			this.currentModule += 1;	//okay update the module
			this.currentQ = 0;
		}
		if(this.currentConvo.modules[this.currentModule] == null)
		{
			//update the difficulty here please.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		
			//okay so there is no next module in this conversation so just go to the next covo
			this.selectNewConvo()
		}
		else			//okay so you don't need a new conversation, so just add a bubble of the next dialogue
		{
			this.textLog.addBubble(this.currentConvo.modules[this.currentModule][this.currentQ], this.x, this.y, false);
			//update the response handler required text @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
			
			this.determineTimer();
		}
	},
	
	//-------------------------------------------------------------------------------------------------------------
	//conversationToick()       should be called every frame, tick the counter, and advance the module if necessary
	//-------------------------------------------------------------------------------------------------------------
	conversationTick : function(){
		//first check to see if the timer ran out
		if(this.timer <= 0)
		{
			this.updateConvo();
		}
		
		
		if(this.timer <= this.maxTimer/2)
		{
			//draw the is typing bubble@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		}
		//decrement the timer
		this.timer--;
	},
	
	determineTimer: function(){
		//the length of the player's required input string
		this.timer = this.currentConvo.modules[this.currentModule][this.currentQ + 1].length * numOfWindows * 22;
		this.maxTimer = this.timer;
	}
	
});