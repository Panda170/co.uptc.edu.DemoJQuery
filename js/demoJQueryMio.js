// JavaScript Document
//$('img[src="./Universidad Pedagógica y Tecnológica de Colombia_files/banner_movi_4147.jpg"]').attr('src', '../media/ima/hndsz.jpg');
$('img[src="./Universidad Pedagógica y Tecnológica de Colombia_files/banner_movi_4147.jpg"]').attr('id', 'a123');
$('img[id="a123"]').attr('src', './media/ima/hndsz.jpg');
$('img[src="./Universidad Pedagógica y Tecnológica de Colombia_files/Kiw Garden (2)_4143.jpg"]').attr('id', 'a124');
$('img[id="a124"]').attr('src', './media/ima/MINI.jpg');
$("body").css('background-color', 'black');
$("body").css('font-family', 'Lucida Calligraphy');
$("body").css('color', 'white');
$("a").css('color', '#00FF05');
$("a").css('background-color', 'black');
$("a").css('background-color', 'black');

var news = $.getJSON("./js/obj/news.json");
$('li').text(news.tittle, function() {
	console.log( "success" );
});


for (var i = 0; i < $("h5").length; i++) { 
	if($($("h5")[i]).text() == "Estudiantes de Biología seleccionados por el Real Jardín Botánico de Kew "){
		console.log($($("h5")[i]).text());
		$($("h5")[i]).html("Cambio de texto por una nueva noticia")
	}
    
}

$("ul.nav li")[8].hide();
