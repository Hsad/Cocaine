var terernce = new Person("Terernce Ferer", res.terrncePNG);

/*
Each character should have 5 difficulty levels worth of conversations,
with at least 3 different conversations per difficulty level of at least
2-3 modules each

Conversations are modular; each conversation is broken up into 5 line
segments (called modules) that the player must proceed through. Conversations
are laid out as follows:

Module 1 {[
			"What's up?",                       // Question 1. The player is then given a response to type...
			"Not much, you?",                   // Response 1. If the player answers the question in time, the conversation 
												//             proceeds to the next module. If they do not respond in time, however...
			"How's school going?",              // Question 2. The game sends another response over. The player then has time to answer again...
			"Pretty good, you?",                // Response 2. If the player answers this question correctly then they move onto the next module. Otherwise...
			"You seem busy, we'll talk later."  // Failure. The conversation ends and the player can no longer respond
			]};
*/

/* Initializing Conversations */
var lvlOneConvoOne = new Conversation(1);
var lvlOneConvoTwo = new Conversation(1);
var lvlOneConvoThree = new Conversation(1);

var lvlTwoConvoOne = new Conversation(1);
var lvlTwoConvoTwo = new Conversation(1);
var lvlTwoConvoThree = new Conversation(1);

var lvlThreeConvoOne = new Conversation(1);
var lvlThreeConvoTwo = new Conversation(1);
var lvlThreeConvoThree = new Conversation(1);

var lvlFourConvoOne = new Conversation(1);
var lvlFourConvoTwo = new Conversation(1);
var lvlFourConvoThree = new Conversation(1);

var lvlFiveConvoOne = new Conversation(1);
var lvlFiveConvoTwo = new Conversation(1);
var lvlFiveConvoThree = new Conversation(1);

/* LEVEL ONE CONVERSATIONS */

/* Conversation One */
lvlOneConvoOne.modules.push([ 
							"Hey, what's up?",
							"Not much, you?",
							"How're classes this semester?",
							"Eh, been better. You?",
							"You seem busy, we'll talk later."
							]);
							
lvlOneConvoOne.modules.push([ 
							"Haha been better. How many classes you taking?",
							"Only four. 16 credits.",
							"Better question, how many credits?",
							"16 this semester, four classes.",
							"Haha probably a lot, considering your response time. ttyl"
							]);
							
lvlOneConvoOne.modules.push([
							"I'm on 20 credits with Op Sys; bad idea.",
							"Yeah, learning C has been interesting.",
							"And if so, any idea what's on the midterm?",
							"No clue haha, I need to study.",
							"Screw this, I'm studying. Peace."
							]);
							
/* Conversation Two */
lvlOneConvoTwo.modules.push([
							"Yo, you hear about Commons?",
							"No, what happened?",
							"The thing about the french fries?",
							"Don't ruin fries for me.",
							"Guess you did lol, later"
							]);
							
lvlOneConvoTwo.modules.push([
							"Apparently they're not even potato-based. Crazy, right?",
							"Dude what? How does that work?",
							"Like what works as a potato substitute?",
							"Beats me, yams maybe?",
							"Looks like someone already ate the fries haha, see you around."
							]);
							
lvlOneConvoTwo.modules.push([
							"Maybe they're testing military stuff on us.",
							"Wouldn't put it past Sodexo.",
							"Could be field rations or something.",
							"I'd rather eat those at this point.",
							"I'm peacing. Don't choke on the fries."
							]);
							
/* Conversation Three */
lvlOneConvoThree.modules.push([
							"Yo, you catch the pats game last night?",
							"No, I'm not a football fan.",
							"Gronk's back, dude!",
							"Gronk? I don't follow football.",
							"Guess you're afk? Oh well."
							]);
							
lvlOneConvoThree.modules.push([
							"Dude how can you dislike football?",
							"I dunno, it kinda bores me.",
							"It's modern gladiator combat!",
							"Yeah, minus the weapons and beasts.",
							"You're missing out bro, peace."
							]);
							
