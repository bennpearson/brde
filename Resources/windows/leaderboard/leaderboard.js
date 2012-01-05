var win = Titanium.UI.currentWindow;

win.hideNavBar();

var toolbar = Titanium.UI.createView({
	backgroundImage:'../../img/logo.jpg',
	height: 44,
	left: 0,
	right: 0,
	top:0,
	zIndex:5
});

win.add(toolbar);
