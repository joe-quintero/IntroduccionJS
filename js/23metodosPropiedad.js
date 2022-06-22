//Metodos de Propiedad
const reproductor = {
	reproducir : function (id) {
		console.log(`Reproduciendo Canción con el ID : ${id}`)
	},
	pausar : function(){
		console.log('Pausado...')
	},
	crearPlaylist : function(nombre){
		console.log(`Creando Playlist: ${nombre}`)
	},
	reproducirPlaylist : function(nombre){
		console.log(`Reproduciendo Playlist: ${nombre}`)
	}
}

reproductor.borrarCancion = function(id){
	console.log(`Borrecdo concion ID: ${id}`)
}


reproductor.reproducir(1998);
reproductor.pausar();
reproductor.borrarCancion(1555);
reproductor.crearPlaylist('Bachata');
reproductor.reproducirPlaylist('Bachata');