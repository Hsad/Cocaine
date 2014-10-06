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
lvlThreeConvoOne.modules.push([ // Note: Chipotle is fucking better. --Terence
							"Alright, Moe's or Chipotle?",
							"Dude Chipotle no question, Moe's has queso but the meat and vegetables at Chipotle are always so much better.",
							"You've gotta have an opinion on this, right?",
							"Well yeah dude, Chipotle is the objectively better choice. Especially considering the Moe's on campus is run by Sodexo.",
							"Guess you're not a mexican food guy. Bye.",
							]);
							
lvlThreeConvoOne.modules.push([
							"Well yeah, but you've gotta factor in the menu diversity that Moe's has.",
							"What, taco stack? Dude, the quesarito is infinitely tastier and doesn't taste like the awful cheese that Moe's uses.",
							"Like, what answer does Chipotle have to the taco stack?",
							"The taco stack is literally the only thing that Moe's does differently, and Chipotle has the quesarito to counter that.",
							"No answer? Guess I win then."
							]);
							
lvlThreeConvoOne.modules.push([
							"Dude, it's just a double wrapped burrito with extra cheese. What's the difference?",
							"Look, if you don't understand why Chipotle is better at this point, then you're clearly already too far gone to save.",
							"Like even the texture is the same if you aren't deliberately trying to notice it.",
							"Bro it still all comes down to ingredients. Even the burrito bowl is infinitely better than anything Moe's has, and it doesn't even have a tortilla.",
							"Avoiding the important questions? Real mature. I win, later."
							]);
							
/* Conversation Two */
lvlThreeConvoTwo.modules.push([
							"LOL did you hear about Tommy?",
							"No, but knowing him whatever you're about to tell me is going to be something colossally stupid that he did. What happened?",
							"I swear he's really outdone himself this time.",
							"Okay, I'll bite. What did our favorite moron do this time?",
							"Cool, ignore my news about our friend. Bye."
							]);
							
lvlThreeConvoTwo.modules.push([
							"He spent last night in the emergency room!",
							"Let me guess, did he do something stupid involving alcohol and that damn longboard again?",
							"Three guesses to what happened, first two don't count.",
							"Only need the one, we all know how obssessed he's been with that stupid longboard this semester.",
							"Whatever, guess you don't need to know anyway."
							]);
							
lvlThreeConvoTwo.modules.push([
							"Not really much of a shocker, is it.",
							"Well yeah, that kid's like a human giraffe. He barely has the sense of balance to walk straight normally, much less ride a long board.",
							"Oh well, the nurses said he'll be fine.",
							"Honestly I'm not even surprised; that kid has to have an entire squadron of guardian angels on call the way he manages to escape serious trouble.",
							"Not that you care... later."
							]);

/* Conversation Three */
lvlThreeConvoThree.modules.push([
							"Dude are you a comic book fan?",
							"Nah, I only really follow the new Batman comics, Marvel's Ultimate Universes, Teen Titans, and... yeah, I'm a comic book guy.",
							"No offense, you kind of seem like type haha.",
							"Honestly, if I didn't completely agree with you I'd probably be kind of upset with you right now.",
							"Offense taken, I guess. My bad, see ya dude."
							]);
							
lvlThreeConvoThree.modules.push([
							"So you know about new show coming out, right?",
							"Of course I do, dude! I've been watching Arrow since it started airing on the CW, and the Flash is basically one of the best DC heroes ever.",
							"The Flash?",
							"Dude words cannot describe how excited I am for that premiere, as well as Arrow's return. I'm a bit worried about Arrow going downhill though.",
							"Well, you're welcome, it's happening. Later dude."
							]);
							
lvlThreeConvoThree.modules.push([
							"Yeah, the romantic tension they've been throwing around all of last season is kind of annoying.",
							"Ugh, you're telling me. Every time anyone important falls in love with a supporting character they have to kill off the support to keep the show interesting.",
							"Dunno how much longer I'm gonna watch if it gets any more soapy.",
							"I feel you, they need to focus more on the whole 'hero' thing and less on all of the namby pamby inter-character relations. It's killing the mood.",
							"Oh well, I guess you don't care that much. Peace."
							]);
						
terernce.conversations.push(lvlThreeConvoOne);
terernce.conversations.push(lvlThreeConvoTwo);
terernce.conversations.push(lvlThreeConvoThree);
						
/* LEVEL FOUR CONVERSATIONS */ 

