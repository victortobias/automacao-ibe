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
$(".lamp, .lamp3, .lamp2").on('click', function(e, x){
	id = $(this).attr('value');
	if(lamps[id-1] == 0){
		//gatilho para ligar
		lamps[id-1] = 1
		name = '.lamp'+id.toString()
		$(name).addClass('on');
	}else{
		//gatilho para desligar
		lamps[id-1] = 0;
		name = '.lamp'+id.toString()
		$(name).removeClass('on');
	}
	console.log(lamps)
})