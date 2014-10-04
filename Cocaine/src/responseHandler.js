var ResponseHandler = cc.Layer.extend({
    ctor : function(x,y) {
        this._super();
        this.requiredResponse = "";
        //create a sprite and add it as a child
        //***NEEDS IMPLEMENTATION***
        
        //create a label and add it as a child
        var templateLabel = new cc.LabelTTF("Required Input:", cc.size(350, 0), cc.TEXT_ALIGNMENT_LEFT, "Arial", 12);
        templateLabel.setFontFillColor(cc.color(255,255,255,255));
        templateLabel.x = x;
        templateLabel.y = y;
        this.addChild(templateLabel);
        
        //create a TextFieldTTF and add it as a child
        var inputField = new cc.TextFieldTTF("                         Entered Input", cc.size(350, 0), cc.TEXT_ALIGNMENT_LEFT, "Arial", 12);
        this.addChild(inputField);
        
        //add keyboard listener and add it
        //***NEEDS IMPLEMENTATION***
        
        //keep the keyboard detached by default
        //***NEEDS IMPLEMENTATION***
        
        //add mouse listener and add it
        //***NEEDS IMPLEMENTATION***
        
        //if the box is clicked on, detach IME from all other boxes and attach to this one
        //***NEEDS IMPLEMENTATION***
        
        //add a function to set the required response
        function setRequiredResponse(message) {
            this.requiredResponse = message;
        }
        
    }
});
