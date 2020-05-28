//Este documento es mi trabajo sobre arreglos y sus variables
//Hecho por Sebastian Palacio el dia 4-marzo-2020

//Declaracion de un arreglo

//Se declara una variable y se asigna a un arreglo

var fruta=[];
document.write("Que tiene el arreglo de fruta: "+ fruta+" Esta vacio"+"<br>" );
//Segunda forma de declara una variable y se asigna a un arreglo
var fruta= new Array();
fruta=["Guama"];

//Ahora fruta tiene Guama

document.write("<br> Que tiene ahora el arreglo fruta: "+fruta+"<br>");

//Voy a llenar un nuevo arreglo con muchas frutas

var frutas=["Manzanas"," Bananos"," Piñas"," Naranjas"," Peras"];

//Voy a mostrar el arreglo en pantalla

document.write("<br> Estas son las frutas del arreglo: "+frutas+"<br>");

//Voy a escoger una fruta del arreglo

document.write("<br> Esta es la fruta escogida del arreglo:"+frutas[3]+"<br>");

document.write("<br> Estas son las frutas escogidas del arreglo:"+frutas[1]+", "+frutas[4]+"<br>");

//La coma que esta entre las 2 frutas sirve para que no salga todo junto

//Quiero saber cual es mi primera fruta

var primero =frutas[0];

//Quiero saber cual el la ultima fruta de mi arreglo

var ultima =frutas[frutas.length -1];

//El comando length sirve para medir el arreglo y al restarle 1 muestra la ultima posicion

document.write("<br> Esta es la primera fruta de mi arreglo:"+primero+"<br>");

document.write("<br> Esta es la ultima fruta de mi arreglo:"+ultima+"<br>");

//Añadir un elemento al final del arreglo

var nuevalongitud=frutas.push(' Papaya');

//Aqui muestro el tamaño de mi arreglo y los elementos del mismo

document.write("<br> Esta es la ultima longitud del arreglo de frutas: "+nuevalongitud+"<br>");

//De esta manera se puede mostrar el total del arreglo con el nuevo elemento

document.write("<br> Total del arreglo: "+frutas+"<br>");

//Metemos mas elementos

var nuevalongitud=frutas.push(' Pitaya',' Frambuesa');

//Aqui muestro el tamaño de mi arreglo y los elementos del mismo con los nuevos elementos

document.write("<br> Esta es la ultima longitud del arreglo de frutas: "+nuevalongitud+"<br>");

//Aqui se muestran los nuevos elementos agregados al arreglo

document.write("<br> Total del arreglo: "+frutas+"<br>");

//Eliminar elementos del arreglo
var ultimo=frutas.pop();
document.write("<br> Esta es la ultima fruta de mi arreglo:"+ultimo+"<br>");
document.write("<br> Estas son mis frutas ahora: "+frutas+"<br>");

//Añadir elementos al icio de un array
var nuevaLongitud=frutas.unshift(' Coco',' Anon');
document.write("<br> Estas son las frutas de mi arreglo ahora:"+frutas+"<br>");

//Eliminar elemento al final del array
var elimina=frutas.shift();

document.write("<br> Este es el elemento que se elimino al principio: "+elimina+"<br>");

//Bucle sobre un array y uso de forEach
frutas.forEach(function(elemento, indice, array){
	document.write(indice," ", elemento,"<br>");
});
document.write("<br>");

