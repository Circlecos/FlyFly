// 界面逻辑
/*
    1. 开始
    2. 暂停
    3. 评分显示与更新
    4. 控制说明
*/

var webH = $(window).height();
//按下"esc"键选择菜单
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
    $("#hard").click(function () {
        global.objectInfo.pipe.minGap=300; // 中间可通过的最小间隙
        global.objectInfo.pipe.maxGap=500; // 中间可通过的最大间隙
        global.objectInfo.pipe.istance=900; // 水管之间的默认距离
        $(".level").css("display","none");
        $(".shade").height(0);
        flag=true;
        animation();
    });
    $("#noraml").click(function () {
        global.objectInfo.pipe.minGap=500; // 中间可通过的最小间隙
        global.objectInfo.pipe.maxGap=1000; // 中间可通过的最大间隙
        global.objectInfo.pipe.istance=1900; // 水管之间的默认距离
        $(".level").css("display","none");
        $(".shade").height(0);
        flag=true;
        animation();
    });
    $("#easy").click(function () {
        global.objectInfo.pipe.minGap=1000; // 中间可通过的最小间隙
        global.objectInfo.pipe.maxGap=1500; // 中间可通过的最大间隙
        global.objectInfo.pipe.istance=2500; // 水管之间的默认距离
        $(".level").css("display","none");
        $(".shade").height(0);
        flag=true;
        animation();
    });
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