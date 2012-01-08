//is it Android or iPhone??
if (Ti.Platform.osname == 'android')
{
    Titanium.UI.setBackgroundColor('#000');
    
    var win = Titanium.UI.currentWindow;
    win.top = 0;
	win.height = 390;
	win.width = 320;
	win.backgroundImage = 'Images/back.jpg';
    
    var number = Ti.UI.currentWindow.number;
	
    var advertView = Ti.UI.createView({
        top: 10,
        left: 10,
        height:100,
        width: 300,
		backgroundImage: 'Images/advert.png'
    });
    
    var scoreView = Ti.UI.createView({
		top: 120,
		height: 260,
		width: 300
    });
    
    var TheTable = Titanium.UI.createTableView({
        scoreView:scoreView,
        top: 120,
        height: 260,
        width: 280   
    });
    
    var CustomData = [ 
    { rank:'10', playerName:"Robert Gapper", scoreData:'100', urlink:'testMe.js' },
    { rank:'9', playerName:"Robert Gapper", scoreData:'98', urlink:'testMe.js' },
    { rank:'8', playerName:"Robert Gapper", scoreData:'97', urlink:'testMe.js' },
    { rank:'7', playerName:"Robert Gapper", scoreData:'90', urlink:'testMe.js' },
    { rank:'6', playerName:"Robert Gapper", scoreData:'89', urlink:'testMe.js' },
    { rank:'5', playerName:"Robert Gapper", scoreData:'88', urlink:'testMe.js' },
    { rank:'4', playerName:"Robert Gapper", scoreData:'85', urlink:'testMe.js' },
    { rank:'3', playerName:"Robert Gapper", scoreData:'84', urlink:'testMe.js' },
    { rank:'2', playerName:"Robert Gapper", scoreData:'83', urlink:'testMe.js' },
    { rank:'1', playerName:"Robert Gapper", scoreData:'80', urlink:'testMe.js' },
    ];

    var data=[];
	for (var i = CustomData.length - 1; i >= 0; i--) {
        
        var row = Titanium.UI.createTableViewRow({
        	backgroundImage: 'Images/panel.png',
            backgroundSelectedImage: 'Images/panelOver.png',
            height: 47,
            width: 280 
        });
        
        var rank =  Titanium.UI.createLabel({
            text:CustomData[i].rank,
            top: 5,
            left: 10,
            height: 47,
            font:{fontFamily: 'serif', fontSize:12, fontWeight:'bold'},
            width: 'auto',
            color: '#fff',
            textAlign: 'left'
        });
        var playerName = Titanium.UI.createLabel({
            text:CustomData[i].playerName,
            top: 5,
            left: 55,
            height: 47,
            font:{fontFamily: 'serif', fontSize:16},
            width: 'auto',
            color: '#fff',
            textAlign: 'left'
        });
        var scoreData =  Titanium.UI.createLabel({
            text:CustomData[i].scoreData,
            top: 5,
            left: 220,
            height: 47,
            font:{fontFamily: 'serif', fontSize:12, fontWeight:'bold'},
            width: 'auto',
            color: '#fff',
            textAlign: 'left'
        });
        
        row.add(rank);
        row.add(playerName);
        row.add(scoreData);
        row.className = 'Leader_row'; 
   		row.urlink = CustomData[i].urlink;
  		
        data.push(row);
        
        // create table view event listener
		row.addEventListener('click', function(e)
		{
			if (e.rowData.urlink)
			{
				//Titanium.API.info("You clicked the button");
				var win = Titanium.UI.createWindow({
					url:e.rowData.urlink,
				});
				Titanium.UI.currentTab.open(win,{animated:true});
			}
		});
		//endEvent      
    };
    
} else if (Ti.Platform.osname == "iphone")
{
	


    Titanium.UI.setBackgroundColor('#000');
    
    var win = Titanium.UI.currentWindow;
    win.top = 0;
	win.height = 390;
	win.width = 320;
	win.backgroundImage = 'Images/back.jpg';

	win.hideNavBar();

var toolbar = Titanium.UI.createView({
	backgroundImage:'../../img/navbar_bg_leader.png',
	height: 66,
	left: 0,
	right: 0,
	top:0,
	zIndex:5
});

win.add(toolbar);
    
    var number = Ti.UI.currentWindow.number;
	
    var advertView = Ti.UI.createView({
        top: 50,
        left: 10,
        height:100,
        width: 300,
		backgroundImage: 'Images/advert.png'
    });
    
    var scoreView = Ti.UI.createView({
		top: 160,
		height: 220,
		width: 300
    });
    
    var TheTable = Titanium.UI.createTableView({
        scoreView:scoreView,
        top: 160,
        height: 230,
        width: 280,
        backgroundColor:'#000',
    });
    
    var CustomData = [ 
    { rank:'10', playerName:"Robert Gapper", scoreData:'100', urlink:'testMe.js' },
    { rank:'9', playerName:"Robert Gapper", scoreData:'98', urlink:'testMe.js' },
    { rank:'8', playerName:"Robert Gapper", scoreData:'97', urlink:'testMe.js' },
    { rank:'7', playerName:"Robert Gapper", scoreData:'90', urlink:'testMe.js' },
    { rank:'6', playerName:"Robert Gapper", scoreData:'89', urlink:'testMe.js' },
    { rank:'5', playerName:"Robert Gapper", scoreData:'88', urlink:'testMe.js' },
    { rank:'4', playerName:"Robert Gapper", scoreData:'85', urlink:'testMe.js' },
    { rank:'3', playerName:"Robert Gapper", scoreData:'84', urlink:'testMe.js' },
    { rank:'2', playerName:"Paul Fry", scoreData:'83', urlink:'testMe.js' },
    { rank:'1', playerName:"Benn Pearson", scoreData:'80', urlink:'testMe.js' },
    ];

    var data=[];
	for (var i = CustomData.length - 1; i >= 0; i--) {
        
        var row = Titanium.UI.createTableViewRow({
        	backgroundImage: 'Images/panel.png',
            selectedBackgroundImage: 'Images/panelOver.png',
            height: 50,
            width: 280,
        });
        
        var rank =  Titanium.UI.createLabel({
            text:CustomData[i].rank,
            top: 5,
            left: 10,
            height: 47,
            font:{fontFamily: 'serif', fontSize:12, fontWeight:'bold'},
            width: 'auto',
            color: '#fff',
            textAlign: 'left'
        });
        var playerName = Titanium.UI.createLabel({
            text:CustomData[i].playerName,
            top: 5,
            left: 55,
            height: 47,
            font:{fontFamily: 'serif', fontSize:16},
            width: 'auto',
            color: '#fff',
            textAlign: 'left'
        });
        var scoreData =  Titanium.UI.createLabel({
            text:CustomData[i].scoreData,
            top: 5,
            left: 220,
            height: 47,
            font:{fontFamily: 'serif', fontSize:12, fontWeight:'bold'},
            width: 'auto',
            color: '#fff',
            textAlign: 'left'
        });
        
        row.add(rank);
        row.add(playerName);
        row.add(scoreData);
        row.className = 'Leader_row'; 
   		row.urlink = CustomData[i].urlink;
  		
        data.push(row);
        
        // create table view event listener
		row.addEventListener('click', function(e)
		{
			if (e.rowData.urlink)
			{
				//Titanium.API.info("You clicked the button");
				var win = Titanium.UI.createWindow({
					url:e.rowData.urlink,
				});
				Titanium.UI.currentTab.open(win,{animated:true});
			}
		});
		//endEvent      
    };

    
}

TheTable.setData(data);
win.add(TheTable);
win.add(advertView);