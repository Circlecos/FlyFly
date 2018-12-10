

// 碰撞检测函数


function collision(){
    var originPoint = mesh.position.clone();

    for (var vertexIndex = 0; vertexIndex < mesh.geometry.vertices.length; vertexIndex++) {
        // 顶点原始坐标
        var localVertex = mesh.geometry.vertices[vertexIndex].clone();
        // 顶点经过变换后的坐标
        var globalVertex = localVertex.applyMatrix4(mesh.matrix);
        // 获得由中心指向顶点的向量
        var directionVector = globalVertex.sub(mesh.position);

        // 将方向向量初始化
        var ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
        // 检测射线与多个物体的相交情况
        var collisionResults = ray.intersectObjects([cylinder]);
        // 如果返回结果不为空，且交点与射线起点的距离小于物体中心至顶点的距离，则发生了碰撞
        if (collisionResults.length > 0 && collisionResults[0].distance < directionVector.length()) {
            // crash = true; // crash 是一个标记变量
            // alert("yes");
            console.log(collisionResults[0].object.position);
            collisionResults[0].object.attr = 5;
            console.log(collisionResults[0].object.attr)
        }
    }
}

// 碰到障碍物时中止游戏
function collideObstacles(){

}

// 碰到奖品时增加分数
function collideRewards(){

}