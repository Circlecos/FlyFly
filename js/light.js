// 暂时先造着这个文件

function initLight() {
    light = new THREE.DirectionalLight(0xffffff,1);
	setLocation(light, 1, 0.4, 0);
    scene.add(light);
}