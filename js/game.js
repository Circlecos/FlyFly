// 处理游戏过程中的事件
// 1、碰撞
// 2、计分
// 3、暂停
// 4、终止

var GAME_OVER = false;
var score = 0;
var SCORE_SPEED = 1;

function updateCurrScore() {
	score += SCORE_SPEED;

	$('#currScore').html(score);
}

// 碰到水管时中止游戏
function collidePipes() {

}

// 碰到奖品时增加分数
function collideRewards() {

}

// 游戏终止逻辑
function gameOver() {
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
	setTimeout(function() {
		window.location.reload();
	}, 0);
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
