var jerstern = new Person("Jerstern Cererglererner",res.jersternPNG);

//posts
jerstern.posts.push(["It's more than a fad!", res.postJerstern1PNG]);
jerstern.posts.push(["It's so meta, even this acronym", res.postJerstern2PNG]);
jerstern.posts.push(["A lot of people won't even get this reference unless they know me.", res.postJerstern3PNG]);
jerstern.posts.push(["Just because I have nothing to say, doesn't mean I won't say stuff anyway!", res.postJerstern4PNG]);
jerstern.posts.push(["Wow, do I ever say anything that hasn't been said before? Read and find out!", res.postJerstern5PNG]);
jerstern.posts.push(["Trying to bake cookies at 450 degrees without burning them because I can't figure out how to lower the oven's temperature. #turndownforwhat"]);
//create a new conversation to append to the conversation list
//                               |
// this conversations difficulty v
/*
var Convo_x_x = new Conversation(x);
testConvo.modules.push(["a",
						"b",
						"c",
						"d",
						"e"]);

jerstern.conversations.push(testConvo);
*/

var Convo_1_1 = new Conversation(1);
testConvo.modules.push(["Borp.",
						"borp?",
						"Sorry, I meant \"Hello there, fine sir. Good day to you.\"",
						"right. hey.",
						"A'ight, guess you're too busy to be silly. Lame."]);
testConvo.modules.push(["So whatchu doin', gurl?",
						"nothing much. you?",
						"Yo. You there?",
						"yeah. just chillin.",
						"Guess not. A'ight. I'm out, then."]);
testConvo.modules.push(["I've been thinking a lot about cats lately. Not sure why. Thoughts?",
						"cats? dude, what?",
						"I mean, or don't give me your opinion. That's... that's cool, too.",
						"what about cats?",
						"Alright. "]);

jerstern.conversations.push(Convo_1_1);