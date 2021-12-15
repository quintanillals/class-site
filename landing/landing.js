// const section = document.querySelector("section.book")
//
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
//
// const ambient = new THREE.AmbientLight(0x222222)
// scene.add(ambient)
//
// const light = new THREE.DirectionalLight(0xffffff)
// light.position.set(0, 0, 6)
// scene.add(light)
//
// const loader = new THREE.TextureLoader()
//
// const urls = [
//   "face-face.png", "face-spine.png", "face-top.png", "face-bottom.png", "face-front.png", "face-back.png"
// ]
//
// const materials = urls.map(url => {
//   return new THREE.MeshLambertMaterial({
//     map:loader.load(url)
//   })
// })
//
// const geometry = new THREE.BoxGeometry(3, 3, 3);
// const cube = new THREE.Mesh( geometry, materials );
// scene.add( cube );
//
// camera.position.z = 6;
//
// let currentTimeline = window.pageYOffset / 3000
// let aimTimeline = window.pageYOffset / 3000
//
// function animate() {
// 	requestAnimationFrame( animate );
//
//   currentTimeline += (aimTimeline - currentTimeline) * 0.1
//
//   const rx = currentTimeline * -0.5 + 0.6
//   const ry = (currentTimeline * 0.9 + 0.1) * Math.PI * 2
//
//   cube.rotation.set(rx, ry, 0)
//
// 	renderer.render( scene, camera );
// }
//
//
// animate();
//
// window.addEventListener("scroll", function () {
//   aimTimeline = window.pageYOffset / 1000
// })

// new
// const section = document.querySelector("spinning-cube")
//
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
//
// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
//
// camera.position.z = 5;
//
// //Create an render loop to allow animation
// var render = function () {
//     requestAnimationFrame( render );
//
//     cube.rotation.x += 0.05;
//     cube.rotation.y += 0.05;
//
//     renderer.render(scene, camera);
// };
//
// render();


// new NEW


var scene, camera, renderer;

var WIDTH  = window.innerWidth;
var HEIGHT = window.innerHeight;

var SPEED = 0.01;

function init() {
    scene = new THREE.Scene();

    initCube();
    initCamera();
    initRenderer();

    document.body.appendChild(renderer.domElement);
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 1, 10);
    camera.position.set(0, 3.5, 5);
    camera.lookAt(scene.position);
}

function initRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
}

function initCube() {
    cube = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
    scene.add(cube);
}

function rotateCube() {
    cube.rotation.x -= SPEED * 2;
    cube.rotation.y -= SPEED;
    cube.rotation.z -= SPEED * 3;
}

function render() {
    requestAnimationFrame(render);
    rotateCube();
    renderer.render(scene, camera);
}

init();
render();
