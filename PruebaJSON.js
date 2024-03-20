async function obtenerUsuarios() {
    let cont = 1;
    var resultado = document.getElementById("resultado");
    // Se imprime el titulo fuera para que no se repita varias veces
    resultado.innerHTML = "<h2>Pokemons</h2>";

    while(cont <= 20){
        // Se crea una variable de cadena para conseguir todos las url de los pokemons
        var url = "https://pokeapi.co/api/v2/pokemon/" + cont + "/";
        
        try {
            let response = await fetch(url);
            if (response.ok) { // Esta funcion ok se asegura que el status es 200 y te muestra si necesidad de botón todo el contenido
                //Se crea al usuario, este caso pokemon con esperando a que se hayan completado los anteriores
                let usuarios = await response.json();
                mostrarUsuarios(usuarios);
            } else {
                // Si no existe (datos) manda error de recopilacion de datos
                console.error("Error al realizar la solicitud. Código de estado: " + response.status);
            }
        } catch (error) {
            // Si la pagina no existe te manda error
            console.error("Error de red al realizar la solicitud", error);
        }
        
        cont++;
    }
    // Se manda la solicitud
    xhr.send();
}

/*
    Esta funcion se encarga de crear el formato y recoger los datos que queremos de los pokemons que se verán en pantalla
*/
    function mostrarUsuarios(usuarios) {
        var resultado = document.getElementById("resultado");

        resultado.innerHTML += "<strong>Nombre </strong>" + usuarios.name + "<br>";
        resultado.innerHTML += "<strong>ID </strong>" + usuarios.id + "<br>";
        resultado.innerHTML += "<img src=\"" + usuarios.sprites.front_default + "\" alt=\"Imagen de " + usuarios.name + "\">" + "<br>";
        resultado.innerHTML += "<p><strong>Tipo </strong>";
    
        usuarios.types.forEach(function(typeData){
            resultado.innerHTML += typeData.type.name + " ";
        });
    
        resultado.innerHTML += "</p>";
    }
    
    // Se llama a la funcion para ejecutar el codigo
    obtenerUsuarios();