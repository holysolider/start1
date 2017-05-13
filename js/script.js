$(document).ready(function(){
	$('#fb').click(function(){
		$('audio').attr('src', 'http://air.radiorecord.ru:805/fut_320')
	});
	
	$('#dnb').click(function(){
		$('audio').attr('src', 'http://air.radiorecord.ru:805/ps_320')
	});

	$('#edm').click(function(){
		$('audio').attr('src', 'http://air.radiorecord.ru:805/club_320')
	});

	$(document).click(function(e){
    var x = e.pageX + 'px'; 
    var y = e.pageY + 'px';
    $('.yoba').toggleClass('yoba-active');
    $('.yoba').delay(100).css("top", y)
    $('.yoba').delay(100).css("left", x)
});     


});
	