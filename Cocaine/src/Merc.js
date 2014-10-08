var merc = new Person("Merc Dersterferner",res.mercPNG);

//posts
merc.posts.push(["In my personal opinion, Halo Reach is the best tragedy of our generation."]);
merc.posts.push(["This is my post, there are many like it, but this one is mine"]);
merc.posts.push(["It really is the bet font.", res.postMerc1PNG]);
merc.posts.push(["I have seven dress shirts that are all this color.", res.postMerc2PNG]);
merc.posts.push(["Game of the year, every year!", res.postMerc3PNG]);
merc.posts.push(["Score!", res.postMerc4PNG]);
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
