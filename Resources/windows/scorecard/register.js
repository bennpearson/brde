var win = Titanium.UI.currentWindow;
	
	var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'webview.html');
	var html = file.read().text; 
	
	var webview = Ti.UI.createWebView({
		html: html,
		width: 'auto',
		height: 'auto'
	});
	//setup information...
	win.add(webview);
	
	var formSubmittedFunction = function (e) {		
		var message = 'Firstname: ' + e.first_name + '\n\nLast Name: ' + e.last_name
		+ '\n\nNickname: ' + e.nickname + '\n\nEmail: ' + e.email + '\n\nGender: ' + e.gender + '\n\nHandicap: ' + e.handicap + '\n\nPassword: ' + e.password;
				
		alert(message);
		
		var client = Ti.Network.createHTTPClient({
			timeout: 5000,
			onload: function(e) {
				Ti.API.debug(this.responseText);
				var json = JSON.parse(this.responseText);
				if(json.status == "OK") {
					var user = json.user;
					Ti.App.Properties.setString('auth_token', json.token)
				}
				else {
					Ti.API.debug(json.message);
				}
			},
			onerror: function(e) {
				Ti.API.debug(e.error);
			}
		});
		
		client.open('POST', 'http://brde.smotyn.com/register');
		client.send({
			api_key: 'rbp_614',
			first_name: e.first_name, 
			last_name: e.last_name,
			nickname: e.nickname,
			email: e.email,
			password: e.password,
			gender: e.gender,
			handicap: e.handicap
		});//end of JSON client connection info
	};//fireEvent message
	
	Ti.App.addEventListener('formSubmitted', formSubmittedFunction);
	//to hookup with the fireEvent event...
	
	win.addEventListener('close', function () {
		Ti.App.removeEventListener('formSubmitted', formSubmittedFunction);
		//removes the listener...
	});


win.add(webview);