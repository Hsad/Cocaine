var dervern = new Person("Dervern Herlpert",res.dervernPNG);
//posts
dervern.posts.push(["What's with this new fercederp design. It totally sucks."]);
dervern.posts.push(["I hate my profile pic; it doesn't look like me at all."]);
dervern.posts.push(["Ugh, this game has turned my mind to mush"]);
dervern.posts.push(["Greetings programmers"]);
dervern.posts.push(["I wonder what yerterb would look like in this style."]);
dervern.posts.push(["This site is sooooo much better than that other one."]);
//create a new conversation to append to the conversation list
//                               |
// this conversations difficulty v
/*
var testConvo = new Conversation(1);
testConvo.modules.push(["hi", 
						"hey man", 
						"you there?",
						"yeah sorry",
						"okay nevermind..."]);
testConvo.modules.push(["a",
						"b",
						"c",
						"d",
						"e"]);

merc.conversations.push(testConvo);
*/
var testConvo = new Conversation(1);
testConvo.modules.push(["BLAAAARRRRRGGGHHH!!!!", 
						"'sup", 
						"Why am I even here? I don't use social media.",
						"oops, I'm back",
						"I'm out, don't belong here anyway."]);
testConvo.modules.push(["Dude, I am totally stoked for Zerlder Weryoo",
						"I know right",
						"Really, come on",
						"Huh",
						"can't take this. Goodbye!"]);
testConvo.modules.push(["Anyway, that's all I got",
						"Okay?",
						"well,bye",
						"bye",
						"screw it"]);                     

merc.conversations.push(testConvo);

var testConvo = new Conversation(2);
testConvo.modules.push(["I'm back", 
						"hi there", 
						"Are you there?",
						"What? Yes.",
						"Too late, I'm gone"]);
testConvo.modules.push(["Have you worked on the game dev project at all?",
						"Ha, No.",
						"Hello?",
						"What? No.",
						"Fine, don't respond"]);
testConvo.modules.push(["me either",
						"figures",
						"seriously",
						"Sorry, Fercederp beckons",
						"..."]);                     

merc.conversations.push(testConvo);

var testConvo = new Conversation(4);
testConvo.modules.push(["oh by the way, I still owe you for the pizza", 
						"that's right you do", 
						"unless you're not there",
						"What? I'm here and you do owe me",
						"Haha, no refunds"]);
testConvo.modules.push(["I can get it to you tomorrow",
						"that sounds good, take your time",
						"Hello?",
						"Tomorrow's fine",
						"alright, never"]);
testConvo.modules.push(["See you tomorrow",
						"Alright, see you then",
						"unless I am chatting to myself right now",
						"Why would you be chatting to yourself?",
						"glip glop gloop, herpdy derbity der"]);                     

merc.conversations.push(testConvo);