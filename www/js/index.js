document.addEventListener('deviceready', onDeviceReady, false);

function esborra(event){
	var elem = event.target;
	$(elem).parent().parent().remove();
}

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

	$("#inputButton").click(function() {
        var text = $('#myText').val();
        $('ul').append("<li class='ui-last-child'><a class='ui-btn' href='#'>"+text+"<button class='deleteButton'>Elimina</button></a></li>");
		$('.deleteButton').click(esborra)
    });



}

