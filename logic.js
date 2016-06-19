$(function() {
console.log('hi');


var myFirebaseRef = new Firebase("https://anytimeistraintime.firebaseio.com/");

//WRITING DATA//

$('#submit').on("click", function(){
console.log('click');
trainName = $("#trainInput").val().trim();
destination = $("#destinationInput").val().trim();
firstTrainTime = $("#firstTrainTimeInput").val().trim();
frequency = $("#frequencyInput").val().trim();

myFirebaseRef.push({
	"trainName": trainName, 
	"destination": destination,
	"firstTrainTime": firstTrainTime,
	"frequency": frequency,
});
	$("#trainInput").val('');
	$("#destinationInput").val('');
	$("#firstTrainTimeInput").val('');
	$("#frequencyInput").val('');

	return false;
});

myFirebaseRef.on("child_added", function(child, prevChild){
	row = $('<tr>');
	train = $('<td>'+ child.val().trainName + '</td>');
	destination = $('<td>' + child.val().destination + '</td>');
	trainTime = $('<td>' + child.val().trainTime + '</td>');
	frequency = $('<td>' + child.val().frequency + '</td>');

	row.append(train, destination, trainTime, frequency);
	$('tbody').append(row);

})

//READING DATA//

//myFirebaseRef.child("trainName/destination/firstTrainTime/frequency").on("value", function(snapshot) {
 // alert(snapshot.val()); //
//});//



});


