// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //slice corta el string y muestra el resto de ahi en adelante
  return nombre[0].toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  // return aqui no es obligatorio porque solo es invocar
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb (n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
 // metodo reduce hace lo del for

  var suma = 0;
    for (var i=0; i< numeros.length; i++){
      suma = suma + numeros[i];
    }
  cb(suma);

  //var suma = numeros.reduce(function (acum, contador){
 //   return acum + contador;
  //}, 0);
  //cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  // for (var i =0; i<array.length; i++){
   // cb(array[i]);
  //}
  array.forEach(function(elemento){
    return cb(elemento);
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  //map pasa por todo el arreglo y crea uno nuevo
//var arr =[];
//for (var i=0; i<array.length; i++ ){
//  arr.push(cb(array[i]));
//}
//return arr;

  return array.map(function(elemento){
    return cb(elemento);
  });
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  //el filtro verifica si la condicion es igual en los elementos
  //var nuevoArr= [];
  //for (var i=0; i<array.length; i++){
    //if (array[i][0] === "a"){
     // nuevoArr.push(array[i]);
   // }
 // }
  //return nuevoArr;

  return array.filter(function(elemento){
    return elemento[0] === "a";
  })
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
