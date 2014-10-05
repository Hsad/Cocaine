var selectedBox = null;

var ResponseHandler = cc.Layer.extend({
    ctor : function(x,y,w) {
        this._super();
        this.requiredResponse = "";
        //create a sprite and add it as a child
        var responseBox = new cc.Sprite(res.responseBoxPNG);
        responseBox.x = x;
        responseBox.y = y;
        this.addChild(responseBox);
        
        //create a label and add it as a child
        this.templateLabel = new cc.LabelTTF("Required Input: GDAGDAFHdahyrdjyutdbfGTTEJAYRAFEWhtejeGRhtejyrgrwRFREFD", "Arial", 12, cc.size(w-10, 56), cc.TEXT_ALIGNMENT_LEFT);
        this.templateLabel.setFontFillColor(new cc.color(127,127,127,255));
        this.templateLabel.x = x+5;
        this.templateLabel.y = y;
        this.templateLabel.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this.addChild(this.templateLabel);
        
        //create a TextFieldTTF and add it as a child
        this.inputField = new cc.TextFieldTTF("Entered Input: GRAGRTWERYTUGFTRERTYUYTREWQERTYUYTREWQWERTYUIYTREWI", cc.size(w-10, 56), cc.TEXT_ALIGNMENT_LEFT, "Arial", 12);
        this.inputField.setFontFillColor(new cc.color(0,0,255,255));
        this.inputField.x = x+5;
        this.inputField.y = y;
        this.inputField.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this.addChild(this.inputField);
                
        //SCOPING IS FUN!
        var parent = this;
        
        //add keyboard listener and add it
        this.keyboardListener = cc.EventListener.create({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {
                return false;
            },
            onKeyReleased: function(keyCode, event) {
                return false;
            }
        });
        this.keyboardListener.setEnabled(false);
        cc.eventManager.addListener(this.keyboardListener, this);
        
        //add mouse listener and add it
        this.mouseListener = cc.EventListener.create({
            event: cc.EventListener.MOUSE,
            onMouseDown: function(event) {
                if (event._x > x-w/2 && event._x < x+w/2 && event._y < y+23 && event._y > y-23) {
                    if (selectedBox != null) {
                        selectedBox.keyboardListener.setEnabled(false);
                        selectedBox.inputField.detachWithIME();
                        selectedBox.inputField.removeDelegate();
                    }
                    selectedBox = parent;
                    parent.keyboardListener.setEnabled(true);
                    parent.inputField.setDelegate(new cc.IMEDelegate());
                    parent.inputField.attachWithIME();
                    console.log(parent.inputField.getDelegate());
                }
                return false;
            }
        });
        cc.eventManager.addListener(this.mouseListener, this.inputField);
        
        //add a function to set the required response
        function setRequiredResponse(message) {
            this.requiredResponse = message;
        }
        
    }
});