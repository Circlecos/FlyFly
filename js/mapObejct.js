function initGrid() {
    var helper = new THREE.GridHelper(10000, 100, 0x0000ff, 0x808080);
    scene.add(helper);
}

function initObject() {
    //墙
    var geometry = new THREE.BoxGeometry( 100, 100000, 1000 );
    var material = new THREE.MeshPhongMaterial( {color: 0xff0000,opacity:0.01} );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    cube.position.x = 550;
    // 圆柱
    var geometry = new THREE.CylinderGeometry(500, 500, 2000, 320);
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });
    cylinder = new THREE.Mesh(geometry, material);
    cylinder.position = new THREE.Vector3(0, 0, 0);
    scene.add(cylinder);
    
    var geometry = new THREE.CylinderGeometry(500, 500, 3000, 320);
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });
    cylinder2 = new THREE.Mesh(geometry, material);
    cylinder2.position = new THREE.Vector3(0, 0, 0);
    scene.add(cylinder2);

    var geometry = new THREE.BoxGeometry(100, 100, 100);

    for (var i = 0; i < geometry.faces.length; i += 2) {

        var hex = Math.random() * 0xffffff;
        geometry.faces[i].color.setHex(hex);
        geometry.faces[i + 1].color.setHex(hex);

    }
    
    // scene.remove(cylinder);
    
    cylinder.position.z = -1500;
    cylinder2.position.z = -3500;

    var material = new THREE.MeshBasicMaterial({
        vertexColors: THREE.FaceColors
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position = new THREE.Vector3(110, 110, 110);
    scene.add(mesh);
    console.log(mesh.id);
    console.log(cylinder.id);

}

function generateObstacles(){

}

function generateRewards(){

}

