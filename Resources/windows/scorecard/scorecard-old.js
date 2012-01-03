var win = Titanium.UI.currentWindow;

/*var array = [];
var valueRow = Titanium.UI.createTableViewRow({height:46, header: 'Hole 1', className:'valueRow'}); 
var dateRow = Titanium.UI.createTableViewRow({height:46, header: 'Hole 2', className:'dateRow'});
var titleLabel = Ti.UI.createLabel({color:'#000000', text:"Par 3", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:99});
var titleText = Titanium.UI.createTextField({value:"", color:'#336699', borderColor:'#888', borderWidth:1, font:{fontSize:16, fontWeight:'bold'},top:8, left:100, height:32, width:184});
var valueLabel = Ti.UI.createLabel({color:'#000000', text:"Par 4", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var dateLabel = Ti.UI.createLabel({color:'#000000', text:"Par 5", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var valueData = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});	
var dateData = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole3Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 3', className:'hole3Row'});
var hole3Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole3Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});	

var hole4Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 4', className:'hole4Row'});
var hole4Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole4Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole5Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 5', className:'hole5Row'});
var hole5Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole5Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole6Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 6', className:'hole6Row'});
var hole6Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole6Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole7Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 7', className:'hole7Row'});
var hole7Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole7Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole8Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 8', className:'hole8Row'});
var hole8Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole8Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole9Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 9', className:'hole9Row'});
var hole9Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole9Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole10Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 10', className:'hole10Row'});
var hole10Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole10Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole11Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 11', className:'hole11Row'});
var hole11Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole11Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole12Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 12', className:'hole12Row'});
var hole12Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole12Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole13Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 13', className:'hole13Row'});
var hole13Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole13Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole14Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 14', className:'hole14Row'});
var hole14Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole14Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole15Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 15', className:'hole15Row'});
var hole15Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole15Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole16Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 16', className:'hole16Row'});
var hole16Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole16Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole17Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 17', className:'hole17Row'});
var hole17Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole17Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

var hole18Row = Titanium.UI.createTableViewRow({height:46, header: 'Hole 18', className:'hole18Row'});
var hole18Label = Ti.UI.createLabel({color:'#000000', text:"Par 6", font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole18Data = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});

valueRow.add(valueLabel);
valueRow.add(valueData);
dateRow.add(dateLabel);
dateRow.add(dateData);

hole3Row.add(hole3Label);
hole3Row.add(hole3Data);
hole4Row.add(hole4Label);
hole4Row.add(hole4Data);
hole5Row.add(hole5Label);
hole5Row.add(hole5Data);

hole6Row.add(hole6Label);
hole6Row.add(hole6Data);
hole7Row.add(hole7Label);
hole7Row.add(hole7Data);
hole8Row.add(hole8Label);
hole8Row.add(hole8Data);
hole9Row.add(hole9Label);
hole9Row.add(hole9Data);
hole10Row.add(hole10Label);
hole10Row.add(hole10Data);
hole11Row.add(hole11Label);
hole11Row.add(hole11Data);
hole12Row.add(hole12Label);
hole12Row.add(hole12Data);
hole13Row.add(hole13Label);
hole13Row.add(hole13Data);
hole14Row.add(hole14Label);
hole14Row.add(hole14Data);
hole15Row.add(hole15Label);
hole15Row.add(hole15Data);
hole16Row.add(hole16Label);
hole16Row.add(hole16Data);
hole17Row.add(hole17Label);
hole17Row.add(hole17Data);
hole18Row.add(hole18Label);
hole18Row.add(hole18Data);

array.push(valueRow);
array.push(dateRow);
array.push(hole3Row);
array.push(hole4Row);
array.push(hole5Row);

array.push(hole6Row);
array.push(hole7Row);
array.push(hole8Row);
array.push(hole9Row);
array.push(hole10Row);
array.push(hole11Row);
array.push(hole12Row);
array.push(hole13Row);
array.push(hole14Row);
array.push(hole15Row);
array.push(hole16Row);
array.push(hole17Row);
array.push(hole18Row);

// view initialisation
var tableView = Titanium.UI.createTableView({data:array, style:Titanium.UI.iPhone.TableViewStyle.GROUPED});
var pickerView = Titanium.UI.createView({height:248,bottom:-248});
var datePickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole3PickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole4PickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole5PickerView = Titanium.UI.createView({height:248,bottom:-248});

var hole6PickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole7PickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole8PickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole9PickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole10PickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole11PickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole12PickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole13PickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole14PickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole15PickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole16PickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole17PickerView = Titanium.UI.createView({height:248,bottom:-248});
var hole18PickerView = Titanium.UI.createView({height:248,bottom:-248});




// value picker initialisation
var picker = Titanium.UI.createPicker({top:0});
picker.selectionIndicator=true;
var pickerValues = [
	Titanium.UI.createPickerRow({title:'1'}),
	Titanium.UI.createPickerRow({title:'2'}),
	Titanium.UI.createPickerRow({title:'3'}),
	Titanium.UI.createPickerRow({title:'4'}),
	Titanium.UI.createPickerRow({title:'5'}),
	Titanium.UI.createPickerRow({title:'6'})
];
picker.add(pickerValues);
pickerView.add(picker);

// date picker initialisation
var datePicker = Titanium.UI.createPicker({top:0});
datePicker.add(pickerValues);
datePicker.selectionIndicator=true;
datePickerView.add(datePicker);

var hole3Picker = Titanium.UI.createPicker({top:0});
hole3Picker.add(pickerValues);
hole3Picker.selectionIndicator=true;
hole3PickerView.add(hole3Picker);

var hole4Picker = Titanium.UI.createPicker({top:0});
hole4Picker.add(pickerValues);
hole4Picker.selectionIndicator=true;
hole4PickerView.add(hole4Picker);

var hole5Picker = Titanium.UI.createPicker({top:0});
hole5Picker.add(pickerValues);
hole5Picker.selectionIndicator=true;
hole5PickerView.add(hole5Picker);

var hole6Picker = Titanium.UI.createPicker({top:0});
hole6Picker.add(pickerValues);
hole6Picker.selectionIndicator=true;
hole6PickerView.add(hole6Picker);

var hole7Picker = Titanium.UI.createPicker({top:0});
hole7Picker.add(pickerValues);
hole7Picker.selectionIndicator=true;
hole7PickerView.add(hole7Picker);

var hole8Picker = Titanium.UI.createPicker({top:0});
hole8Picker.add(pickerValues);
hole8Picker.selectionIndicator=true;
hole8PickerView.add(hole8Picker);

var hole9Picker = Titanium.UI.createPicker({top:0});
hole9Picker.add(pickerValues);
hole9Picker.selectionIndicator=true;
hole9PickerView.add(hole9Picker);

var hole10Picker = Titanium.UI.createPicker({top:0});
hole10Picker.add(pickerValues);
hole10Picker.selectionIndicator=true;
hole10PickerView.add(hole10Picker);

var hole11Picker = Titanium.UI.createPicker({top:0});
hole11Picker.add(pickerValues);
hole11Picker.selectionIndicator=true;
hole11PickerView.add(hole11Picker);

var hole12Picker = Titanium.UI.createPicker({top:0});
hole12Picker.add(pickerValues);
hole12Picker.selectionIndicator=true;
hole12PickerView.add(hole12Picker);

var hole13Picker = Titanium.UI.createPicker({top:0});
hole13Picker.add(pickerValues);
hole13Picker.selectionIndicator=true;
hole13PickerView.add(hole13Picker);

var hole14Picker = Titanium.UI.createPicker({top:0});
hole14Picker.add(pickerValues);
hole14Picker.selectionIndicator=true;
hole14PickerView.add(hole14Picker);

var hole15Picker = Titanium.UI.createPicker({top:0});
hole15Picker.add(pickerValues);
hole15Picker.selectionIndicator=true;
hole15PickerView.add(hole15Picker);

var hole16Picker = Titanium.UI.createPicker({top:0});
hole16Picker.add(pickerValues);
hole16Picker.selectionIndicator=true;
hole16PickerView.add(hole16Picker);

var hole17Picker = Titanium.UI.createPicker({top:0});
hole17Picker.add(pickerValues);
hole17Picker.selectionIndicator=true;
hole17PickerView.add(hole17Picker);

var hole18Picker = Titanium.UI.createPicker({top:0});
hole18Picker.add(pickerValues);
hole18Picker.selectionIndicator=true;
hole18PickerView.add(hole18Picker);

// animations
var slideIn =  Titanium.UI.createAnimation({bottom:-43});
var slideOut =  Titanium.UI.createAnimation({bottom:-251});

// event functions
tableView.addEventListener('click', function(eventObject){
	if (eventObject.rowData.className == "valueRow")
	{
		titleText.blur();
		datePickerView.animate(slideOut);	
		pickerView.animate(slideIn);		
	}
	else if (eventObject.rowData.className == "titleRow")
	{
		pickerView.animate(slideOut);
		datePickerView.animate(slideOut);
		titleText.focus();	
	}
	else if (eventObject.rowData.className == "dateRow")
	{
		pickerView.animate(slideOut);
		datePickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole3Row")
	{
		hole3PickerView.animate(slideOut);
		hole3PickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole4Row")
	{
		hole4PickerView.animate(slideOut);
		hole4PickerView.animate(slideIn);
		titleText.blur();	
	}

	else if (eventObject.rowData.className == "hole5Row")
	{
		hole5PickerView.animate(slideOut);
		hole5PickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole6Row")
	{
		hole6PickerView.animate(slideOut);
		hole6PickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole7Row")
	{
		hole7PickerView.animate(slideOut);
		hole7PickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole8Row")
	{
		hole8PickerView.animate(slideOut);
		hole8PickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole9Row")
	{
		hole9PickerView.animate(slideOut);
		hole9PickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole10Row")
	{
		hole10PickerView.animate(slideOut);
		hole10PickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole11Row")
	{
		hole11PickerView.animate(slideOut);
		hole11PickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole12Row")
	{
		hole12PickerView.animate(slideOut);
		hole12PickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole13Row")
	{
		hole13PickerView.animate(slideOut);
		hole13PickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole14Row")
	{
		hole14PickerView.animate(slideOut);
		hole14PickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole15Row")
	{
		hole15PickerView.animate(slideOut);
		hole15PickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole16Row")
	{
		hole16PickerView.animate(slideOut);
		hole16PickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole17Row")
	{
		hole17PickerView.animate(slideOut);
		hole17PickerView.animate(slideIn);
		titleText.blur();	
	}
	else if (eventObject.rowData.className == "hole18Row")
	{
		hole18PickerView.animate(slideOut);
		hole18PickerView.animate(slideIn);
		titleText.blur();	
	}
});

datePicker.addEventListener('change',function(e)
{
	//dateData.text = e.value;
	dateData.text = datePicker.getSelectedRow(0).title;;
	tableView.setData(array);
	datePickerView.animate(slideOut);
});
hole3Picker.addEventListener('change',function(e) {
	hole3Data.text = hole3Picker.getSelectedRow(0).title;;
	hole3PickerView.animate(slideOut);
});
hole4Picker.addEventListener('change',function(e) {
	hole4Data.text = hole4Picker.getSelectedRow(0).title;;
	hole4PickerView.animate(slideOut);
});
hole5Picker.addEventListener('change',function(e) {
	hole5Data.text = hole5Picker.getSelectedRow(0).title;;
	hole5PickerView.animate(slideOut);
});
hole6Picker.addEventListener('change',function(e) {
	hole6Data.text = hole6Picker.getSelectedRow(0).title;;
	hole6PickerView.animate(slideOut);
});hole7Picker.addEventListener('change',function(e) {
	hole7Data.text = hole7Picker.getSelectedRow(0).title;;
	hole7PickerView.animate(slideOut);
});hole8Picker.addEventListener('change',function(e) {
	hole8Data.text = hole8Picker.getSelectedRow(0).title;;
	hole8PickerView.animate(slideOut);
});hole9Picker.addEventListener('change',function(e) {
	hole9Data.text = hole9Picker.getSelectedRow(0).title;;
	hole9PickerView.animate(slideOut);
});hole10Picker.addEventListener('change',function(e) {
	hole10Data.text = hole10Picker.getSelectedRow(0).title;;
	hole10PickerView.animate(slideOut);
});hole11Picker.addEventListener('change',function(e) {
	hole11Data.text = hole11Picker.getSelectedRow(0).title;;
	hole11PickerView.animate(slideOut);
});hole12Picker.addEventListener('change',function(e) {
	hole12Data.text = hole12Picker.getSelectedRow(0).title;;
	hole12PickerView.animate(slideOut);
});hole13Picker.addEventListener('change',function(e) {
	hole13Data.text = hole13Picker.getSelectedRow(0).title;;
	hole13PickerView.animate(slideOut);
});hole14Picker.addEventListener('change',function(e) {
	hole14Data.text = hole14Picker.getSelectedRow(0).title;;
	hole14PickerView.animate(slideOut);
});hole15Picker.addEventListener('change',function(e) {
	hole15Data.text = hole15Picker.getSelectedRow(0).title;;
	hole15PickerView.animate(slideOut);
});hole16Picker.addEventListener('change',function(e) {
	hole16Data.text = hole16Picker.getSelectedRow(0).title;;
	hole16PickerView.animate(slideOut);
});hole17Picker.addEventListener('change',function(e) {
	hole17Data.text = hole17Picker.getSelectedRow(0).title;;
	hole17PickerView.animate(slideOut);
});hole18Picker.addEventListener('change',function(e) {
	hole18Data.text = hole18Picker.getSelectedRow(0).title;;
	hole18PickerView.animate(slideOut);
});
picker.addEventListener('change',function(e)
{
	valueData.text = picker.getSelectedRow(0).title;;
	tableView.setData(array);
	pickerView.animate(slideOut);
});

titleText.addEventListener('focus',function() {
	pickerView.animate(slideOut);
	datePickerView.animate(slideOut);
});

// build display
win.add(tableView);
win.add(pickerView);
win.add(datePickerView);
win.add(hole3PickerView);
win.add(hole4PickerView);
win.add(hole5PickerView);
win.add(hole6PickerView);
win.add(hole7PickerView);
win.add(hole8PickerView);
win.add(hole9PickerView);
win.add(hole10PickerView);
win.add(hole11PickerView);
win.add(hole12PickerView);
win.add(hole13PickerView);
win.add(hole14PickerView);
win.add(hole15PickerView);
win.add(hole16PickerView);
win.add(hole17PickerView);
win.add(hole18PickerView);*/











