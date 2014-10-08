var jerstern = new Person("Jerstern Cererglererner",res.jersternPNG);

//posts
jerstern.posts.push(["It's more than a fad!", res.postJerstern1PNG]);
jerstern.posts.push(["It's so meta, even this acronym", res.postJerstern2PNG]);
jerstern.posts.push(["A lot of people won't even get this reference unless they know me.", res.postJerstern3PNG]);
jerstern.posts.push(["Just because I have nothing to say, doesn't mean I won't say it anyway!", res.postJerstern4PNG]);
jerstern.posts.push(["Wow, do I ever say anything that hasn't been said before? Read and find out!", res.postJerstern5PNG]);
jerstern.posts.push(["Trying to bake cookies at 450 degrees without burning them because I can't figure out how to lower the oven's temperature. #turndownforwhat"]);
jerstern.posts.push(["Is the room spinning, or is that jut me? Hahaha, vertigo jokes."]);
jerstern.posts.push(["Okay, okay, these vertigo jokes are starting to get... DIZZYING! Ahahaha, I crack myself up."]);
jerstern.posts.push(["How was I supposed to know that's the street I need to go down if the GPS doesn't tell me? #turndownforwhat"]);
jerstern.posts.push(["You know who can't stand up sometimes? Me! Ahahaha, but seriously guys."]);
//posts

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

person.conversations.push(testConvo);
*/

var Convo_1_1 = new Conversation(1);
Convo_1_1.modules.push(["Borp.",
						"borp?",
						"Sorry, I meant \"Hello there, fine sir. Good day to you.\"",
						"right. hey.",
						"A'ight, guess you're too busy to be silly. Lame."]);
