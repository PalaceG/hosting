//Figura Geometrica
//Elementos fundamentales para crear una animacion: Escena, Camara, render,el objeto
//Creado por: Sebastian Andres Palacio

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//Crear un cubo con .BoxGeometry
var geometry = new THREE.BoxGeometry( 1, 1, 1);

//Crear una esfera con .SphereGeometry (Entre mas caras se agreguen el circulo sera mas redondo)
var geometry2 = new THREE.SphereGeometry( 1, 32, 32 );

//los colores los elegi con colorPicker (crtl+shift+c)
var material = new THREE.MeshBasicMaterial( {color: 0xE400FF} );
var material2 = new THREE.MeshNormalMaterial({color: 0xff0000, wireframe:true});

//Aqui se crean las dos figuras
var sphere = new THREE.Mesh( geometry2, material2 );
var cube = new THREE.Mesh(geometry, material);

//scene.add sirve para añadir objetos en la escena
scene.add( cube );
scene.add( sphere );

//Este comando sirve para que las figuras no se junten
cube.position.x-=3;

//Aqui definimos la posicion de la camara solo en z
camera.position.z = 4;

//Esto sirve para animar las 2 figuras
var animate = function(){
	requestAnimationFrame( animate );

	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;

	renderer.render( scene, camera);
};
animate();
var animate2 = function(){
	requestAnimationFrame( animate2 );

	sphere.rotation.x += 0.02;
	sphere.rotation.y += 0.02;

	renderer.render( scene, camera);
};
animate2();


