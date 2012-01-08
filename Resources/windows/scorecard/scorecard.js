var win = Titanium.UI.currentWindow;

	win.hideNavBar();

	/*var toolbar = Titanium.UI.createView({
		backgroundImage:'../../img/logo.jpg',
		height: 44,
		left: 0,
		right: 0,
		top:0,
		zIndex:5
	});
	
	win.add(toolbar);*/
	
	var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'scorecard.html');
	var html = file.read().text; 
	
	var loginFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'login.html');
	var loginView = loginFile.read().text; 
	
	var webview = Ti.UI.createWebView({
		html: html,
	    top: 0,
	    left: 0,
	    width: 320
	});
	//setup information...
	win.add(webview);
	
	modalWebWin = Titanium.UI.createWebView({
		html: loginView,
	    top: 150,
	    left: 80,
	    width: 165,
	    height: 155		
	});
	modalWin = Titanium.UI.createWindow();
	modalWin.add(modalWebWin);
	
	
	var loginSubmittedFunction = function (e) {
		var message = "Email: " + e.email + "\n\nPassword: " + e.password;
		alert(message);
		
		var client = Ti.Network.createHTTPClient({
			timeout: 5000,
			onload: function(e) {
				Ti.API.debug(this.responseText);
				var json = JSON.parse(this.responseText);
				if(json.status == "OK") {
					var user = json.user;
					Ti.App.Properties.setString('auth_token', json.token);
					//unsure if I want to close the modal window here?...
					modalWin.close();
				}
				else {
					Ti.API.debug(json.message);
				}
			},
			onerror: function(e) {
				Ti.API.debug(e.error);
			}
		});
		client.open('POST', 'http://brde.smotyn.com/login');
		client.send({
			api_key: 'rbp_614',
			email: e.email,
			password: e.password			
		});
	}	
	
	var scoresSubmittedFunction = function (e) {		
		/*var message = 'Firstname: ' + e.first_name + '\n\nLast Name: ' + e.last_name
		+ '\n\nNickname: ' + e.nickname + '\n\nEmail: ' + e.email + '\n\nGender: ' + e.gender + '\n\nHandicap: ' + e.handicap + '\n\nPassword: ' + e.password;
			*/	
		//alert(message);
		if (Ti.App.Properties.getString('auth_token', '') == '') {
			alert('Please login to submit your scores.');
			modalWin.open({
			        modal: true, 
			        modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
			        modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_PAGESHEET,
			        navBarHidden : true
			});	
			//modal.open();
		}
		else {
			//store the scorecard here...
		
			var client = Ti.Network.createHTTPClient({
				timeout: 5000,
				onload: function(e) {
					Ti.API.debug(this.responseText);
					if(json.status == "OK") {
						alert('Thank you for submitting your score!');
						//not producing this message...
					}
					else {
						Ti.API.debug(json.message);
						alert('unable to submit scores. Please contact application administrator.');
					}
				},
				onerror: function(e) {
					Ti.API.debug(e.error);
				}
			});
			client.open('POST', 'http://brde.smotyn.com/save_scorecard');
			client.send({
				api_key: 'rbp_614',
				token: Ti.App.Properties.getString('auth_token'),
				course_id: 1,
				hole_1: e.p1_hole_1,
				hole_2: e.p1_hole_2,
				hole_3: e.p1_hole_3,
				hole_4: e.p1_hole_4,
				hole_5: e.p1_hole_5,
				hole_6: e.p1_hole_6,
				hole_7: e.p1_hole_7,
				hole_8: e.p1_hole_8,
				hole_9: e.p1_hole_9,
				hole_10: e.p1_hole_10,
				hole_11: e.p1_hole_11,
				hole_12: e.p1_hole_12,
				hole_13: e.p1_hole_13,
				hole_14: e.p1_hole_14,
				hole_15: e.p1_hole_15,
				hole_16: e.p1_hole_16,
				hole_17: e.p1_hole_17,
				hole_18: e.p1_hole_18
			});
		
			//for testing		
			var message = 
			"hole1: " + e.p1_hole_1
			+ "\n\nhole2: " + e.p1_hole_2
			+ "\n\nhole3: " + e.p1_hole_3
			+ "\n\nhole4: " + e.p1_hole_4
			+ "\n\nhole5: " + e.p1_hole_5
			+ "\n\nhole6: " + e.p1_hole_6
			+ "\n\nhole7: " + e.p1_hole_7
			+ "\n\nhole8: " + e.p1_hole_8
			+ "\n\nhole9: " + e.p1_hole_9
			+ "\n\nhole10: " + e.p1_hole_10
			+ "\n\nhole11: " + e.p1_hole_11
			+ "\n\nhole12: " + e.p1_hole_12
			+ "\n\nhole13: " + e.p1_hole_13
			+ "\n\nhole14: " + e.p1_hole_14
			+ "\n\nhole15: " + e.p1_hole_15
			+ "\n\nhole16: " + e.p1_hole_16
			+ "\n\nhole17: " + e.p1_hole_17
			+ "\n\nhole18: " + e.p1_hole_18
			
			+ "\n\nP2hole1: " + e.p2_hole_1
			+ "\n\nhole2: " + e.p2_hole_2
			+ "\n\nhole3: " + e.p2_hole_3
			+ "\n\nhole4: " + e.p2_hole_4
			+ "\n\nhole5: " + e.p2_hole_5
			+ "\n\nhole6: " + e.p2_hole_6
			+ "\n\nhole7: " + e.p2_hole_7
			+ "\n\nhole8: " + e.p2_hole_8
			+ "\n\nhole9: " + e.p2_hole_9
			+ "\n\nhole10: " + e.p2_hole_10
			+ "\n\nhole11: " + e.p2_hole_11
			+ "\n\nhole12: " + e.p2_hole_12
			+ "\n\nhole13: " + e.p2_hole_13
			+ "\n\nhole14: " + e.p2_hole_14
			+ "\n\nhole15: " + e.p2_hole_15
			+ "\n\nhole16: " + e.p2_hole_16
			+ "\n\nhole17: " + e.p2_hole_17
			+ "\n\nhole18: " + e.p2_hole_18
		}//closes the initial else loop (for the if logged in statement...)

		//alert(message);
		
	};//closes the scoresSubmittedFunction function
	
	Ti.App.addEventListener('scoresSubmitted', scoresSubmittedFunction);
	//to hookup with the fireEvent event...
	
	win.addEventListener('close', function () {
		Ti.App.removeEventListener('formSubmitted', scoresSubmittedFunction);
		//removes the listener...
	});
	
	//login event listeners...
	Ti.App.addEventListener('loginSubmitted', loginSubmittedFunction);
	//to hookup with the fireEvent event...
	
	win.addEventListener('close', function () {
		Ti.App.removeEventListener('loginSubmitted', loginSubmittedFunction);
		//removes the listener...
	});


win.add(webview);