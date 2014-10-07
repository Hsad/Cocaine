allPeople = [];

function Person(_name, _proPic ){
	this.name = _name
	this.profilePic = _proPic;
	//an array of strings perhaps??????
	this.posts = [];
	//an array of conversation objects
	this.conversations = [];
	allPeople.push(this);
}

function Conversation(_difficulty) {
	//each conversation has several modules, each of those containing 3 Questions and
	// 2 responses from the player. modules is a list of lists of strings.
	this.modules = [];
	//"Default Q1","Default R1,","Default Q2","Default R2","Default Q3"]
	
	//an integer denoting how hard the conversation is starting at 1 being easiest
	this.difficulty = _difficulty;
}