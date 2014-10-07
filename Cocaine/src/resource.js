var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
	
	
	//our images
	chatCleanPNG : "res/chat.png",
	//Background stuff
	wallFeedPNG : "res/wallUp.png",
	friendListPNG : "res/friendList.png",
	feedPNG : "res/feed.png",
	postTopPNG : "res/post_top.png",
	postMidPNG : "res/post_middle.png",
	postBotPNG : "res/post_bottom.png",

    bgPNG : "res/background_happy.png",
	
	//profile pictures
	dershPNG : "res/dersh.png",
	sperncerPNG : "res/sperncer.png",
	tererncePNG : "res/terrnce.png",
	jersternPNG : "res/jerstin.png",
	dervernPNG : "res/dervin.png",
	mercPNG : "res/derctermerc.png",
	bernPNG : "res/berncherng.png",
	
	//chat bubbles
	playerBubbleBottomPNG : "res/you_chat_bottom.png",
	playerBubbleMiddlePNG : "res/you_chat_middle.png",
	playerBubbleTopPNG : "res/you_chat_top.png",
	otherBubbleBottomPNG : "res/other_person_chat_bottom.png",
	otherBubbleMiddlePNG : "res/other_person_chat_middle.png",
	otherBubbleTopPNG : "res/other_person_chat_top.png",
    
    
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
g_resources.push({
    type:"font",
    name:"Idolwild",
    srcs:["res/idolwild-webfont.eot", "res/idolwild.ttf"]
});

