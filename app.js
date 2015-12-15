var people = ['charlie', 'chris', 'jeremy', 'natalie', 'scott', 'kenzie', 'eric'];
var namesCount = 0;

$(function(){
	$('#container').on('click', '.remove', function(){
		if($(this).parent().parent().css('opacity') == 1){
			$(this).parent().parent().animate({opacity: 0.05});
		} else {
			$(this).parent().parent().animate({opacity:1});
		}
	});

	$('.create').on('click', function(){
		if(namesCount > people.length - 1){
			$('#container').empty();
			namesCount = 0;
		} else {
			$('#container').append('<div id="person' + namesCount + '" class="person"><div class="personname">' + people[namesCount] + '<button class="remove">Fade</button></div></div>');
			$('#person'+namesCount).hide().slideDown();
			namesCount++;
		}
	});
});
