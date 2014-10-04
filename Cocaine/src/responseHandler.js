var ResponseHandler = cc.Layer.extend({
    ctor : function(x,y) {
        this._super();
        this.requiredResponse = "";
        //create a sprite and add it as a child
        //
        
        //create a label and add it as a child
        var templateLabel = new cc.LabelTTF("Required Input: GDAGDAFHdahyrdjyutdbfGTTEJAYRAFEWhtejeGRhtejyrgrwRFREFDAJYRDHTEAJTRJYRD", "Arial", 12, cc.size(165, 56), cc.TEXT_ALIGNMENT_LEFT);
        templateLabel.setFontFillColor(new cc.color(127,127,127,255));
        templateLabel.x = x+5;
        templateLabel.y = y;
        templateLabel.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM;
        console.log("LabelTTF depth: " + templateLabel.zIndex);
        this.addChild(templateLabel);
        
        //create a TextFieldTTF and add it as a child
        var inputField = new cc.TextFieldTTF("Entered Input: GRAGRTWERYTUGFTRERTYUYTREWQERTYUYTREWQWERTYUIYTREWQERTYUIYTREWQWERTYUIYTREW", cc.size(165, 56), cc.TEXT_ALIGNMENT_LEFT, "Arial", 12);
        inputField.setFontFillColor(new cc.color(0,0,255,255));
        inputField.x = x+5;
        inputField.y = y;
        inputField.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        console.log("TextFieldTTF depth: " + inputField.zIndex);
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
