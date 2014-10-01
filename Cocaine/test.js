var Ship = cc.Sprite.extend({
	ctor: function(){
		this._super(res.Ship_png);
		this.setPosition(0,0);
		this.setScale(.75);
		this.scheduleUpdate();
	},

	update: function(dt) {
		this.rotation += Math.random()*1000*dt;
	}


})


var HelloWorldLayer = cc.Layer.extend({
	sprite: null,
	//constructor
	ctor: function() {
		/*load ship sprite, add as child
		to the layer, position and scale it */
		this._super();
		this.sprite = new Ship();
		this.addChild(this.sprite);


		//add event listeners
		cc.eventManager.addListener({
			event: cc.EventListener.MOUSE,
			onMouseDown: function(event) {
				console.log("Clicked");
				event.getCurrentTarget().moveSprite(event.getLocation());
			}
		}, this)



		/*var action1 = cc.moveTo(3, 
			cc.p(cc.winSize.width/2, cc.winSize.height/2));

		//eases the action
		action1.easing(cc.easeInOut(3));
		this.sprite.runAction(action1);*/
	},

	moveSprite: function(p){
		var action = cc.moveTo(1,p);
		action.easing(cc.easeInOut(3));
		this.sprite.runAction(action);
		//this.sprite.setPosition(p);
	}
});


var HelloWorldScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var layer = new HelloWorldLayer();
		this.addChild(layer);
	}
});