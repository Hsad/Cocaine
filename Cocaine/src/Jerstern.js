var jerstern = new Person("Jerstern Cererglererner",res.jersternPNG);

//posts
jerstern.posts.push(["It's more than a fad!", ]);
//create a new conversation to append to the conversation list
//                               |
// this conversations difficulty v
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

jerstern.conversations.push(testConvo);