document.addEventListener('deviceready', onDeviceReady, false);

const TASQUES = "tasques";

function esborra(event){
	//var elem = event.target;
	//$(elem).parent().parent().remove();
	var nameOfTask = $(this).parent('li').clone().children().remove().end().text().trim();
	//find index in the task element
	var index = tasques.indexOf(nameOfTask);
	tasques.splice(index,1);
	localStorage[TASQUES] = JSON.stringify(tasques);
}

function refresh_view(tasques){
	console.log(tasques);
	//Borrar tasks view
	$("li").remove();
	//Umplir dades view
	var cont = 0;
	for(const tasca of tasques){
		$('ul').append("<li pos'"+cont+"' class='ui-last-child'><a class='ui-btn' href='#'>"+tasca+"<button class='deleteButton'>Elimina</button></a></li>");
		cont++;
	}
}

//configurar Button per afegir taskas
function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
    if(!localStorage.getItem(TASQUES)){
    	localStorage.setItem(TASQUES, JSON.stringify([]));
    }

	$("#inputButton").click(function() {
        var text = $('#myText').val();
        var tasques = JSON.parse(localStorage.getItem(TASQUES));
		tasques.push(text);
		localStorage.setItem("tasques",JSON.stringify(tasques));
		refresh_view(tasques);
		//$('.deleteButton').click(esborra)
    });

	var dades = JSON.parse(localStorage.getItem(TASQUES));
	refresh_view(dades);

}

