var merc = new Person("Merc Dersterferner",res.dershPNG);

//create a new conversation to append to the conversation list
//                               |
// this conversations difficulty v
var testConvo = new Conversation(1);
testConvo.modules.push(["hi", 
						"hey man", 
						"you there?",
						"yeah sorry",
						"okay nevermind...");
testConvo.modules.push(["a",
						"b",
						"c",
						"d",
						"e"]);

merc.conversations.push(testConvo);