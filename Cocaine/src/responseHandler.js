var selectedBox = null;


var ResponseHandler = cc.Layer.extend({
    ctor : function(x,y,w) {
        this._super();
        this.requiredResponse = "Default Required Response.";
        
        //create a label and add it as a child
        this.templateLabel = new cc.LabelTTF(this.requiredResponse, "Arial", 14, cc.size(w-24, 56), cc.TEXT_ALIGNMENT_LEFT);
        this.templateLabel.setFontFillColor(cc.color(100,100,100,255));
        this.templateLabel.x = x+2;
        this.templateLabel.y = y;
        this.templateLabel.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this.addChild(this.templateLabel);
        
        //create a TextFieldTTF and add it as a child

        this.inputField = new cc.TextFieldTTF(" ", cc.size(w-24, 56), cc.TEXT_ALIGNMENT_LEFT, "Arial", 14);
        this.inputField.setFontFillColor(cc.color(0,0,255,255));
        this.inputField.x = x+2;
        this.inputField.y = y;
        this.inputField.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this.addChild(this.inputField);

		// can add custom events when text entry begins, ends, when text is inserted, or deleted.
		// hitting enter automatically detaches the input method and this handler gets called
		
		var inputFieldEventHandler = new cc.TextFieldDelegate();
		// JS lets you override methods in an object without having to do all the work of declaring a subclass.  
		// this is handy for little helper objects like Delegates
		 
		inputFieldEventHandler.onTextFieldDetachWithIME = function(sender) {
				// sender will be the textField.  sender.parent is the parent node, the ResponseHandler.
				return false; // return true if you want to cancel the detach for whatever reason.
			}
        inputFieldEventHandler.onTextFieldInsertText = function(sender, text, len) {
            if (text == "\n") {
                if (sender.getString() == sender.parent.requiredResponse) {
                    sender.parent.DoStuffWithTextFromTheField(sender.getString());
                    sender.setString("");	// clear the input field
                    sender.setFontFillColor(cc.color(0,0,255,255));
                }
                return true;
            }
            else {
                //input too long
                if (sender.parent.requiredResponse.length < sender.getString().length+1) {
                    sender.setFontFillColor(cc.color(255,0,0,255));
                    sender.discrepancy = true;
                }
                //wrong character
                else if (text != sender.parent.requiredResponse[sender.getString().length]){
                    sender.setFontFillColor(cc.color(255,0,0,255));
                    sender.discrepancy = true;
                }
                //special case: last character
                else if (sender.parent.requiredResponse.length == sender.getString().length+1) {
                    if (!sender.discrepancy && text == sender.parent.requiredResponse[sender.getString().length]) {
                        sender.setFontFillColor(cc.color(0,255,0,255));
                    }
                    else {
                        sender.setFontFillColor(cc.color(255,0,0,255));
                        sender.discrepancy = true;
                    }
                }
                return false;
            }
        }
        inputFieldEventHandler.onTextFieldDeleteBackward = function(sender, delText, len) {
            //check for discrepancies
            for (i = 0; i < sender.getString().length-1; i++) {
                if (sender.parent.requiredResponse[i] != sender.getString()[i]) {
                    return false;
                }
            }
            //input matches
            if (sender.parent.requiredResponse.length == sender.getString().length-1) {
                sender.setFontFillColor(cc.color(0,255,0,255));
            }
            //input still too short
            else {
                sender.setFontFillColor(cc.color(0,0,255,255));
            }
            sender.discrepancy = false;
            return false;
        }
        global = inputFieldEventHandler;
		this.inputField.setDelegate(inputFieldEventHandler);
		    
		// add mouse event handler so you can click on the text field to activate it
        cc.eventManager.addListener({
        	event: cc.EventListener.MOUSE,
        		onMouseUp: function(event) { 
        			event.getCurrentTarget().onMouseUp(event); 
        		}
        	}, 
        	this);
    },
    
    onMouseUp:function(event){
    	// check if the touch or click is inside the inputField bounding box
    	var p=event.getLocation();
    	var rect=this.inputField.getBoundingBox();
    	if (cc.rectContainsPoint(rect,p)) {
            if (selectedBox != null) {
                selectedBox.detachWithIME();
                cc.log("detached previous IME");
            }
    		this.inputField.setPlaceHolder("");	// clear the placeholder text
    		this.inputField.attachWithIME();	// enable keyboard input
            selectedBox = this.inputField;
    		cc.log("attached new IME");
    	}
    	else {
    		// stop keyboard input
    		//this.inputField.detachWithIME();
    		//cc.log("clicked out of the text field");
    	}
    },
 
   
    DoStuffWithTextFromTheField:function(s) {
        this.chatbox.textLog.addBubble(s, this.chatbox._xSpawn, 105, true);
        this.chatbox.updateConvo(false);
        this.templateLabel.setString(" ");
    	cc.log(s);
    }
});


