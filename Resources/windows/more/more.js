var win = Titanium.UI.currentWindow;

win.hideNavBar();

var data = [
{ title: 'Select Course' },
{ title: 'Settings' },
{ title: 'Help' }
];

var tableView = Titanium.UI.createTableView({data:data, style:Titanium.UI.iPhone.TableViewStyle.GROUPED, top:44});

var toolbar = Titanium.UI.createView({
	backgroundImage:'../../img/logo.jpg',
	height: 44,
	left: 0,
	right: 0,
	top:0,
	zIndex:5
});

win.add(tableView);
win.add(toolbar);
