var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
	
	
	//our images
	chatCleanPNG : "res/chat.png",
    chat1PNG : "res/cha1.png",
    chat2PNG : "res/cha2.png",
    chat3PNG : "res/cha3.png",
    overlay1PNG : "res/blo.png",
    overlay2PNG : "res/blo2.png",
    overlay3PNG : "res/blo3.png",
    chatClipperPNG : "res/chatclipper.png",
	//Background stuff
	wallFeedPNG : "res/wallUp.png",
	friendListPNG : "res/friendList.png",
	feedPNG : "res/feed.png",
	postTopPNG : "res/post_top.png",
	postMidPNG : "res/post_middle.png",
	postBotPNG : "res/post_bottom.png",
	friendDotGreenPNG : "res/friend_dot_green.png",
	friendDotRedPNG : "res/friend_dot_red.png",

    bgPNG : "res/background_happy.png",
	
	//profile pictures
	dershPNG : "res/dersh.png",
	sperncerPNG : "res/sperncer.png",
	tererncePNG : "res/terrnce.png",
	jersternPNG : "res/jerstin.png",
	dervernPNG : "res/dervin.png",
	mercPNG : "res/derctermerc.png",
	bernPNG : "res/berncherng.png",
    gf1PNG : "res/gf1.png",
    gf2PNG : "res/gf2.png",
    animePNG : "res/anime_enthusiast.png",
    grangranPNG : "res/grangran.png",
    cerfeePNG : "res/cerfee.png",
    lernkPNG : "res/lernk.png",
    zerkPNG : "res/merkerberg.png",
	
	//chat bubbles
	playerBubbleBottomPNG : "res/you_chat_bottom.png",
	playerBubbleMiddlePNG : "res/you_chat_middle.png",
	playerBubbleTopPNG : "res/you_chat_top.png",
	otherBubbleBottomPNG : "res/other_person_chat_bottom.png",
	otherBubbleMiddlePNG : "res/other_person_chat_middle.png",
	otherBubbleTopPNG : "res/other_person_chat_top.png",

	//wall posts
	postBern1PNG : "res/post/Post_Bern_1.png",
	postJerstern1PNG : "res/post/Post_Jerstern_1.png",
    postJerstern2PNG : "res/post/Post_Jerstern_2.png",
    postJerstern3PNG : "res/post/Post_Jerstern_3.png",
    postJerstern4PNG : "res/post/Post_Jerstern_4.png",
    postJerstern5PNG : "res/post/Post_Jerstern_5.png",
    postMerc1PNG : "res/post/Post_Merc_1.png",
    postMerc2PNG : "res/post/Post_Merc_2.png",
    postMerc3PNG : "res/post/Post_Merc_3.png",
    postMerc4PNG : "res/post/Post_Merc_4.png"
    
    
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

