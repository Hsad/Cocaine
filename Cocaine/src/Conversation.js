function Conversation() {
	//each conversation has several modules, each of those containing 3 Questions and
	// 2 responses from the player
	this.modules = [],
	
	//an integer between 1 and 6 denoting how hard the conversation is
	this.difficulty = 0
}

var Module = {
	//the Qs are the messages from this person, the Rs are the player responses
	Q1: "Q1 not set",
	R1: "R1 not set",
	Q2: "Q2 not set",
	R2: "R2 not set",
	Q3: "Q3 not set"
}