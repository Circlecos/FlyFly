
function initMoveEvents(){
    // todo: 1.修复moveEvent 2.添加鼠标实现的环视逻辑（可能）
    if (up) {
        rotateAroundWorldAxis(mesh, new THREE.Vector3(1, 0, 0), -rotateX);
        mesh.position.z -= speedX;
        camera.position.z -= speedX;
    }
    if (down) {
        rotateAroundWorldAxis(mesh, new THREE.Vector3(1, 0, 0), rotateX);
        mesh.position.z += speedX;
        camera.position.z += speedX;
    }
    if (left) {
        rotateAroundWorldAxis(mesh, new THREE.Vector3(0, 0, 1), rotateX);
        mesh.position.x -= speedX;
        camera.position.x -= speedX;
    }
    if (right) {
        rotateAroundWorldAxis(mesh, new THREE.Vector3(0, 0, 1), -rotateX);
        mesh.position.x += speedX;
        camera.position.x += speedX;
    }
    if (jump) {
        mesh.position.y += 30;
        camera.position.y += 30;
    }
    if (!jump) {
        if (mesh.position.y > 0) {
            mesh.position.y -= 10;
            camera.position.y -= 10;
        }
    }


    window.onkeydown = function(ev) {
        var keychar = String.fromCharCode(ev.keyCode);
        console.log(keychar)
        switch (keychar) {
            case 'w':
            case 'W':
                up = true;
                break;
            case 'a':
            case 'A':
                left = true;
                break;
            case 'd':
            case 'D':
                right = true;
                break;
            case 's':
            case 'S':
                down = true;
                break;
            case ' ':
                jump = true;
                break;
        }
    }
    window.onkeyup = function(ev) {
        var keychar = String.fromCharCode(ev.keyCode);
        switch (keychar) {
            case 'w':
            case 'W':
                up = false;
                break;
            case 'a':
            case 'A':
                left = false;
                break;
            case 'd':
            case 'D':
                right = false;
                break;
            case 's':
            case 'S':
                down = false;
                break;
            case ' ':
                jump = false;
                break;
        }
    }
}

