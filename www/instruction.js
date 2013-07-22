var win = Titanium.UI.currentWindow;
//win.orientationModes = [Titanium.UI.LANDSCAPE_LEFT, Titanium.UI.LANDSCAPE_RIGHT];
//Titanium.UI.orientation = Titanium.UI.LANDSCAPE_LEFT;
var tabGroup = win.tabGroup;

// Set the basic look and feel UI
//win.title = 'Games';
win.navBarHidden = true;
win.fullscreen = true;
win.backgroundImage = 'images/bg.png';
win.barImage = '';

Titanium.UI.orientation = Titanium.UI.LANDSCAPE_RIGHT;

var lblheading = Titanium.UI.createLabel({
	text : 'Welcome to the UAE Travel Game.',
	height : 'auto',
	width : 480,
	color : '#402609',
	font : {
		fontSize : 16,
		fontFamily : 'arial'
	},
	textAlign : 'center',
	top : 50
});

win.add(lblheading);

var scrollView = Titanium.UI.createScrollView({
	contentWidth : 450,
	contentHeight : 'auto',
	height : 180,
	width : 450,
	top : 70,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : false
});

var lblcontent1 = Titanium.UI.createLabel({
	text : 'Your objective is to successfully travel through  the United Arab Emirates by correctly answering questions  on attractions in each of the seven Emirates.',
	height : 'auto',
	width : 445,
	color : '#402609',
	font : {
		fontSize : 16,
		fontFamily : 'arial'
	},
	textAlign : 'center',
	top : 10
});

var imageView = Ti.UI.createImageView({
	top : 70,
	height : 62,
	width : 62,
	left : 5,
	image : 'images/abudhabi3.png'
});
scrollView.add(imageView);

var lblcontent2 = Titanium.UI.createLabel({
	text : 'An attraction is represented by an image. Click on the image to find out a little more about that attraction.',
	left : 70,
	height : 'auto',
	width : 380,
	color : '#402609',
	font : {
		fontSize : 16,
		fontFamily : 'arial'
	},
	textAlign : 'left',
	top : 80
});

var imageView2 = Ti.UI.createImageView({
	top : 145,
	height : 34,
	width : 35,
	left : 25,
	image : 'images/peg.png'
});
scrollView.add(imageView2);

var lblcontent3 = Titanium.UI.createLabel({
	text : 'Click on the camel to open the Question Box. Click on the image related to that question. If your answer is correct, you will advance to the next Rest Stop with 20 points.   A wrong answer will take you back to the start of the game for another try.',
	height : 'auto',
	width : 380,
	color : '#402609',
	left : 70,
	font : {
		fontSize : 16,
		fontFamily : 'arial'
	},
	textAlign : 'left',
	top : 140
});

var lblcontent4 = Titanium.UI.createLabel({
	text : 'Click on the treasure icon for a bonus question and a chance at some bonus points. Answer the question right to try your luck at taking the buried treasure worth 20 points from the cave in 10 seconds before the doors close in on you.',
	height : 'auto',
	width : 378,
	left : 70,
	color : '#402609',
	font : {
		fontSize : 16,
		fontFamily : 'arial'
	},
	textAlign : 'left',
	top : 250
});

var imageView3 = Ti.UI.createImageView({
	top : 280,
	height : 25,
	width : 25,
	left : 25,
	image : 'images/smalltreasure.png'
});
scrollView.add(imageView3);

scrollView.add(lblcontent1);
scrollView.add(lblcontent2);
scrollView.add(lblcontent3);
scrollView.add(lblcontent4);
//scrollView.add(lblcontent5);

win.add(scrollView);

var btnBegin = Titanium.UI.createButton({
	backgroundImage : 'images/begin.png',
	top : 265,
	left : 380,
	height : 38,
	width : 98
});

win.add(btnBegin);
btnBegin.addEventListener('click', function(e) {
	Ti.App.fireEvent('scenario');
	win.close({
		animated : true
	});
});
