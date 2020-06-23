var glCanvas = document.getElementById("glcanvas");
var scena = new THREE.Scene({color: 0x080808});
var perspCamera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);

var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Funkcja odpowiedzialna za wyświetlanie naszych elementów na scenie.
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scena, perspCamera);
}

// Światło które będzie padać na naszą figurę.
var dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(-15, 10, 9);
perspCamera.add(dirLight);
scena.add(perspCamera);

// Kolor całej figury.
kolorFigury = new THREE.MeshPhongMaterial({color: 0xffffff,});
white = new THREE.MeshPhongMaterial();
// Podstawa - 1 grupa.
postawaCylinder1 = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 100);
podstawaDol = new THREE.Mesh(postawaCylinder1, kolorFigury);

postawaCylinder2 = new THREE.CylinderGeometry(0.65, 0.7, 0.10, 100);
podstawaGora = new THREE.Mesh(postawaCylinder2, kolorFigury);

podstawaGora.position.y = 0.15;

segment1_podstawa = new THREE.Group();
segment1_podstawa.add(podstawaDol);
segment1_podstawa.add(podstawaGora);

segment1_podstawa.position.set(0, -3.75, 0);
segment1_podstawa.scale.set(3,2,2);

size = 0.2;

// Człon - 2 grupa
czlonCylinder1 = new THREE.CylinderGeometry(1.2, 1.7, 2, 100);
czlonDol = new THREE.Mesh(czlonCylinder1, kolorFigury);

czlonDol.position.set(0, -2, -0);

czlonCylinder2 = new THREE.CylinderGeometry(0.9, 1.21, 2, 100);
czlonGora = new THREE.Mesh(czlonCylinder2, kolorFigury);

var segment2_czlon = new THREE.Group();
segment2_czlon.add(czlonDol);
segment2_czlon.add(czlonGora);

// Obręcz1 - 3 grupa
obreczCylinder1 = new THREE.CylinderGeometry(1.75, 1.75, 0.7, 100);
obreczDol = new THREE.Mesh(obreczCylinder1, kolorFigury);

obreczCylinder2 = new THREE.CylinderGeometry(0.8, 0.8, 1.5, 100);
obreczGora = new THREE.Mesh(obreczCylinder2, kolorFigury);

segment3_obrecz = new THREE.Group();
segment3_obrecz.add(obreczDol);
segment3_obrecz.add(obreczGora);

segment3_obrecz.position.set(0, 1, 0);

// Obręcz2 - 4 grupa
obrecz2Cylinder1 = new THREE.CylinderGeometry(1.8, 1.8, 0.6, 100);
obrecz2Dol = new THREE.Mesh(obrecz2Cylinder1, kolorFigury);

obrecz2Cylinder2 = new THREE.CylinderGeometry(0.8, 0.8, 1.5, 100);
obrecz2Gora = new THREE.Mesh(obrecz2Cylinder2, kolorFigury);

segment3_obrecz2 = new THREE.Group();
segment3_obrecz2.add(obrecz2Dol);
segment3_obrecz2.add(obrecz2Gora);

segment3_obrecz2.position.set(0, 1.5, 0);

// Obręcz3 - 5 grupa
obrecz3Cylinder1 = new THREE.CylinderGeometry(1.3, 1.3, 0.6, 100);
obrecz3Dol = new THREE.Mesh(obrecz3Cylinder1, kolorFigury);

obrecz3Cylinder2 = new THREE.CylinderGeometry(0.8, 0.8, 1.5, 100);
obrecz3Gora = new THREE.Mesh(obrecz3Cylinder2, kolorFigury);


segment3_obrecz3 = new THREE.Group();
segment3_obrecz3.add(obrecz3Dol);
segment3_obrecz3.add(obrecz3Gora);

segment3_obrecz3.position.set(0, 0.5, 0);

calaFigura = new THREE.Group();

calaFigura.add(segment1_podstawa, segment2_czlon, segment3_obrecz,segment3_obrecz2,segment3_obrecz3);
scena.add(calaFigura);

perspCamera.position.z = 6;

animate();
