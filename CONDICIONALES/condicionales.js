//Archivo para aprender a usar condicionales
//Creado por Sebastian Andres Palacio 

//for(i=0; i<=10; i++){

//j+1

//}
//var frutas=[];

//forEach(function())

//Este archivo lo vamos a crear para probar los condicionales
//Primer Condicional
var nombre= "Alejandra";
var edad=18;

if (nombre=='Angie') {
	
	document.write("Bienvenido "+nombre+"<br>");
}else{

	document.write("Bienvenido eres un invitado"+"<br>");
}

//investigar los diferentes operadores de javascript y hacer un ejemplo con cada uno de ellos
//Tipos de variables caracter, numericas, de punto flotante, booleanas. Ejemplos de variables y cuantas mas existen?

//Una Condicion pero preguntando con else if

if(edad>=18){
	document.write("<br>"+"Eres mayor de edad"+"<br>");
}else{
	document.write("<br>"+"No eres mayor de edad"+"<br>");

}

//Combinando tres opciones

if (edad==18 && nombre=='Alejandra') {

	document.write("<br>"+"Eres mayor de edad");
	document.write("<br>"+"Bienvenida "+nombre);

}else if (edad==18 && nombre!='Alejandra') {
	document.write("<br>"+"Eres mayor de edad");
	document.write("<br>"+"Bienvenido Usuario");

}else{
	document.write("<br>"+"No cumples las condiciones");
}

//Con condicionales puedo usar
// < menor que
// > mayor que
// > mayor o igual
// < menor o igual
// == igual que
// =! distinto que


var gato=[]
var perro=[]
var niño=[]

//codigo meses y años bisiestos desde 1900