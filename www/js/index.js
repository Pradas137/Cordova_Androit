document.addEventListener('deviceready', onDeviceReady, false);

const TASQUES = "tasques";


function refresh_view(tasques){
	console.log(tasques);

	//Borrar tasks view
	$("li").remove();

	//Umplir dades view
	var cont = 0;
	for(const tasca of tasques){
		$('ul').append("<li pos='"+cont+"'class='ui-li-has-alt ui-last-child'><a class='ui-btn' href='#'>"+tasca+"<button class='deleteButton'>Elimina</button></a></li>");
		cont++;
	}

	$(".deleteButton").click(function() {
		del = $(this).parent().attr('pos');
		console.log(del)
		borrar = JSON.parse(localStorage.getItem(TASQUES));
		borrar.splice(del,1);
		localStorage.setItem(TASQUES,JSON.stringify(borrar))
		refresh_view(borrar);
	});
}

//configurar Button per afegir taskas
function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
    if(!localStorage.getItem("tasques")){
    	localStorage.setItem("tasques", JSON.stringify([]));
    }

	$("#inputButton").click(function() {
        var text = $('#myText').val();
        var tasques = JSON.parse(localStorage.getItem(TASQUES));
		tasques.push(text);
		localStorage.setItem(TASQUES,JSON.stringify(tasques));
		refresh_view(tasques);
		//$('.deleteButton').click(esborra)
    });

	var dades = JSON.parse(localStorage.getItem(TASQUES));
	refresh_view(dades);

}

