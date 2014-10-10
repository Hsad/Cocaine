var gameOver = false;
var gameOverScreenUp = false;
var newConvoTime = false;

var TextLogLayer = cc.Layer.extend({

	ctor : function(_xSpawn, _ySpawn, _width, _height, _parent){
		this._super();
		this.bubbleList = [];
        this.x = _xSpawn;
        this.y = _ySpawn;
        this.chatbox = _parent;
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
			this.newestBubble = new ChatBubble(_message, _xSpawn, _ySpawn, _isPlayers, this);
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
	
	ctor : function(_message, _xSpawn, _ySpawn, _isPlayers, _parent){
		this._super();
		//calculate how many lines tall this bubble is (based on an average of 30 chars a line)
		this.lines = Math.floor(_message.length / 29) + 1;
		console.log("lines: " + this.lines);
		//height keeps track of the height of all the sprites
		this.height = 0;
        this.textLog = _parent;
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
		
        //-------------------------
        //Now the profile picture!
        //-------------------------
        if (!_isPlayers) {
            this.proPic = new cc.Sprite(this.textLog.chatbox.person.profilePic);
            this.proPic.scale = .4;
            this.proPic.x = -137;
            this.proPic.y = -135;
            this.addChild(this.proPic);
        }
        
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
	usedConvos: [],
	currentConvo: null,
	currentModule: 0,			//these both start at -1 because the selectNewConvo function adds 1 to both of these at the beginning of the fn
	currentQ: 0,
	timer: 100,
	maxTimer: 100,
	person: null,
    grittiness: 0,
	
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
		var templateLabel = new cc.LabelTTF(_person.name, "Arial", 18, cc.size(335, 0), cc.TEXT_ALIGNMENT_LEFT);
        templateLabel.setFontFillColor(cc.color(255,255,255,255));
        templateLabel.x = _xSpawn + 30;
        templateLabel.y = this.sprite.height - 25;
        this.addChild(templateLabel);
        
        //little green dot
        this.greenDot = new cc.Sprite(res.littleGreenDotPNG);
        this.greenDot.x = _xSpawn -148;
        this.greenDot.y = this.sprite.height -25;
        this.addChild(this.greenDot);

		//------------------------------------------------
		// create the sub-layer that is the text Log stack
		//------------------------------------------------
		this.textLog = new TextLogLayer(_xSpawn,this.sprite.height/2,317,275,this);
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
		
        if (this.grittiness > 0) {
            this.jittering = true;
        }
        else {
            this.jittering = false;
        }
        if (this.grittiness > 2) {
            this.overlay.setVisible(true);
        }
        else {
            this.overlay.setVisible(false);
        }
        if (this.jittering) {
            jitter(this, this.grittiness, this.grittiness);
            this.jitterTimer += .25*this.grittiness;
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
            this.sprite.setTexture(res.chatCleanPNG);
        }
    },
	//-------------------------------------------------------------------------
	//selectNewConvo()---------------------------------------------------------
	//-------------------------------------------------------------------------
	
	//called to change to a new conversation after your current one is finished
	//and also determine how long you'll have to answer this question
	selectNewConvo : function(){
		this.currentModule = 0;
        this.currentQ = 0;
        this.grittiness = 0;
		//need to check if you've already used this post @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		
		var possibleConvos = []
		for(var i = 0; i < this.person.conversations.length; i++){
            console.log(this.person.conversations[i]);
			if(this.person.conversations[i].difficulty == this.difficulty){
                console.log(this.person.conversations[i]);
				possibleConvos.push(this.person.conversations[i]);
			}
		}
		var ran = Math.floor(Math.random()* possibleConvos.length);
		console.log("this is ran:" + ran);
		this.currentConvo = possibleConvos[ran];
		
		//actually print it to the screen, you know this will always by 
		this.textLog.addBubble(this.currentConvo.modules[0][0], this.x, this.y, false);
		
		//update the response handler required text
		this.responseBox.requiredResponse = this.currentConvo.modules[0][1];
        this.responseBox.templateLabel.setString(this.currentConvo.modules[0][1]);
        
		this.determineTimer(true);
		
		//add this new convo to usedconvos
		this.usedConvos.push(this.currentConvo);
	},
	//----------------------------------------------------------------------------------------------
	//updateConvo()    Called when the player submits a response or the timer ticks all the way down
	//----------------------------------------------------------------------------------------------
	updateConvo : function(_onTimer){
		
        if (_onTimer) {
            if (newConvoTime) {
				this.updateDifficulty();
            
                //okay so there is no next module in this conversation so just go to the next convo
                this.selectNewConvo()
                newConvoTime = false;
            }
            else {
                // update Q number by two so you can read the next question and response from the module
                this.currentQ += 2;
                if (this.grittiness == -1) {
                    this.grittiness = 0;
                }
                if (this.grittiness == 1) {
                    this.grittiness = 2;
                }
                //now test to see if you need to switch modules, because you've gone over 5 which is the number of strings per module

                this.textLog.addBubble(this.currentConvo.modules[this.currentModule][this.currentQ], this.x, this.y, false);
                //update the response handler required text
                if (this.currentQ != 4) {
                    this.responseBox.requiredResponse = this.currentConvo.modules[this.currentModule][this.currentQ + 1];
                    this.responseBox.templateLabel.setString(this.currentConvo.modules[this.currentModule][this.currentQ + 1]);
                    this.determineTimer(true);
                }
                else {
                    //throw up the game over layer
                    gameOver = true;
                    this.timer = 210;
                    this.responseBox.requiredResponse = " ";
                    this.responseBox.templateLabel.setString(" ");
                }
            }
                
        }
        //player entered a bubble
        else {
            this.currentModule += 1;	//okay update the module
            this.currentQ = -2;
            this.grittiness = -1;
            this.determineTimer(false);
        
            if(this.currentConvo.modules.length > this.currentModule + 1)
            {
                //this.currentModule += -1;
                newConvoTime = true;
            }
        }
	},
	
	//-------------------------------------------------------------------------------------------------------------
	//conversationToick()       should be called every frame, tick the counter, and advance the module if necessary
	//-------------------------------------------------------------------------------------------------------------
	conversationTick : function(){
        if (!gameOver) {
            //first check to see if the timer ran out
            if(this.timer <= 0)
            {
                this.updateConvo(true);
            }
            
            
            if(this.timer <= this.maxTimer/2)
            {
                //draw the is typing bubble@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                
                //up the grittiness
                if (this.grittiness == 0) {
                    this.grittiness += 1
                }
                if (this.grittiness == 2) {
                    this.grittiness += 1
                }
            }
        }
        else {
            if (this.timer <= 0) {
                this.parent.addChild(new gameOverLayer());
                gameOverScreenUp = true;
                this.timer = 1;
            }
        }
        //decrement the timer
        if (!gameOverScreenUp) {
            this.timer--;
        }

	},
	
	determineTimer: function(_isPlayers){
		//the length of the player's required input string
        if (_isPlayers) {
            this.timer = this.responseBox.requiredResponse.length * numOfWindows * 30 + 60;
            this.maxTimer = this.timer;
        }
        //the person's response time
        else {
            this.timer = 100 * numOfWindows;
            this.maxTimer = this.timer;
        }
	},
	
	updateDifficulty: function()
	{
		if(this.currentConvo.difficulty == 4 || this.usedConvos.length == 1)	//max difficulty or only used one convo so far
		{
			return;
		}
	
		if(this.currentConvo.difficulty == 1)
		{
			//if your current convo difficulty and your previous were both one, then go to level 2
			if(this.usedConvos[this.usedConvos.length - 2].difficulty == 1)
			{
				this.difficulty = 2;
			}
		}
		else		//for every difficulty besides level 1
		{
			var sameLevel = true;
			var level = this.usedConvos[this.usedConvos.length - numOfWindows - 1].difficulty;
			
			for(var i = this.usedConvos.length - numOfWindows; i < this.usedConvos.length; i++)
			{
				if(this.usedConvos[i].difficulty != level)
				{
					sameLevel = false;
				}
			}
			if(sameLevel)
			{
				this.difficulty++;
			}
		}
		
		//this exists to spawn new chat windows
		if(this.difficulty > numOfWindows)
		{
			spawnChatWindow( wid * (7-2*numOfWindows)/2,randomPersonWithConvo(), 1, this.parent);
		}
		
		console.log("the difficulty is=======================" + this.difficulty);
		
	}
	
});