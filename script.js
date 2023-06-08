let contenido;
let arrayLaberinto = [];

function leerArchivo(e) {
  let archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  let lector = new FileReader();
  lector.onload = function (e) {
    contenido = e.target.result;
  };
  lector.readAsText(archivo);
}

//accion que permite cargar el archivo y leerlo
document
  .getElementById("file-selector")
  .addEventListener("change", leerArchivo, false);

//accion en el boton de leer archivo que lee el archivo cargado desde el otro boton y lo muestra en pantalla
document.getElementById("btn-leer").addEventListener(
  "click",
  function () {
    if (contenido) {
      mostrarContenido(contenido);
    } else {
      console.log("No se ha cargado ningún archivo.");
    }
  },
  false
);

//muestra el contenido del archivo en pantalla
function mostrarContenido(contenido) {
  console.log("Entre a mostrar contenido");
  const elemento = document.getElementById("element-show");
  elemento.innerHTML = "";
  arrayLaberinto = contenido.split("\n");

<<<<<<< HEAD

  //console.log("El tamaño de la linea es: " +arrayLaberinto[0].length)
  const spanColumnas = document.createElement("span");
  const spaceIni = document.createElement("span");
  spaceIni.style.paddingRight = "1px";
  spaceIni.innerHTML = "&#128512";
  spaceIni.style.letterSpacing  = "0px";  
  spanColumnas.appendChild(spaceIni);
  for (let index = 0; index < arrayLaberinto[0].length; index++) {
    const character = document.createElement("span");
    character.textContent = index;
    character.style.fontSize = "12px";
    character.style.color = "#9ED0DF";
    character.style.paddingRight = "20.5px";
    character.style.letterSpacing  = "0px";   
    spanColumnas.appendChild(character);
    
  }
  
  elemento.appendChild(spanColumnas);
  elemento.appendChild(document.createElement("br"));
  //recorro las lineas para mostrar el laberinto dando un valor mas grande a los guiones que
  //a los astericos para compensar el tamaño al pintar el laberinto
  let filaCont = 0;
  arrayLaberinto.forEach((linea) => {
    const spanLinea = document.createElement("span");
    const fila = document.createElement("span");
    fila.textContent = filaCont;
    fila.style.fontSize = "12px";
    fila.style.color = "#9ED0DF";
    fila.style.paddingRight = "20.5px";
    fila.style.letterSpacing  = "0px"; 

    for (let i = 0; i < linea.length; i++) {
      const character = document.createElement("span");
      character.textContent = linea[i];

      if (linea[i] === "-") {
        character.style.fontSize = "23px";
      } else if (linea[i] === "*") {
        character.style.fontSize = "16px";
      }
      // Agregar un espacio después de cada carácter
      const space = document.createTextNode(" ");
      spanLinea.appendChild(character);
      spanLinea.appendChild(space);
    }
    elemento.appendChild(fila);
    
    elemento.appendChild(spanLinea);
    elemento.appendChild(document.createElement("br"));

    filaCont ++
=======
  //recorro las lineas para mostrar el laberinto dando un valor mas grande a los guiones que
  //a los astericos para compensar el tamaño al pintar el laberinto
  arrayLaberinto.forEach((linea) => {
    const spanLinea = document.createElement("span");

    for (let i = 0; i < linea.length; i++) {
      const character = document.createElement("span");
      character.textContent = linea[i];

      if (linea[i] === "-") {
        character.style.fontSize = "23px";
      } else if (linea[i] === "*") {
        character.style.fontSize = "16px";
      }

      spanLinea.appendChild(character);
    }

    elemento.appendChild(spanLinea);
    elemento.appendChild(document.createElement("br"));
>>>>>>> ecf98d4f9be455509ee21c27504cab4c2be81a11
  });
  if (contenido != null) {
    document.getElementById("button-reveal").style.display = "block";
  }
  console.log(typeof arrayLaberinto);
  console.log(arrayLaberinto);
}

//Boton qeu busca el camino mas corto por medio de las funciones
document.getElementById("btn-revelar").addEventListener(
  "click",
  function () {
    if (arrayLaberinto.length > 0) {
      const caminoMasCorto = encontrarCamino(arrayLaberinto);
      console.log("Camino más corto:");
      console.log(caminoMasCorto);
<<<<<<< HEAD
      if (caminoMasCorto.length>0) {
        
        mostrarRutaEnPantalla(caminoMasCorto)
      }else{
        alert("No hay camino para para llegar del punto A al B")
      }
=======

      mostrarRutaEnPantalla(caminoMasCorto)
>>>>>>> ecf98d4f9be455509ee21c27504cab4c2be81a11
      document.getElementById("div-table").style.display ="block";
    } else {
      console.log(
        "No se ha cargado ningún archivo o no se ha leído el contenido del archivo."
      );
    }
  },
  false
);

//se recorre la ruta en una tabla para mostrar en pantalla la revelacion de los movimientos en el laberinto
function mostrarRutaEnPantalla(rutaRevelada){
  document.querySelector("#table-rute tbody").innerHTML ="";
  const ruta = rutaRevelada[0].ruta
  console.log(ruta);

  for (let index = 0; index < ruta.length; index++) {
    const element = ruta[index];
        // Obtener la referencia al tbody de la tabla
        const tbody = document.querySelector("#table-rute tbody");

        // Crear una nueva fila
        const newRow = tbody.insertRow();
        // Crear las celdas y establecer su contenido
        const counterCell =newRow.insertCell();
        counterCell.style.borderRadius = "10px";
        counterCell.style.border = "1px solid";
        counterCell.style.borderColor = "#EBEEF8";
        counterCell.textContent = index +1;
        
        const filaCell = newRow.insertCell();
        filaCell.style.borderRadius = "10px";
        filaCell.style.border = "1px solid";
        filaCell.style.borderColor = "#EBEEF8";
        filaCell.textContent = element.fila;
  
        const columnaCell = newRow.insertCell();
        columnaCell.style.borderRadius = "10px";
        columnaCell.style.border = "1px solid";
        columnaCell.style.borderColor = "#EBEEF8";
        columnaCell.textContent = element.columna; 
  }

}


function encontrarCamino(laberinto) {
  // Encontrar la posición inicial A
  const inicio = encontrarPosicion(laberinto, "A");
  // Encontrar la posición final B
  const fin = encontrarPosicion(laberinto, "B");

  const filaInicial = inicio.fila;
  const columnaInicial = inicio.columna;

  const filaFinal = fin.fila;
  const columnaFinal = fin.columna;

  // Array que es igual de grande al laberinto para guardar los elemento visitados
  const visitados = Array(laberinto.length)
    .fill()
    .map(() => Array(laberinto[0].length).fill(false));

  //Cola para el BFS que permitira buscar el camino Breadth-First Search (Búsqueda en Anchura),
  //La variable "cola" se utiliza como una estructura de datos en forma de cola (FIFO - First In, First Out) para almacenar los nodos o posiciones a visitar durante el recorrido del laberinto. Se agregan nodos a la cola y se procesan en orden de llegada, lo que asegura que se explore primero las posiciones más cercanas al punto de partida antes de expandirse hacia posiciones más lejanas.

  // En resumen, la cola se utiliza como una herramienta para organizar y controlar el orden en que se exploran las posiciones del laberinto durante el proceso de búsqueda del camino más corto.
  const cola = [];
  // Array para almacenar el camino encontrado
  const camino = [];
  // Agregar la posición inicial a la cola
  cola.push({
    fila: filaInicial,
    columna: columnaInicial,
    distancia: 0,
    ruta: [],
  });
  // Marcar la posición inicial como visitada
  visitados[filaInicial][columnaInicial] = true;

  while (cola.length > 0) {
    // Obtener el primer elemento de la cola
    const { fila, columna, distancia, ruta } = cola.shift();

    if (fila === filaFinal && columna === columnaFinal) {
      // Llegamos a la posición final, se encontró el camino más corto
      camino.push({ fila, columna, distancia, ruta }); // Agregar la posición final al camino
      break;
    }

    // Obtener los vecinos (posiciones adyacentes)
    const vecinos = obtenerVecinos(laberinto, fila, columna);

    for (const vecino of vecinos) {
      const { filaVecino, columnaVecino } = vecino;

      if (!visitados[filaVecino][columnaVecino]) {
        // El vecino no ha sido visitado
        visitados[filaVecino][columnaVecino] = true; // Marcar el vecino como visitado
        cola.push({
          fila: filaVecino,
          columna: columnaVecino,
          distancia: distancia + 1,
          ruta: [...ruta, { fila: filaVecino, columna: columnaVecino }],
        }); // Agregar el vecino a la cola con su distancia y ruta
      }
    }
  }

  return camino;
}

//recorremos el array con el laberinto para encontrar el punto inicial y el punto final
function encontrarPosicion(laberinto, caracter) {
  for (let fila = 0; fila < laberinto.length; fila++) {
    for (let columna = 0; columna < laberinto[fila].length; columna++) {
      if (laberinto[fila][columna] === caracter) {
        return { fila, columna };
      }
    }
  }
  return null;
}

//permite explorar desde la posciion todos los lados del laberinto para encontrar el camino a seguir mediante los vecinos que serian los elementos qeu rodean al punto que se evalua
function obtenerVecinos(laberinto, fila, columna) {
  const vecinos = [];

  // Movimientos permitidos: arriba, abajo, izquierda, derecha
  const movimientos = [
    { fila: -1, columna: 0 }, // Arriba
    { fila: 1, columna: 0 }, // Abajo
    { fila: 0, columna: -1 }, // Izquierda
    { fila: 0, columna: 1 }, // Derecha
  ];

  for (const movimiento of movimientos) {
    const filaVecino = fila + movimiento.fila;
    const columnaVecino = columna + movimiento.columna;

    if (
      filaVecino >= 0 &&
      filaVecino < laberinto.length &&
      columnaVecino >= 0 &&
      columnaVecino < laberinto[filaVecino].length &&
      (laberinto[filaVecino][columnaVecino] === "-" ||
        laberinto[filaVecino][columnaVecino] === "B")
    ) {
      vecinos.push({ filaVecino, columnaVecino });
    }
  }

  return vecinos;
}


//cambiar el valor del choosefile a cargar archivo del boton de cargar archivo, al momento de cargar el documento
window.addEventListener("DOMContentLoaded", (event) => {
  const fileInput = document.getElementById("file-selector");
  const customLabel = document.getElementById("custom-label");

  fileInput.addEventListener("change", (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      customLabel.textContent = files[0].name;
    } else {
      customLabel.textContent = "Cargar archivo";
    }
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> ecf98d4f9be455509ee21c27504cab4c2be81a11
