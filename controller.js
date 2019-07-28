//hover
$( ".lamp3" ).mouseenter(function() {
	$(".lamp3").addClass('hover')
});
$( ".lamp3" ).mouseleave(function() {
	$(".lamp3").removeClass('hover')
});
$( ".lamp2" ).mouseenter(function() {
	$(".lamp2").addClass('hover')
});
$( ".lamp2" ).mouseleave(function() {
	$(".lamp2").removeClass('hover')
});
$( ".lamp" ).mouseenter(function() {
	$(this).addClass('hover')
});
$( ".lamp" ).mouseleave(function() {
	$(this).removeClass('hover')
});

//controle da iluminação
var lamps = [0,0,0,0,0];
var signal;
$(".lamp, .lamp3, .lamp2").on('click', function(e, x){
	id = $(this).attr('value');

	if(lamps[id-1] == 0){
		call = callEsp(id, 1)
		if(call == false){
			console.log('Houve erro na comunicação com o ESP')
		}else if(call[0] == true){
			lamps[id-1] = 1
			callEsp(lamps[id-1])
			name = '.lamp'+id.toString()
			$(name).addClass('on');
			console.log('Setor '+id+' ligado')
		}else{
			console.log('Erro desconhecido abaixo:')
			console.log(call)
		}
	}else{
		call = callEsp(id, 0)
		if(call == false){
			console.log('Houve erro na comunicação com o ESP')
		}else if(call[0] == true){
			lamps[id-1] = 0
			callEsp(lamps[id-1])
			name = '.lamp'+id.toString()
			$(name).removeClass('on');
			console.log('Setor '+id+' desligado')
		}else{
			console.log('Erro desconhecido abaixo:')
			console.log(call)
		}
	}
	console.log(lamps)
})

function callEsp(sector, signal){
	/*  SIMULADOR DO ESP RESPONDENDO 
	if(signal == 0){
		return [true, 0];
	}else{
		return [true, 1];
	}
	*/
	var command = 'SD'+sector+'='+signal;
	var pw = 'apocalipse'
	console.log(command);
	$.ajax('http://192.168.9.165', 
	{
	    timeout: 500,
	    method: 'POST',
	    data: {
	    	pw: pw,
	    	command: command,
	    },
	    success: function (data,status,xhr) {   // success callback function
	        console.log(msg)
		  	response = [true, msg]
		  	return response;
	    },
	    error: function (jqXhr, textStatus, errorMessage) { // error callback 
	        return false;
	    }
	});
	return true; 
}