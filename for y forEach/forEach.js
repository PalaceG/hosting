//Reproduce una variable especifica por todos los valores de las propiedades del objeto. Para cada propiedad distinta se ejecuta una sentencia especifica.
var p=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i=0
var list=
        alert("Escribe 10 colores")
         p.forEach(asking)
         function asking (){
         	p [i] =prompt("Inserte un color")
         	if( i > 0 && i <= 9){
         	p [i] =" "+p[i]	
         	}
         	i++
         }
         document.write("Sus colores son: "+p);