/* Conversation One */
lvlFourConvoOne.modules.push([
							"Hey, where are you living this year?",
							"I'm on an apartment off campus, like three blocks away from the alumni house. Honestly it's one of the best decisions I've made since I got here.",
							"Apartment or Campus Housing?",
							"Oh man, I'm so done with living on campus. I took the plunge and got an apartment this semester, and honestly I couldn't be happier.",
							"Guess I came off kinda stalker-y, see ya."
							]);
							
lvlFourConvoOne.modules.push([
							"Yeah? What's it like living on your own?",
							"It's great most of the time, but there are definitely some parts of the real world I wasn't adequately prepared for haha.",
							"Feeling adult yet?",
							"Yeah, there's definitely a whole lot to living on your own that I didn't really consider before I moved in here. Food, cleaning, etc.",
							"Adult enough to ignore me, I suppose... bye."
							]);
							
lvlFourConvoOne.modules.push([
							"Haha cooking for yourself now?",
							"Yeah dude, turns out having a non-stick pan and chicken breast means you can make just about anything on the planet. It's truly amazing.",
							"Or are you just getting take-out all the time?",
							"Nah dude, part of the reason I moved off campus was to save money. If I spent all the money I saved by living here on pizza it wouldn't really be worth it haha.",
							"Maybe the internet at your place sucks too? It's certainly been iffy on campus. See you around."
							]);
							
/* Conversation Two */
lvlFourConvoTwo.modules.push([
							"Ugh, I gotta start hitting the gym. You work out?",
							"Haha only the bare minimum. I caught myself putting on a bit of weight last year and I've been walking to places more and eating out as little as possible.",
							"Like anything at all?",
							"I dunno, I've been trying to get back into my routine that I had going on my freshman year, but classes keep getting away of going to the gym with people.",
							"Sweet, ignore a brother who's looking for help. Later."
							]);
							
lvlFourConvoTwo.modules.push([
							"Hey, looks like we've got a common goal, wanna start heading to the gym together?",
							"I dunno, I've always been better at working out alone. I tend to just plug in music and space out so I forget how much of a drag it is to exert myself :P",
							"Even only once or twice a week?",
							"I dunno, I've always felt more comfortable working out alone. Maybe it's me being self-conscious, but I always feel like I'm getting more done that way.",
							"Or never. Later, jerk."
							]);
							
lvlFourConvoTwo.modules.push([
							"Alright, if you don't want to go together, any tips for losing weight?",
							"The fastest way also sucks the most; running. If you don't want to use the treadmill or elliptical, swimming is also a low-impact, high calorie burner.",
							"Like just some simple stuff?",
							"It's all about calories in < calories out, dude. Doing lots of cardio like running or swimming and eating right will let your weight drop like a stone.",
							"Not one tip? I thought we were friends. Bye."
							]);
							
/* Conversation Three */
lvlFourConvoThree.modules.push([
							"Dude, is Chicken Bacon Ranch just a New York thing?",
							"I dunno, I've seen stuff like Chicken Bacon Ranch subs and pizzas available to buy near places at home, but they're nowhere near as popular as they are here.",
							"Like seriously, it can't be just me that notices how popular the stuff is here, right?",
							"Yeah, I feel you on that. It's like no one ever really wants to get anything else unless they don't like chicken or they're trying to lose weight or something.",
							"Guess you don't care as much as I do... peace."
							]);
							
lvlFourConvoThree.modules.push([
							"What do people tend to get where you live?",
							"My hometown is biiiiig on buffalo chicken everything, especially pizzas and calzones. It helps that there are two pizza places at home that make incredible buff chick stuff.",
							"Or do you not eat out a lot at home?",
							"Don't get me wrong, my parents are great cooks, but getting buffalo chicken pizza and calzones at home is one of the things I look forward to most when I head back home from school.",
							"Or maybe you just don't eat at all, cause you're dead to me. Bye.",
							]);
							
lvlFourConvoThree.modules.push([
							"Buffalo Chicken? Everyone I know at home is a meat lover's or chicken parm kinda guy.",
							"I'll be honest, I'm not really a fan of the big clumps of mozzarella places tend to put on chicken parm pizza, and meat lover's is just way too much salt for me to handle.",
							"Do you ever get anything like that?",
							"Eh, it's not really my thing. I'm the kind of person that finds something they like at a restaurant and just gets that every single time they go there (unless I see someone try something tastier).",
							"Guess you're not as hungry as I am, haha. See ya."
							]);
							
terernce.conversations.push(lvlThreeConvoOne);
terernce.conversations.push(lvlThreeConvoTwo);
terernce.conversations.push(lvlThreeConvoThree);