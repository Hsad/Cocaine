var merc = new Person("Merc Dersterferner",res.mercPNG);

//posts
merc.posts.push(["In my personal opinion, Halo Reach is the best tragedy of our generation."]);
merc.posts.push(["This is my post, there are many like it, but this one is mine"]);
merc.posts.push(["look at this cute puppy",benDogPNG]);
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

merc.conversations.push(testConvo);
