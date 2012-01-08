exports.WebViewWindow = function () {
	
	var window = Ti.UI.createWindow({
		title: 'Webviews',
		backgroundColor: '#FFF',
		layout: 'vertical'
	});
	
	var backButton = Ti.UI.createButton({
		title: 'Back',
		width: 30,
		font: {
			fontSize: 12
		}
	});
	
	var forwardButton = Ti.UI.createButton({
		title: 'Forward',
		width: 30,
		font: {
			fontSize: 12
		}
	});
	
	var urlField = Ti.UI.createTextField({
		top: 5,
		hintText: 'Enter a URL',
		height: 20,
		width: 180,
		value: 'http://www.google.com',
		font: {
			fontSize: 12
		},
		autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
	});
	
	var goButton = Ti.UI.createButton({
		title: 'Go',
		width: 30,
		font: {
			fontSize: 12
		}
	});
	
	var toolbar;
	
	if(Ti.Platform.name == 'android') {
		urlField.setHeight(30);
		
		toolbar = Ti.UI.createView({
			layout: 'horizontal',
			height: 30
		});
		
		toolbar.add(backButton);
		toolbar.add(forwardButton);
		toolbar.add(urlField);
		toolbar.add(goButton);
	}
	else {
		urlField.borderStyle = Titanium.UI.INPUT_BORDERSTYLE_ROUNDED;
		
		toolbar = Ti.UI.createToolbar({
			height: 20,
			items: [
				backButton,
				forwardButton,
				urlField,
				goButton
			]
		});
	}
	
	var webview = Ti.UI.createWebView({
		top: 5,
		width: 'auto',
		height: 'auto',
		url: 'http://www.google.com'
	});
	
	window.add(toolbar);
	window.add(webview);
	
	backButton.addEventListener('click', function() {
		if(webview.canGoBack()) {
			webview.goBack();
		}
	});
	
	forwardButton.addEventListener('click', function() {
		if(webview.canGoForward()) {
			webview.goForward();
		}
	});
	
	goButton.addEventListener('click', function(e) {
		webview.url = urlField.value;
	});
	
	return window;
	
}

exports.LocalWebViewWindow = function () {
	
	var window = Ti.UI.createWindow({
		title: 'Local webview'
	});
	
	var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'webview.html');
	var html = file.read().text; 
	
	var webview = Ti.UI.createWebView({
		html: html,
		width: 'auto',
		height: 'auto'
	});
	//setup information...
	window.add(webview);
	
	var formSubmittedFunction = function (e) {
		var message = 'Textfield value is: ' + e.textfield;
		alert(message);
	};//fireEvent message
	
	Ti.App.addEventListener('formSubmitted', formSubmittedFunction);
	//to hookup with the fireEvent event...
	
	window.addEventListener('close', function () {
		Ti.App.removeEventListener('formSubmitted', formSubmittedFunction);
		//removes the listener...
	});
	
	return window;
	
}
