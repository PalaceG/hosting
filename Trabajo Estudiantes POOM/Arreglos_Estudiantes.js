var estudiantes=["-Sebastian Palacio",
"<br> -Daniel Gracia",
"<br> -Nicolas Rivera",
"<br> -Juanito Alimaña",
"<br> -Pedro Navaja",
"<br> -Camila Campo",
"<br> -Yasuo Jimenez",
"<br> -Izuku Midoriya",
"<br> -Naruto Uzumaki",
"<br> -Sasuke Uchiha."];

document.write("Nombres y Apellidos: <br>"+estudiantes);

var codigos=["56982",
"<br> 58943",
"<br> 54623",
"<br> 57234",
"<br> 54392",
"<br> 12159",
"<br> 71290",
"<br> 63345",
"<br> 23582",
"<br> 57456."];

document.write("<br>"+"<br> Codigo del estudiante: <br>"+codigos);

var matematicas=[3.0,
5.0,
3.8,
3.6,
4.0,
2.4,
3.5,
4.5,
2.8,
5.0];

document.write("<br>"+"<br> Notas de matematicas: <br>"+matematicas[0]+"<br>"
	+matematicas[1]+"<br>"
	+matematicas[2]+"<br>"
	+matematicas[3]+"<br>"
	+matematicas[4]+"<br>"
	+matematicas[5]+"<br>"
	+matematicas[6]+"<br>"
	+matematicas[7]+"<br>"
	+matematicas[8]+"<br>"
	+matematicas[9]+"<br>");

var historia=[2.7,
4.8,
3.7,
2.3,
4.3,
3.8,
2.9,
5.0,
4.0,
5.0];

document.write("<br>"+"<br> Notas de historia: <br>"+historia[0]+"<br>"
	+historia[1]+"<br>"
	+historia[2]+"<br>"
	+historia[3]+"<br>"
	+historia[4]+"<br>"
	+historia[5]+"<br>"
	+historia[6]+"<br>"
	+historia[7]+"<br>"
	+historia[8]+"<br>"
	+historia[9]+"<br>");

var biologia=[5.0,
3.9,
3.6,
3.8,
4.5,
3.8,
2.7,
5.0,
1.5,
4.0];

document.write("<br>"+"<br> Notas de biologia: <br>"+biologia[0]+"<br>"
	+biologia[1]+"<br>"
	+biologia[2]+"<br>"
	+biologia[3]+"<br>"
	+biologia[4]+"<br>"
	+biologia[5]+"<br>"
	+biologia[6]+"<br>"
	+biologia[7]+"<br>"
	+biologia[8]+"<br>"
	+biologia[9]+"<br>");

var ingles=[4.0,
5.0,
4.0,
4.0,
3.7,
4.5,
3.0,
1.9,
5.0,
2.9];

document.write("<br>"+"<br> Notas de ingles: <br>"+ingles[0]+"<br>"
	+ingles[1]+"<br>"
	+ingles[2]+"<br>"
	+ingles[3]+"<br>"
	+ingles[4]+"<br>"
	+ingles[5]+"<br>"
	+ingles[6]+"<br>"
	+ingles[7]+"<br>"
	+ingles[8]+"<br>"
	+ingles[9]+"<br>");

var promedio=[((matematicas[0]+historia[0]+biologia[0]+ingles[0])/4),
((matematicas[1]+historia[1]+biologia[1]+ingles[1])/4),
((matematicas[2]+historia[2]+biologia[2]+ingles[2])/4),
((matematicas[3]+historia[3]+biologia[3]+ingles[3])/4),
((matematicas[4]+historia[4]+biologia[4]+ingles[4])/4),
((matematicas[5]+historia[5]+biologia[5]+ingles[5])/4),
((matematicas[6]+historia[6]+biologia[6]+ingles[6])/4),
((matematicas[7]+historia[7]+biologia[7]+ingles[7])/4),
((matematicas[8]+historia[8]+biologia[8]+ingles[8])/4),
((matematicas[9]+historia[9]+biologia[9]+ingles[9])/4)];

document.write("<br>"+"<br> Promedio de las notas: <br>"+promedio[0]+"<br>"
	+promedio[1]+"<br>"
	+promedio[2]+"<br>"
	+promedio[3]+"<br>"
	+promedio[4]+"<br>"
	+promedio[5]+"<br>"
	+promedio[6]+"<br>"
	+promedio[7]+"<br>"
	+promedio[8]+"<br>"
	+promedio[9]+"<br>");