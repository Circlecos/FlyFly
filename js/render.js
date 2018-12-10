// 帧循环、游戏循环
function animation() {
    
    var ret = collision();

    makeSomethingWithRet();

    // controls.update();
    
    //绘制新的障碍物和奖励物
    drawNewMapObjects();


    renderer.render(scene, camera);
    requestAnimationFrame(animation);
}


// 处理碰撞检测返回的结果（是否中止）
function makeSomethingWithRet(){

}

// 绘制新的障碍物和奖励物并处理循环逻辑
// 当遇到最后`globalInfo.mapObject.renderNum`个障碍物时额外渲染
// 通过最后一个障碍物后将场景拉回 循环位置（假设为新关卡（可能））
function drawNewMapObjects(){

}