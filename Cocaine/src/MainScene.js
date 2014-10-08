var playername = "Ernernermers";

var jitter = function(node, x_jitter, y_jitter) {
    if (typeof node.x_anchor === 'undefined') {
        node.x_anchor = node.x;
    }
    if (typeof node.y_anchor === 'undefined') {
        node.y_anchor = node.y;
    }
    node.x = node.x_anchor + (Math.random()-0.5)*2*x_jitter;
    node.y = node.y_anchor + (Math.random()-0.5)*2*y_jitter;
    node.responseBox.x = (node.x_anchor - node.x);
    node.responseBox.y = (node.y_anchor - node.y);
}

var gameOverLayer = cc.Layer.extend({
    sprite : null,
    ctor : function() {
        this._super();
        this.sprite = new cc.Sprite(res.gameOverPNG);
        this.sprite.attr({
            x: 800,
            y: 450,
            scale: 1,
            rotation: 0
        });
        this.addChild(this.sprite);
    }
});

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
        this.nameLabel = new cc.LabelTTF(playername, "Idolwild", 24, cc.size(250, 40), cc.TEXT_ALIGNMENT_LEFT);
        this.nameLabel.x = 220;
        this.nameLabel.y = 800;
        this.nameLabel.setFontFillColor(cc.color(0,0,0,255));
        this.addChild(this.nameLabel);
        this.editLabel = new cc.LabelTTF("Edit Profile", "Idolwild", 20, cc.size(250, 40), cc.TEXT_ALIGNMENT_LEFT);
        this.editLabel.x = 220;
        this.editLabel.y = 770;
        this.editLabel.setFontFillColor(cc.color(0,0,0,255));
        this.addChild(this.editLabel);
        this.profileLabel = new cc.LabelTTF(playername + "  |  Home", "Idolwild", 24, cc.size(450, 40), cc.TEXT_ALIGNMENT_LEFT);
        this.profileLabel.x = 925;
        this.profileLabel.y = 860;
        this.profileLabel.setFontFillColor(cc.color(255,255,255,255));
        this.addChild(this.profileLabel);
    }
});

function spawnChatWindow( _xSpawn,_person, _difficulty, scene){
	numOfWindows += 1;
	var window = new ChatWindowLayer(_xSpawn, _person, _difficulty);
	//window.parent = scene;
	window.selectNewConvo();
	return window;
}

var numOfWindows = 0;
var MainScene = cc.Scene.extend({
	onEnter : function(){
		this._super();
		
		//gotta instantiate the layers and then make references to them and add them as children
        this.backgroundLayer = new bgLayer();
        this.addChild(this.backgroundLayer);
		this.newsFeedLayer = new NewsFeedLayer();
		this.addChild(this.newsFeedLayer);
		
		var wid = 335 ;
		//-------------------------
		//Create the Chat windows!!
		//-------------------------
		this.chatWindowLayer1 = spawnChatWindow(wid*7/2, merc, 1, this);
		this.addChild(this.chatWindowLayer1);
		
		/*
		this.chatWindowLayer2 = new ChatWindowLayer(wid*5/2, bern);
		this.addChild(this.chatWindowLayer2);
		this.chatWindowLayer3 = new ChatWindowLayer(wid*3/2, sperncer);
		this.addChild(this.chatWindowLayer3);
		this.chatWindowLayer4 = new ChatWindowLayer(wid/2, dersh);
		this.addChild(this.chatWindowLayer4);
		*/
		
	}
});
