// 界面逻辑
/*
    1. 开始
    2. 暂停
    3. 评分显示与更新
    4. 控制说明
*/

function initGUI(){
	initScore();
}

function initScore() {
	//ajax请求
	$.ajax({
		type: "GET",
		async: true,
		url: "https://twicegram.top/api/api.php",
		dataType: "jsonp",
		jsonp: "callbackparam",
		data: {
			op: "getHistoryTopScore"
		},
		success: function(res) {
			var historyTopScore = res['historyTopScore'];
			$('#historyTopScore').html(historyTopScore);
			global.system.historyTopScore = historyTopScore;
		}
	});
}