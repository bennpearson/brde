var win = Titanium.UI.currentWindow;
 
//
// Begin Geo Location
//
 
Titanium.Geolocation.purpose = "Recieve User Location";
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
 
Titanium.Geolocation.distanceFilter = 10;
 
var my_location = Titanium.Geolocation.getCurrentPosition(function(e) {
        if (e.error) {
            Ti.API.log('error: ' + JSON.stringify(e.error) );
            return;
        }
 
var current_longitude = e.coords.longitude;
var current_latitude = e.coords.latitude;
var current_altitude = e.coords.altitude;
var current_heading = e.coords.heading;
var current_accuracy = e.coords.accuracy;
var current_speed = e.coords.speed;
var current_timestamp = e.coords.timestamp;
var current_altitudeAccuracy = e.coords.altitudeAccuracy;


// var roofAnnotation = Titanium.Map.createAnnotation({
	// latitude:current_latitude,
    // longitude:current_longitude,
    // title:"Your roof",
    // subtitle:'Rough estimation',
    // pincolor:Titanium.Map.ANNOTATION_RED,
    // animate:true,
    // leftButton: '../images/appcelerator_small.png',
    // myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
// });
 
 
var golfTee1 = Titanium.Map.createAnnotation({
	latitude:51.525700,
    longitude:-3.161327,
    title:"You",
    subtitle:'Rough estimation',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true,
    leftButton: '../images/appcelerator_small.png',
    myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
});

var golfFlag1 = Titanium.Map.createAnnotation({
	latitude:51.528000,
    longitude:-3.158200,
    title:"You",
    subtitle:'Rough estimation',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true,
    leftButton: '../images/appcelerator_small.png',
    myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
});
 
var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.SATELLITE_TYPE,
    region: {latitude: 51.526900, longitude: -3.159700, latitudeDelta:0.001, longitudeDelta:0.001},
    animate:true,
    regionFit:true,
    userLocation:true,
    annotations:[golfTee1, golfFlag1]
});

var cheatButton = Ti.UI.createButton({
	title: 'Cheat!!'
});

cheatButton.addEventListener('click', function (e) {
	
		var message = 'You Cheat!!';
		var alert = Ti.UI.createAlertDialog({
			message: message
		});		
		alert.show();	
});
	

win.setRightNavButton(cheatButton);
win.add(mapview);


});