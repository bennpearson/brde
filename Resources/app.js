// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({    
	url:'/windows/scorecard/scorecard.js',
    title:'Scorecard - St Andrews',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Scorecard',
    window:win1
});
var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Scorecard: Joe Bloggs',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

//win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({    
	url:'/windows/map/map.js',
    title:'Map',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Map',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Map',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

//
// create controls tab and root window
//
var win3 = Titanium.UI.createWindow({    
	url:'/windows/leaderboard/leaderboard.js',
    title:'Leaderboard',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Leaderboard',
    window:win3
});

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'Leaderboard',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win3.add(label3);

//
// create controls tab and root window
//
var win4 = Titanium.UI.createWindow({
	url:'/windows/more/more.js',  
    title:'More',
    backgroundColor:'#fff'
});
var tab4 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'More',
    window:win4
});

var label4 = Titanium.UI.createLabel({
	color:'#999',
	text:'More',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win4.add(label4);

/*win5 = Titanium.UI.createWindow({
	url:'/windows/scorecard/register.js', 
    title:'Register',
    backgroundColor:'#fff' 	
});
var tab5 = Titanium.UI.createTab({
    icon:'KS_nav_ui.png',
    title:'Register',
    window:win5	
});*/

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2); 
tabGroup.addTab(tab3); 
//tabGroup.addTab(tab5);  
tabGroup.addTab(tab4);


// open tab group
// open tab group
tabGroup.open({
        modal: true, 
        modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
        modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_PAGESHEET,
        navBarHidden : true
});