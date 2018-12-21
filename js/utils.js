/**
 * 碰撞检测函数
 * @param {Object3D} obj 本体对象
 * @param {Object3D[]} objArray 待碰撞对象数组
 * @return {Object3D} 返回相撞对象
 */
function collision(obj, objArray) {
	var originPoint = obj.position.clone();

	for (var vertexIndex = 0; vertexIndex < obj.geometry.vertices.length; vertexIndex++) {
		// 顶点原始坐标
		var localVertex = obj.geometry.vertices[vertexIndex].clone();
		// 顶点经过变换后的坐标
		var globalVertex = localVertex.applyMatrix4(obj.matrix);
		// 获得由中心指向顶点的向量
		var directionVector = globalVertex.sub(obj.position);
		// 将方向向量初始化
		var ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
		// 检测射线与多个物体的相交情况
		var collisionResults = ray.intersectObjects(objArray);
		// 如果返回结果不为空，且交点与射线起点的距离小于物体中心至顶点的距离，则发生了碰撞
		if (collisionResults.length > 0 && collisionResults[0].distance < directionVector.length()) {
			return collisionResults[0].object;
		}
	}

	return null;
}

/**
 * 将一个物体绕任意轴旋转
 * @param {Object3D} object 待旋转对象
 * @param {THREE.Vector3} axis 任意轴向量
 * @param {float} radians 旋转角度
 * @return {} 无返回值
 */
function rotateAroundVector(object, axis, radians) {
	var rotWorldMatrix;
	rotWorldMatrix = new THREE.Matrix4();
	rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
	rotWorldMatrix.multiply(object.matrix); // pre-multiply
	object.matrix = rotWorldMatrix;
	object.rotation.setFromRotationMatrix(object.matrix);
	object.updateMatrix();
}

/**
 * 随机数生成函数
 * @param {int} minNum 最小值
 * @param {int} maxNum 最大值
 * @return {int} 返回minNum到maxNum的随机整数
 */
function randomNum(minNum, maxNum) {
	switch (arguments.length) {
		case 1:
			return parseInt(Math.random() * minNum + 1, 10);
			break;
		case 2:
			return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
			break;
		default:
			return 0;
			break;
	}
}

/**
 * 设置任意对象的位置
 * @param {int} x X坐标
 * @param {int} y Y坐标
 * @param {int} z Z坐标
 * @return {} 无返回值
 */
function setLocation(obj, x, y, z) {
	obj.position.x = x;
	obj.position.y = y;
	obj.position.z = z;
}
