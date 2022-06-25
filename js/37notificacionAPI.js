// Notificacion API

const boton = document.querySelector('#boton'); //Colocamos el selector en un variable para que sea mas facil de mantenert y ahorrar codigo
boton.addEventListener('click', function(){
	Notification.requestPermission()
	.then(resultado => console.log(`El resultado es ${resultado}`))
});


if(Notification.permission == 'granted'){
	new Notification('Esta es una notificacion',{ //Se instancia la clase u objeto Notification y se le pasan dos valores, titulo y el segundo es un abjeto 
		icon: 'img/ccj.png',
		body: 'Desarrollo Web con Juan'
	})
}