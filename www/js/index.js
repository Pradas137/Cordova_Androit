document.addEventListener('deviceready', onDeviceReady, false);

function esborra(event){
	//var elem = event.target;
	//$(elem).parent().parent().remove();
	alert("ERROR");
}

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

	$("#inputButton").click(function() {
        var text = $('#myText').val();
        $('ul').append("<li class='ui-last-child'><a class='ui-btn' href='#'>"+text+"</a></li>");
    	$('a').append("<button id='deleteButton'>Elimina</button>");
    });

	$('#deleteButton').click(esborra)


}