Convo_1_1.modules.push(["So whatchu doin', gurl?",
						"nothing much, you?",
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
Convo_1_2.modules.push(["Later today, maybe. Know any good pet stores?",
                        "not off the top of my head",
                        "Dude? I'm not going to be arsed to get the phonebook.",
                        "I have no idea, man",
                        "Alright, fine. I'll get the gosh-dang phonebook, because you're being a lame-butt."]);
jerstern.conversations.push(Convo_1_2);

var Convo_1_3 = new Conversation(1);
Convo_1_3.modules.push(["Okay, dude. I need you to hear me out for a second.",
                        "what is it?",
                        "Dudebro. Are you there? I'm serious. This is a big problem.",
                        "sorry, what do you need?",
                        "ALRIGHT, COOL. JUST LIKE... DON'T BE THERE OR WHATEVER."]);
Convo_1_3.modules.push(["I need to know who would win in a fight: Captain Falcon or Knuckles.",
                        "are you serious?",
                        "THIS IS A LEGIT PONDERANCE, BRO.",
                        "are you for real?",
                        "You have no imagination. I ain't gonn' talk to some unimaginative guy if I don't want to."]);
Convo_1_3.modules.push(["Totes super cereal about it, actually.",
                        "you're odd, bro",
                        "Like, so cereal I am literally breakfast.",
                        "sounds tasty",
                        "Y'know what, I'm going to get some cereal, actually. A bowl of bran flakes is APPARENTLY MORE RESPONSIVE THAN YOU ARE."]);
jerstern.conversations.push(Convo_1_3);

var Convo_1_4 = new Conversation(1);
Convo_1_4.modules.push(["Alright, so let's just assume for a second that you're me and I'm you.",
                        "what are you saying now?",
                        "Aaaaaaand apparently I'm not responding.",
                        "sorry, what did you say?",
                        "Wow. I'm a terrible person."]);
Convo_1_4.modules.push(["I think you mean \"What am I saying?\"",
                        "isn't that what I...?",
                        "Because we're each other in this scenario.",
                        "I think I actually...",
                        "Dude, if you're not gonna keep up, get out of the race."]);
Convo_1_4.modules.push(["You really don't have a grasp on pronouns.",
                        "if I say so",
                        "How did you pass English class?",
                        "eh, who knows?",
                        "You know, on account of the fact that you apparently don't like using words."]);
jerstern.conversations.push(Convo_1_4);

var Convo_2_1 = new Conversation(2);
Convo_2_1.modules.push(["So did you hear about the thing?",
                        "please be more specific than that.",
                        "You have to have heard about the thing.",
                        "I know not of the thing, actually.",
                        "Alright, I won't tell you about the thing, then."]);
Convo_2_1.modules.push(["The thing is literally the most awesome of things ever.",
                        "I wouldn't really know, honestly.",
                        "Like, of ALL the things, dude. All of them.",
                        "I can't comprehend that many things.",
                        "Wow. Alright. Don't care about all of the things, then."]);
jerstern.conversations.push(Convo_2_1);

var Convo_2_2 = new Conversation(2);
Convo_2_2.modules.push(["I have no idea what I was even talking about. What was I saying?",
                        "you've said a lot of things, actually.",
                        "Man, I don't even remember. I think I might be tired.",
                        "you've tired yourself out with words.",
                        "I'm actually going to go to bed, I think. Thanks for being no help."]);
Convo_2_2.modules.push(["Don't I always, though?",
                        "yeah, you're a right chatterbox.",
                        "I mean, when am I ever NOT losing my way with words?",
                        "honestly can't think of a time.",
                        "Boppity boopity beep bop boop. I can't with the stuff. Gonna leave now bye."]);
jerstern.conversations.push(Convo_2_2);

var Convo_2_3 = new Conversation(2);
Convo_2_3.modules.push(["OH! Did I mention that I'm getting a new car?",
                        "dude, I thought you couldn't drive.",
                        "For serious, though. New car. So legit.",
                        "do you even have your license?",
                        "ALRIGHT YOU CAUGHT ME I WAS LYING GOSH."]);
Convo_2_3.modules.push(["Nah, I totes can't drive. I'm just pulling your leg.",
                        "wow. I believed you, too.",
                        "Not literally, though. That... that would be weird.",
                        "just a little. or a lot, actually.",
                        "Although I might if you continue to not answer me. Like, I might ACTUALLY draw and quarter you."]);
jerstern.conversations.push(Convo_2_3);

var Convo_2_4 = new Conversation(2);
Convo_2_4.modules.push(["Did I ever tell you about the time I did that thing?",
                        "you're always vague, so maybe.",
                        "The thing at the place with the guy?",
                        "oh, that thing. of course.",
                        "You know, the one where YOU'RE DISAPPEAR FOR NO REASON. Jerk."]);
Convo_2_4.modules.push(["Wasn't it a great story?",
                        "the greatest story. really. top notch.",
                        "You do remember the story, right?",
                        "uhm, yeah. sure. totally. that one.",
                        "DUDE. Do you ever pay attention? What the hell, bro."]);
jerstern.conversations.push(Convo_2_4);

var Convo_3_1 = new Conversation(3);
Convo_3_1.modules.push(["Hey, did you see that one anime about the girl with the pink hair? \"Sakura-kun no Baka Gaigen\"?",
                        "That anime? That anime is complete and utter trash.",
                        "Dude, it's soooooooo good.",
                        "I actually thought it was bad. You have bad taste.",
                        "You're no fun."]);
Convo_3_1.modules.push(["HOW DARE YOU SAY THAT ABOUT AN ANIME I JUST MADE UP.",
                        "Because it's--hold on, you... you what? I thought...",
                        "Yeah. I tricked you.",
                        "Wait. You... you did what? I thought it was...",
                        "Yeah, that's right. Leave. LEAVE YOU FALSE WEABOO."]);
Convo_3_1.modules.push(["Wow. What a poser. I caught you in the act. You probably don't even know what anime is.",
                        "I... uh... I was kidding. Definitely kidding.",
                        "Don't worry, I've known for a while.",
                        "Uhm... no, I... I was kidding...? Yeah. Kidding.",
                        "Though, now that I think about it, we can't be friends anymore."]);
jerstern.conversations.push(Convo_3_1);

var Convo_3_2 = new Conversation(3);
Convo_3_2.modules.push(["So I've been thinking. What do you think squirrels dream about?",
                        "Uhm, nuts? Probably nuts. Or bird feeders.",
                        "Like... what do squirrels even do?",
                        "Hunt nuts? Climb trees? Raid bird feeders?",
                        "Did you leave to like... run tests to find out or something? Weirdo."]);
Convo_3_2.modules.push(["Man, I hate when squirrels get all up in my bird feeder.",
                        "Squirrels are literally the scourge of suburbia.",
                        "They just eat EVERYTHING, dude.",
                        "I know. I hate them, too. Damn nuisance.",
                        "OH GOD. THEY ATE YOU TOO. Oh, wait, you're just an unresponsive jerkface."]);
jerstern.conversations.push(Convo_3_2);

var Convo_3_3 = new Conversation(3);
Convo_3_3.modules.push(["So anyway, how 'bout them bees?",
                        "What's this about bees? I don't like bees.",
                        "Y'know the ones. They pollinate the flowers.",
                        "Uhm. Yeah. And then randomly sting you.",
                        "And sting people who don't pay attention to their friends."]);
Convo_3_3.modules.push(["You aren't even allergic to bees.",
                        "Doesn't mean I want them near me, man.",
                        "Like, you're more allergic to chapstick than bees.",
                        "I'd like to think Burt's Bees counts.",
                        "I'm going to rub chapstick on your face for not responding to me, actually."]);
jerstern.conversations.push(Convo_3_3);

var Convo_3_4 = new Conversation(3);
Convo_3_4.modules.push(["Eww, gross. I just accidentally drank sour milk.",
                        "Dude, why is that in your fridge still?",
                        "Oh god my taste buds are yelling at me.",
                        "Don't leave expired milk in your fridge.",
                        "I'm gonna go die now, not that you care."]);
Convo_3_4.modules.push(["I'M NOT GOOD WITH EXPIRATION DATES.",
                        "At least you keep your fridge stocked.",
                        "Though I guess I figured out when your expiration date is. Did you like, die over there?",
                        "Nah, sorry. Just got a lot on my mind.",
                        "I'm gonna take that as a \"yes\" I think. I knew you well."]);
jerstern.conversations.push(Convo_3_4);

var Convo_4_1 = new Conversation(4);
Convo_4_1.modules.push(["Bro! Guess what I just found out!",
                        "You're actually adopted? The moon isn't made of cheese? Vertigo jokes aren't funny?",
                        "Seriously, though. Guess.",
                        "Uhm... mayonaise isn't an instrument? Making fun of your own disabilities gets old?",
                        "Alright fine, don't guess."]);
Convo_4_1.modules.push(["MY VERTIGO JOKES ARE HILARIOUS, DON'T YOU EVEN START.",
                        "Dude, they're glorified dad jokes. You don't even have kids yet.",
                        "I only make like seven or eight in a day. That's not overdone.",
                        "Seriously, new jokes won't kill you. Everyone will benefit.",
                        "Alright, whatever. I don't need to stand for this. And I probably can't, anyway."]);
jerstern.conversations.push(Convo_4_1);

var Convo_4_2 = new Conversation(4);
Convo_4_2.modules.push(["Hold on. Revelation. Bacon underwater. Genius idea?",
                        "I literally cannot think of a single idea that is worse than that one.",
                        "I mean, maybe it sounds better than it actually is. But maybe not.",
                        "Dude, it doesn't even sound that good, honestly. Kinda gross.",
                        "Whatever, bro, I'm just gonna go give it a try."]);
Convo_4_2.modules.push(["I hear you; I must, however, respectfully disagree.",
                        "That's you prerogative, I guess. Whatever you say, bro.",
                        "Though I might be inclined to disrespectfully disagree.",
                        "Sorry, didn't mean to ignore you. Just a little busy.",
                        "Douche."]);
jerstern.conversations.push(Convo_4_2);

var Convo_4_3 = new Conversation(4);
Convo_4_3.modules.push(["Hear me out for a sec, though? Alright so... why don't they call peas \"green beans\"?",
                        "Uhm. Because peas aren't legumes? I don't think so, at least.",
                        "Like, that's basically what they are, right? But \"green beans\" are something else.",
                        "I don't think peas are technically beans. Not sure, though.",
                        "You are literally no help."]);
Convo_4_3.modules.push(["What makes a bean a bean, though?",
                        "I think the fact that it grows in the ground? Hmm...",
                        "Like, why aren't peanuts beans?",
                        "You know, you DO ask some good questions sometimes.",
                        "Dude, I can't handle this right now. I need to find answers."]);
jerstern.conversations.push(Convo_4_3);

var Convo_4_4 = new Conversation(4);
Convo_4_4.modules.push(["God damn, dude. Why is it that every time there's a Blood Moon, the clouds block it?",
                        "Because the universe hates you, maybe? Or...",
                        "Like, did I do something wrong? Do I deserve this?",
                        "Perhaps you have terrible karma. Or maybe...",
                        "This is my time of need, man. C'mon. Don't leave me hanging."]);
Convo_4_4.modules.push(["What? Or what?",
                        "Perhaps the Weather Machine is to blame? I dunno.",
                        "SPIT IT OUT, MAN.",
                        "Could it be the Weather Machine? Shirley's doing?",
                        "YOU ARE LITERALLY THE WORST FOR LEAVING ME GUESSING LIKE THIS. AAAAAGGHH."]);
jerstern.conversations.push(Convo_4_4);

