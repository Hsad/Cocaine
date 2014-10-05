var selectedBox = null;

var ResponseHandler = cc.Layer.extend({
    ctor : function(x,y,w) {
        this._super();
        this.requiredResponse = "";
        
        //create a label and add it as a child
        this.templateLabel = new cc.LabelTTF("Required Input: GDAGDAFHdahyrdjyutdbfGTTEJAYRAFEWhtejeGRhtejyrgrwRFREFD", "Arial", 12, cc.size(w-24, 56), cc.TEXT_ALIGNMENT_LEFT);
        this.templateLabel.setFontFillColor(new cc.color(127,127,127,255));
        this.templateLabel.x = x+2;
        this.templateLabel.y = y;
        this.templateLabel.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this.addChild(this.templateLabel);
        
        //create a TextFieldTTF and add it as a child
        this.inputField = new cc.TextFieldTTF("Entered Input: GRAGRTWERYTUGFTRERTYUYTREWQERTYUYTREWQWERTYUIYTREWI", cc.size(w-24, 56), cc.TEXT_ALIGNMENT_LEFT, "Arial", 12);
        this.inputField.setFontFillColor(new cc.color(0,0,255,255));
        this.inputField.x = x+2;
        this.inputField.y = y;
        this.inputField.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this.addChild(this.inputField);
                
        //SCOPING IS FUN!
        var parent = this;
        
        //add keyboard listener and add it
        /*this.keyboardListener = cc.EventListener.create({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {
                return false;
            },
            onKeyReleased: function(keyCode, event) {
                return false;
            }
        });
        //this.keyboardListener.setEnabled(false);
        cc.eventManager.addListener(this.keyboardListener, this);*/
        
        //add mouse listener and add it
        this.mouseListener = cc.EventListener.create({
            event: cc.EventListener.MOUSE,
            onMouseDown: function(event) {
                if (event._x > x-w/2 && event._x < x+w/2 && event._y < y+23 && event._y > y-23) {
                    if (selectedBox != null) {
                        //selectedBox.keyboardListener.setEnabled(false);
                        console.log("IME detached!");
                        selectedBox.inputField.detachWithIME();
                    }
                    selectedBox = parent;
                    //parent.keyboardListener.setEnabled(true);
                    parent.inputField.setPlaceHolder("");
                    parent.inputField.attachWithIME();
                    console.log("IME attached!");
                }
                return false;
            }
        });
        cc.eventManager.addListener(this.mouseListener, this);
        
        //add a function to set the required response
        function setRequiredResponse(message) {
            this.requiredResponse = message;
        }
        
    }
});
