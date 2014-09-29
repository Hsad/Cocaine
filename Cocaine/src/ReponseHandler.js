//***response will have to be a child/variable of each chat box***//

//This part handles the player's response for a given chat box
//NOTE: Response is a function, because it can be called globally and can be instantiated,
//almost like a regular class.
//A response must be created with each new question asked and stored in that chat box.
//After the enter key is pressed, the player's response will be compared to the game-defined
//response, and Response() will return a list of strings (text bubble) with the player's response
//before being destroyed. The parent chat box should then generate a new response after the
//next question is asked.
function Response (WordList) {
    this.RequiredWords = WordList;
    this.EnteredWords = [];
    this.Discrepancies = [];
    //this function updates the Discrepancies list; should be called in AddCharacter()
    this.DiscrepancyCheck = function() {
        //***NEEDS IMPLEMETATION***
    };
    //this function should handle all characters sent to it by key press events
    this.AddCharacter = function(c) {
        //handle spacebar
        //***NEEDS IMPLEMETATION***
        //handle backspace
        //***NEEDS IMPLEMETATION***
        //handle characters
        //***NEEDS IMPLEMETATION***
        this.DiscrepancyCheck();
    };
    //parent chat box should call this on player pressing enter key
    this.GetAccuracy = function() {
        var AccuracyPercentage;
        //***NEEDS IMPLEMETATION***
        return AccuracyPercentage;
    };
    //called by parent chat box to draw text; should only be called after AddCharacter()
    this.GetRequiredWords = function() {
        return this.RequiredWords;
    };
    //called by parent chat box to draw text; should only be called after AddCharacter()
    //parent chat box uses this to create a new message in the log before creating new response
    this.GetEnteredWords = function() {
        return this.EnteredWords;
    };
    //parent chat box uses this in conjuction with word lists to decide color of each letter
    this.GetDiscrepancies = function() {
        return this.Discrepancies;
    };
}














