var win = Titanium.UI.currentWindow;

var data = [
{ title: 'Select Course' },
{ title: 'Language' },
{ title: 'Settings' },
{ title: 'Help' },
];

var tableView = Titanium.UI.createTableView({data:data, style:Titanium.UI.iPhone.TableViewStyle.GROUPED});

win.add(tableView);