lvlOneConvoThree.modules.push([
							"You're missing the point, it's all about the human condition!",
							"Concussions and meatheads, yay humans.",
							"Human physicality and savagery distilled into sport!",
							"You're like unhealthily into this, dude.",
							"Bet you don't even like sports, nerd."
							]);
							
terernce.conversations.push(lvlOneConvoOne);
terernce.conversations.push(lvlOneConvoTwo);
terernce.conversations.push(lvlOneConvoThree);

/* LEVEL TWO CONVERSATIONS */

/* Conversation One */
lvlTwoConvoOne.modules.push([
							"Sorry if I seem a little out of it, haven't slept yet haha.",
							"What? Why were you up so late :(",
							"Time management is important, who would've guessed?",
							"Yep, first thing I learned at this school haha.",
							"Ugh, I'm late again. See ya."
							]);
							
lvlTwoConvoOne.modules.push([
							"Freaking Programming Languages, man. That homework is miserable.",
							"You're telling me. Functional programming is the devil's handiwork.",
							"You hear people saying it's the hardest Comp Sci class?",
							"Yeah, they weren't kidding. I'm a little scared for what comes after it haha.",
							"I'm going to nap, later."
							]);

lvlTwoConvoOne.modules.push([
							"Oh well, at least we'll be making good money once we graduate.",
							"Yeah, the real world can't be much harder than this... can it?",
							"IF we graduate, haha.",
							"Dude don't jinx it, I need all the luck I can get to make it out of here.",
							"zzzzz... later."
							]);

/* Conversation Two */
lvlTwoConvoTwo.modules.push([
							"Ugh I slept in again, were you in class?",
							"Dude you've gotta stop doing that, you're gonna fail the course haha.",
							"And if so, do you have notes from lecture I can copy?",
							"I sort of do, I dozed off for a little over a half an hour in the middle.",
							"Fine, guess I'll get them from someone else.",
							]);
							
lvlTwoConvoTwo.modules.push([
							"Can I pick up the notes you have at some point?",
							"Sure, I'm in class until around four today, wanna meet in the Union after?",
							"Please? I really need to do well in this course.",
							"Yeah, if it'll help you get your act together then sure. Union at four?",
							"Yeesh, some friend you are. I'll find them somewhere else."
							]);
							
lvlTwoConvoTwo.modules.push([
							"Thanks man, I really owe you one.",
							"Yeah, you can pay me back in food or steam credit, I'm not picky.",
							"Is there anything I can do to repay you?",
							"Dude don't phrase it like that, you're gonna make it weird. We're square.",
							"Silent protector of my grades, I guess. Thanks again."
							]);
							
/* Conversation Three */
lvlTwoConvoThree.modules.push([
							"You been to the new burger place in the Rathskellar yet?",
							"Not yet, I haven't really been buying a lot of food this semester.",
							"The burger place?",
							"I've heard of it, haven't had a chance to go and eat there yet.",
							"Gotta go, see ya."
							]);
							
lvlTwoConvoThree.modules.push([
							"The name of the place is kinda ridiculous haha.",
							"Yeah, Mega Burger sounds like a generic brand you'd see in a TV show haha.",
							"Like honestly, Mega Burger? Really?",
							"Yeah, it sounds like something out of a really bad TV show haha.",
							"You seem distracted, we'll talk later."
							]);
							
lvlTwoConvoThree.modules.push([
							"But seriously, I'm just happy there's a burger place outside of the dining halls.",
							"Yeah, I've heard mixed reviews about the speed of service though. My friend said he waited 20 minutes there.",
							"Do you know anyone else who's had a chance to go there yet?",
							"Yeah, reviews are mixed. My friend said he went there and the food was good, but took a while.",
							"Whatever, I'll see you around."
							]);
							
terernce.conversations.push(lvlTwoConvoOne);
terernce.conversations.push(lvlTwoConvoTwo);
terernce.conversations.push(lvlTwoConvoThree);
							
/* LEVEL THREE CONVERSATIONS */

/* Conversation One */