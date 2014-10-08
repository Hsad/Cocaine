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
Convo_x_x.modules.push(["a",
						"b",
						"c",
						"d",
						"e"]);

jerstern.conversations.push(testConvo);
*/

var Convo_1_1 = new Conversation(1);
Convo_1_1.modules.push(["Borp.",
						"borp?",
						"Sorry, I meant \"Hello there, fine sir. Good day to you.\"",
						"right. hey.",
						"A'ight, guess you're too busy to be silly. Lame."]);
Convo_1_1.modules.push(["So whatchu doin', gurl?",
						"nothing much. you?",
						"Yo. You there?",
						"yeah. just chillin.",
						"Guess not. A'ight. I'm out, then."]);
Convo_1_1.modules.push(["I've been thinking a lot about cats lately. Not sure why. Thoughts?",
						"cats? dude, what?",
						"I mean, or don't give me your opinion. That's... that's cool, too.",
						"what about cats?",
						"Alright. I'll go talk to someone who doesn't hate fun, then."]);
Convo_1_1.modules.push(["Yeah, dude. Cats. I dunno. It's just been like, a thing for me lately.",
						"you're so weird",
						"Do you think that's weird?",
						"a little, honestly",
						"What, so you're just gonna shun me now? I see how it is."]);
jerstern.conversations.push(Convo_1_1);

var Convo_1_2 = new Conversation(1);
Convo_1_2.modules.push(["Alright, so... hamsters. Yay or nay?",
						"hamsters?",
						"Bro. C'mon. I need an answer here.",
						"uh. I dunno.",
						"Nevermind, I'll go ask someone else."]);
Convo_1_2.modules.push(["Bro. Hamsters are so cool. I don't know why I don't own one yet.",
						"go buy one?",
						"Maybe I should get one.",
						"go for it.",
						"Y'know what, I'm gonna go get one right now. Later."]);

jerstern.conversations.push(Convo_1_2);