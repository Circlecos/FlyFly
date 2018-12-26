// 处理游戏过程中的事件
// 1、碰撞
// 2、计分
// 3、暂停
// 4、终止

var GAME_OVER = false;
var SCORE_SPEED = 1;
var score = 0;
var level = 1;

function updateCurrScore() {
	score += SCORE_SPEED;
	
	if (score > 1000 && level == 1) {
		levelUp();
	}else if (score > 2000 && level == 2) {
		levelUp();
	}else if (score > 3000 && level == 3) {
		levelUp();
	}else if (score > 4000 && level == 4) {
		levelUp();
	}else if (score > 5000 && level == 5) {
		levelUp();
	}
	
	$('#currScore').html(score);
}

// 游戏难度提升
function levelUp() {
	level++;
	global.moving.moveForwardSpeed += (global.moving.moveForwardSpeed * 0.15);
	$('#sysTip').html('Speed Up!');
	$('#sysTip').fadeIn(1500).fadeOut(1500);
	$('#levelUpAudio')[0].play();
}

// 游戏终止逻辑
function gameOver() {
	if (global.system.pause == true) {
        global.system.pause = false;

        var currScore = score;
        var historyTopScore = global.system.historyTopScore;
        var comment = "不要灰心，再接再厉！";
        if (currScore > historyTopScore) {
            comment = "打破记录，可喜可贺！";
            updateHistoryTopScore();
        }
        var message = "游戏结束！\n";
        message += ("本次得分：" + currScore + "\n");
        message += ("历史最高分：" + historyTopScore + "\n");
        message += ("评语：" + comment);
        alert(message);

        // 重刷页面
        setTimeout(function () {
            window.location.reload();
        }, 0);
    }
}

// 更新历史最高分
function updateHistoryTopScore() {
	//ajax请求
	$.ajax({
		type: "GET",
		async: true,
		url: "https://twicegram.top/api/api.php",
		dataType: "jsonp",
		jsonp: "callbackparam",
		data: {
			op: "updateScore",
			score: score
		},
		success: function(res) {
			
		}
	});
}
