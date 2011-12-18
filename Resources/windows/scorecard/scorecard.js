var win = Titanium.UI.currentWindow;

var webview = Titanium.UI.createWebView({
    url: 'scorecard.html',
    top: 10,
    left: 0,
    width: 310,
    height: 300
});
win.add(webview);