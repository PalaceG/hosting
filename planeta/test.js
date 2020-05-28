//codigo planeta
//Hecho por sebastian Palacio
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//creacion de la figura
var geometry2 = new THREE.SphereGeometry( 8, 32, 32 );
//creacion de la textura
var loader = new THREE.TextureLoader();
var texture = loader.load("https://static3.diariovasco.com/www/multimedia/201808/22/media/cortadas/mapamundi-kVxD-U60705670296r0C-984x608@Diario%20Vasco.jpg");
//cargamos la textura en el material de la figura
var material2 = new THREE.MeshBasicMaterial({map:texture, normalMap:texture});
var sphere = new THREE.Mesh( geometry2, material2 );

//se añade la esfera con la textura en la escena
scene.add( sphere );
camera.position.z = 30;

var animate2 = function(){
	requestAnimationFrame( animate2 );

    //rotacion unicamente en y
	sphere.rotation.y += 0.008;

	renderer.render( scene, camera);
};
animate2();