/*var win = Titanium.UI.currentWindow;

var array = [];
var valueRow = Titanium.UI.createTableViewRow({height:46, className:'hole1', header:'Hole 1'}); 
var titleText = Titanium.UI.createTextField({value:"", color:'#336699', borderColor:'#888', borderWidth:1, font:{fontSize:16, fontWeight:'bold'},top:8, left:100, height:32, width:184});
var valueLabel = Ti.UI.createLabel({color:'#000000', text: 'Par: 4', font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole1 = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});	
valueRow.add(valueLabel);
valueRow.add(hole1);
array.push(valueRow);

var valueRow = Titanium.UI.createTableViewRow({height:46, className:'hole2', header:'Hole 2',}); 
var titleText = Titanium.UI.createTextField({value:"", color:'#336699', borderColor:'#888', borderWidth:1, font:{fontSize:16, fontWeight:'bold'},top:8, left:100, height:32, width:184});
var valueLabel = Ti.UI.createLabel({color:'#000000', text: 'Par: 4', header:'Hole 2', font:{fontSize:21, fontWeight:'bold'}, top:8, left:12, height:24, width:170});
var hole2 = Ti.UI.createLabel({color:'#3D4460', text:"", font:{fontSize:17, fontWeight:'normal'}, top:11, left:102, height:20, width:180, textAlign:'right'});	
valueRow.add(valueLabel);
valueRow.add(hole2);
array.push(valueRow);

var tableView = Titanium.UI.createTableView({data:array, style:Titanium.UI.iPhone.TableViewStyle.GROUPED});
var pickerView = Titanium.UI.createView({height:248,bottom:-248});
var datePickerView = Titanium.UI.createView({height:248,bottom:-248});

// value picker initialisation
var picker = Titanium.UI.createPicker({top:0});
picker.selectionIndicator=true;
var pickerValues = [
	Titanium.UI.createPickerRow({title:'1'}),
	Titanium.UI.createPickerRow({title:'2'}),
	Titanium.UI.createPickerRow({title:'3'}),
	Titanium.UI.createPickerRow({title:'4'}),
	Titanium.UI.createPickerRow({title:'5'}),
	Titanium.UI.createPickerRow({title:'6'}),
	Titanium.UI.createPickerRow({title:'7'}),
	Titanium.UI.createPickerRow({title:'8'})
];
picker.add(pickerValues);
pickerView.add(picker);

// animations
var slideIn =  Titanium.UI.createAnimation({bottom:-43});
var slideOut =  Titanium.UI.createAnimation({bottom:-251});

// event functions
tableView.addEventListener('click', function(eventObject){
	if (eventObject.rowData.className == "hole1")
	{
		titleText.blur();
		pickerView.animate(slideIn);
		picker.addEventListener('change',function(e)
		{
			hole1.text = picker.getSelectedRow(0).title;;
			//tableView.setData(array);
		});		
	}
	else if (eventObject.rowData.className == "hole2")
	{
		titleText.blur();
		pickerView.animate(slideIn);
		picker.addEventListener('change',function(e)
		{
			hole2.text = picker.getSelectedRow(0).title;;
			//tableView.setData(array);
			pickerView.animate(slideOut);
		});		
	}
});

// build display
win.add(tableView);
win.add(pickerView);*/
/*var scoreCardWin = Ti.UI.currentWindow;

var picker_view = Titanium.UI.createView({
	height:251,
	bottom:-251,
	backgroundColor: 'blue'
});
var picker = Ti.UI.createPicker();
var pickerData = [];
pickerData[0]=Ti.UI.createPickerRow({title:'Bananas',custom_item:'b'});
pickerData[1]=Ti.UI.createPickerRow({title:'Strawberries',custom_item:'s'});
pickerData[2]=Ti.UI.createPickerRow({title:'Mangos',custom_item:'m'});
pickerData[3]=Ti.UI.createPickerRow({title:'Grapes',custom_item:'g'});
picker.selectionIndicator = true;
picker.add(pickerData);
picker_view.add(picker);

//scoreCardWin.add(picker);
var data = [
 
{ leftImage:'img1.jpg', title: 'test', test: 'test', header:"Hole 1" },
{ leftImage:'img1.jpg', title: 'test2', header:"Hole 2" },
{ leftImage:'img1.jpg', header:"Hole 3" },
{ leftImage:'img1.jpg', header:"Hole 4" },
{ leftImage:'img1.jpg', header:"Hole 5" },
{ leftImage:'img1.jpg', header:"Hole 6" },
{ leftImage:'img1.jpg', header:"Hole 7" },
{ leftImage:'img1.jpg', header:"Hole 8" },
{ leftImage:'img1.jpg', header:"Hole 9" },
{ leftImage:'img1.jpg', header:"Hole 10" },
{ leftImage:'img1.jpg', header:"Hole 11" },
{ leftImage:'img1.jpg', header:"Hole 12" },
{ leftImage:'img1.jpg', header:"Hole 13" },
{ leftImage:'img1.jpg', header:"Hole 14" },
{ leftImage:'img1.jpg', header:"Hole 15" },
{ leftImage:'img1.jpg', header:"Hole 16" },
{ leftImage:'img1.jpg', header:"Hole 17" },
{ leftImage:'img1.jpg', header:"Hole 18" }
];

//var tableview = Ti.UI.createTableView({data:rowData});
var tableview = Ti.UI.createTableView({data:data});
//need to create rows here...
scoreCardWin.add(tableview);

var slide_in = Titanium.UI.createAnimation({bottom:0});

tableview.addEventListener('click', function(e) {

	//if (e.rowData.title == 'test')
	//if (e.rowData.test)
	//{
		alert('yo!');
		//e.row.title = 'hih';
		//modalWindow.open();
		picker_view.animate(slide_in);
	//}
	//e.row.rowTitle.text = test;
});

var modalWindow = Ti.UI.createWindow({
	modal: true,
	height:200,
	width:200,
	backgroundColor: '#fff',
	title:'Hole 1'
});
var modalLabel = Ti.UI.createLabel({
	text: 'test'
});
var modalTextbox = Ti.UI.createTextField({
	hintText: 'test'
});
var btn = Titanium.UI.createButton({
	title: 'enter',
	height: 30,
	width:100,
	left:0
});
modalWindow.add(modalLabel);
modalWindow.add(modalTextbox);
modalWindow.add(btn);

btn.addEventListener('click', function(e) {
	var test = modalTextbox.value;
	//webview.evalJS('testJS(test)');
	alert('you just entered '+test+'.');
	//e.row.rowTitle.text = test;
	modalWindow.close();
	scoreCardWin.open(test);
	alert('value of test = '+test+'.');
	rowData.test.title = test;
	//tableview.rowTitle.text = test;
});*/
//webview table attempt...
var webview = Titanium.UI.createWebView({
    url: '../../scorecard1.html',
    top: 10,
    left: 0,
    width: 310,
    height: 300
});
win.add(webview);

/*Ti.App.addEventListener('helloWorld', function(passedData) 
{
    // Pass data to the webView
    test = 'this is a test';
    webview.evalJS(test);
});*/

/*Ti.App.addEventListener('helloWorld', function(e) 
{   
    //do something with e.data
    modalWindow.open();
});*/

/*function helloworld() {
	alert('blah...');
}
btn.addEventListener('click', function() {
	var test = modalTextbox.value;
	webview.evalJS('testJS(test)');
	modalWindow.close(alert('You entered: '+test+'.'));
});


// dashboard attempt...   
// add the tableView to the current window  
//scoreCardWin.add(tableview);

/*var win = Titanium.UI.currentWindow;
win.backgroundColor = '#fff';

var data = []; 
var labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]; 
 
for (var i=0;i<labels.length;i++) { 
    var item = Titanium.UI.createDashboardItem({ 
    	badge: labels[i]   
    }); 
 
    data.push(item);
}
 
var dashboard = Titanium.UI.createDashboardView({ 
    data:data,
    width: 200,
    top: 10 
});
 
win.add(dashboard);*/