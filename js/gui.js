// 界面逻辑
/*
    1. 开始
    2. 暂停
    3. 评分显示与更新
    4. 控制说明
*/

var webH = $(window).height();

document.onkeydown = function (event) {
    var oEvent = window.event;
    if (oEvent&&oEvent.keyCode == 27) {//显示遮罩
        flag=false;
        $(".shade,.menu").css("display","block");
        $(".shade").height(webH);
    }
};

function start(){
	flag=true;
	//隐藏遮罩
    $(".shade,.menu,.start").css("display","none");
    $(".shade").height(0);
	animation();
}
function pause(){
	flag=false;
    $(".shade,.menu").css("display","none");
    $(".shade").height(0);
}
function choose(){
	$(".menu").css("display","none");
    $(".level").css("display","block");
}
function ret(){
    $(".level").css("display","none");
    $(".menu").css("display","block");
}
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