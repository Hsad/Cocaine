var TextLogLayer = cc.Layer.extend({

	ctor : function(_xSpawn, _ySpawn, _width, _height){
		this._super();
		this.bubbleList = [];
		//initialize the clippingNode
		this.clippingNode = cc.ClippingNode.create();
		this.clippingNode.setAnchorPoint(.5,.5);
		this.clippingNode.setPosition(this.x, this.y);
		console.log(1);
		//this.addChild(this.clippingNode);
		this.stencil = cc.DrawNode.create();
		var rect = [cc.p(this.x-335/2,this.y + 380/2), cc.p(this.x+335/2,this.y+380/2),cc.p(this.x-335/2, this.y-380/2), cc.p(this.x+335/2,this.y-380/2)];
		//var rect = [cc.p(000,1000), cc.p(2000,1000),cc.p(0,0), cc.p(2000,0)];
		this.stencil.drawPoly(rect);
		//this.clippingNode.setStencil(this.stencil)
		
		
		//-------------
		//addBubble()
		//-------------
		this.addBubble = function(_message, _xSpawn, _ySpawn, _isPlayers){
			this.newestBubble = new ChatBubble(_message, _xSpawn, _ySpawn, _isPlayers);
			this.clippingNode.addChild(this.newestBubble);
			console.log(this.newestBubble.x);
			
			this.bubbleList.push(this.newestBubble);
			this.pushLogStack();
			return this.newestBubble;
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
		//height keeps track of the height of all the sprites
		this.height = 0;
		//-------------------------------------
		//first you have to make the top sprite
		//-------------------------------------
		_isPlayers ? this.topSprite = new cc.Sprite(res.playerBubbleTopPNG) : this.topSprite = new cc.Sprite(res.otherBubbleTopPNG);
		this.topSprite.attr({
			x: _xSpawn,
			y: _ySpawn,
			scale: 1,
			rotation: 0
		});
		this.height +=this.topSprite.height; 			//height keeps track of the height of all the sprites
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
				this.middleSprite.attr({
					x: _xSpawn,
					// the y needs to take into account how many sprite of this bubble are above this one
					y: _ySpawn - this.topSprite.height/2 - (this.middleSprite.height/2) * ( i ) - this.middleSprite.height/2,
					scale: 1,
					rotation: 0
				});
				this.addChild(this.middleSprite);
				this.height +=this.middleSprite.height; 			//height keeps track of the height of all the sprites
			}
		}
		//-------------------------
		//Now the bottom sprite too
		//-------------------------
		var bottomSpawn;		//the bottom sprites location needs to be based on how many middle sprites there were
		_isPlayers ? this.bottomSprite = new cc.Sprite(res.playerBubbleBottomPNG) : this.bottomSprite = new cc.Sprite(res.otherBubbleBottomPNG);
		if(this.middleSprite != null)
		{
			bottomSpawn = _ySpawn - this.topSprite.height/2 - (this.middleSprite.height/2) * (this.lines -1) - this.bottomSprite.height/2;
		}
		else
		{
			bottomSpawn = _ySpawn - this.topSprite.height/2;
		}
		this.bottomSprite.attr({
			x: _xSpawn,
			// the y needs to take into account how many sprite of this bubble are above this one
			y: bottomSpawn,
			scale: 1,
			rotation: 0
		});
		this.height +=this.bottomSprite.height; 			//height keeps track of the height of all the sprites
		this.addChild(this.bottomSprite);
		
		//-----------------------------
		//finally create the text label
		//-----------------------------
		this.text = new cc.LabelTTF(_message, "Arial", 14, cc.size(185, 0), cc.TEXT_ALIGNMENT_LEFT);
		this.text.setFontFillColor(cc.color(0,0,0,255));
		if(_isPlayers)
		{
			this.text.x = _xSpawn + 30;
			this.text.y = _ySpawn - (this.lines * 14)/2 + 5;//this is because the text field is still centered so having more lines throws of the ySpawn
		}
		else
		{
			this.text.x = _xSpawn - 9;
			this.text.y = _ySpawn - (this.lines * 15)/2;
		}
		this.addChild(this.text);
	}
});

var ChatWindowLayer = cc.Layer.extend({
	sprite : null,
	difficulty : 1,
	usedConversations: [],
	currentConvo: null,
	person: null,
	parent: null
	
	
	//Constructor. should pass in the windows X Location,
	ctor : function(_xSpawn, _person){
		//initialize the super
        this.scheduleUpdate();
		this._super();
        this._xSpawn = _xSpawn;
        this.jittering = false;
		person = _person
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
		this.textLog = new TextLogLayer();
		this.textLog.x = this.x;
		this.textLog.y = this.y;
		this.addChild(this.textLog);
        
        //-----------------------------
        // create the response box
        //-----------------------------
        this.responseBox = new ResponseHandler(_xSpawn,33,335);
        this.responseBox.chatbox = this;
        this.addChild(this.responseBox);
	},
    update : function() {
        if (this.jittering) {
            jitter(this, 5, 5);
        }
        else {
            jitter(this, 0, 0);
        }
    },
	//-------------------------------------------------------------------------
	//selectNewConvo()---------------------------------------------------------
	//-------------------------------------------------------------------------
	//called to change to a new conversation after your current one is finished
	//and also determine how long you'll have to answer this question
	selectNewConvo : function(){
		var possibleConvos = []
		for(var i = 0; i < person.conversations.length; i++){
			if(person.conversations[i].difficulty == this.difficulty){
				possibleConvos.push(person.conversations[i]);
			}
		}
		var ran = Math.random()* possibleConvos.length;
		this.currentConvo = possibleConvos[ran];
		
		
		
	},
	
	//should be called every frame, tick the counter, and advance the module if necessary
	//
	//
	//
	conversationTick : function(){
		
	
	}
});