//Conversation handles the entire conversation file of a specific user.
//Modules can be loaded by level, and then individual messages can be obtained from there.
//Module handling will be done by the chat box and message log.
function Conversation(username) {
    this.username = username;
    this.filename = "Conversation" + username + ".txt" //We'll probably change this. Maybe use a .json?
    this.moduleNumber = 0;
    //GetModule() should first find how many different modules there are per level, and then return
    //the module (which will be a list<list<string> >)
    this.getModule = function(level) {
        var module = [];
        this.moduleNumber = 0;
        //must set module number before return to keep track of place in file
        //***NEEDS IMPLEMENTATION***
        this.moduleNumber = 1;
        return module;
    };
    //go to the next module by using moduleNumber
    //Will return [["ENDCONVO"]] if no next module exists (read from file)
    this.nextModule = function(level) {
        //***NEEDS IMPLEMENTATION***
    }
}

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
        //***NEEDS IMPLEMENTATION***
    };
    //this function should handle all characters sent to it by key press events
    this.AddCharacter = function(c) {
        //handle spacebar
        //***NEEDS IMPLEMENTATION***
        //handle backspace
        //***NEEDS IMPLEMENTATION***
        //handle characters
        //***NEEDS IMPLEMENTATION***
        this.DiscrepancyCheck();
    };
    //parent chat box should call this on player pressing enter key
    this.GetAccuracy = function() {
        var AccuracyPercentage;
        //***NEEDS IMPLEMENTATION***
        return AccuracyPercentage;
    };
    //called by parent chat box to draw text; should only be called after AddCharacter()
    this.GetRequiredWords = function() {
        return this.RequiredWords;
    };
    //called by parent chat box when the response changes to R2
    //this allows us to change the required text without losing the player's input
    this.SetRequiredWords = function(WordsList) {
        this.RequiredWords = WordsList;
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

//Message Box
//the message log will have a list of these to make it easier
//arguments and types:
//message: list of strings
//user: bool (false if it's something the player typed, true if it's something the other user typed)
var MessageBox (message, user) = cc.Node.extend({ //***make sure this syntax is right, I didn't check***
    //***NEEDS IMPLEMENTATION***
});

//Message Log
//Essentially a bunch of image queues: one for each intensity level
//stack is a list of lists of images: each sublist has multiple intensity levels of the same image.
function MessageLog(firstMessage) {
    this.stack = [];
    //add message from user
    this.addUserMessage = function(message) {
        //***NEEDS IMPLEMENTATION***
    };
    //add message from player
    this.addPlayerMessage = function(message) {
        //***NEEDS IMPLEMENTATION***
    };
    //add the first message to the stack on creation
    this.addUserMessage(firstMessage);
    //add "typing" bubble to the stack
    this.addTypingBubble() = function() {
        //***NEEDS IMPLEMENTATION***
    };
    //remove "typing" bubble from the stack
    this.removeTypingBubble() = function() {
        //***NEEDS IMPLEMENTATION***
    };
}

//Post
//Posts are lists of pictures. The News Feed will select a post, and then push all the images
//to the screen in order with a delay in between each. The News Feed will then move to the
//next post once the end of the list is reached.
function Post(piclist) {
    this.piclist = piclist;
    //***NEEDS IMPLEMENTATION***
}

//User
//There should be a list of users in the main file that is created using this constructor
//User is essentially for data storage and organization--this is where we add content.
//arguments and types:
//name: string User_Name (parsed by the drawing function to turn underscores into spaces)
//pic: res.imageName_png
function User(name, pic) {
    this.name = name;
    //***make sure to import and create res variables in resources.js***
    this.pic = pic;
    this.posts = [];
    //name accessor
    this.getName = function() {
        return name;
    };
    //picture accessor
    this.getPic = function() {
        return pic;
    };
    //***add news posts to the user immediately after creating it***
    this.addPost = function(post) {
        this.posts.push(post);
    };
}

//Chat Box
//arguments and types:
//index: number
//user: User type
function ChatBox(index, user, level) {
    this.index = index;
    this.username = user.getName();
    this.profilePic = user.getPic();
    this.level = level;
    this.timer = 0;
    this.typingTime = 200;
    this.responseTime = 300;
    this.closeTime = 350;
    this.newMessageTime = 100;
    this.questionNumber = 1;
    this.acceptableAccuracy = 0.95;
    //setup
    this.conversation = new Conversation(this.username);
    this.module = this.conversation.getModule(this.level);
    this.messageLog = new MessageLog(this.module[0]);
    this.response = new Response(this.module[1]);
    //this function will be called when module needs to be replaced
    this.newModule = function(level) {
        this.module = this.conversation.getModule(level);
    };
    //this function passes a character to the response
    this.PassCharacter = function(c) {
        if (this.questionNumber > 0) {
            this.response.AddCharacter(c);
        }
    };
    //this function is called if enter is pressed while this is the active chat box
    this.PressEnter = function () {
        //the function should do nothing if CE has already been sent
        if (this.questionNumber == 3) {
            return;
            //***maybe at some point show a "user is offline" error***
        }
        //compare the entered response with the required response
        var accuracy = this.response.GetAccuracy();
        //push the enetered response to the chat log
        this.messageLog.addPlayerMessage(this.response.GetEnteredWords());
        //if the accuracy isn't high enough, get the ambiguation message
        if (accuracy < this.acceptableAccuracy) {
            var ambiguation = this.conversation.GetAmbiguationMessage();
            //***handle what the response should be from here***
            //***NEEDS IMPLEMENTATION***
        }
        else {
            //else, get next module
            this.module = this.conversation.nextModule();
            //if next module doesn't exist, go up one level and get a new random module
            if (this.module[0][0] == "ENDCONVO") {
                this.level += 1;
                this.newModule(this.level);
                //***eventually, this part will make new chat boxes, too***
            }
            //get new response
            this.response = new Response(this.module[1]);
            //reset question number and timer
            this.timer = -this.newMessageTime;
            this.questionNumber = 0;
        }
    };
    //tick the timer and add "typing" bubble or new message to message log if necessary
    this.TimerTick = function () {
        this.timer += 1;
        //add first question to the log
        if (this.timer == 0) {
            this.messageLog.addUserMessage(this.module[0]);
            this.questionNumber = 1;
        }
        //add a "typing" bubble
        else if (this.timer == this.typingTime) {
            this.messageLog.addTypingBubble();
        }
        //remove "typing" bubble and add the next message to the log
        else if (this.timer == this.responseTime) {
            this.messageLog.removeTypingBubble();
            //check to see if the message should be closed or not, and reset timers accordingly
            this.questionNumber += 1;
            if (this.questionNumber == 2) {
                //get Q2
                this.messageLog.addUserMessage(this.module[2]);
                //set required response to R2
                this.response.SetRequiredWords(this.module[3]);
                //reset timer
                this.timer = 0;
            }
            else if (this.questionNumber == 3) {
                //get CE
                this.messageLog.addUserMessage(this.module[4]);
            }
        }
        else if (this.timer == this.closeTime) {
            //Close the window and shift other windows down if necessary
            //***NEEDS IMPLEMENTATION***
        }
    };
    //
    this.draw = function() {
        //DO NOT DRAW RESPONSE IF QUESTION NUMBER == 0
        //***NEEDS IMPLEMENTATION***
    };
}

//Friends List
//this will be populated by random users
function FriendsList() {
    //***NEEDS IMPLEMENTATION***
}

//News Feed
//this will blit post sequences to the background every now and again
function NewsFeed() {
    //***NEEDS IMPLEMENTATION***
}














