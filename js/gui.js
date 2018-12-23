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
        global.system.pause=false;
        $(".shade,.menu").css("display","block");
        $(".shade").height(webH);
    }
};

function start(){
    global.system.pause=true;
	//隐藏遮罩
    $(".shade,.menu,.start").css("display","none");
    $(".shade").height(0);
    // animation();
}
function pause(){
    global.system.pause=false;
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
        global.system.pause=true;
        // animation();
    });
    $("#normal").click(function () {
        global.objectInfo.pipe.minGap=500; // 中间可通过的最小间隙
        global.objectInfo.pipe.maxGap=1000; // 中间可通过的最大间隙
        global.objectInfo.pipe.istance=1900; // 水管之间的默认距离
        $(".level").css("display","none");
        $(".shade").height(0);
        global.system.pause=true;
        // animation();
    });
    $("#easy").click(function () {
        global.objectInfo.pipe.minGap=1000; // 中间可通过的最小间隙
        global.objectInfo.pipe.maxGap=1500; // 中间可通过的最大间隙
        global.objectInfo.pipe.istance=2500; // 水管之间的默认距离
        $(".level").css("display","none");
        $(".shade").height(0);
        global.system.pause=true;
        // animation();
    });
}
function chooselevel(lev){
	switch (lev){
		case 0://easy
            global.objectInfo.pipe.minGap=1000; // 中间可通过的最小间隙
            global.objectInfo.pipe.maxGap=1500; // 中间可通过的最大间隙
            global.objectInfo.pipe.istance=2500; // 水管之间的默认距离
			$("#lev0").css("color","black");
            $("#lev1").css("color","gray");
            $("#lev2").css("color","gray");
			break;
		case 1://normal
            global.objectInfo.pipe.minGap=500; // 中间可通过的最小间隙
            global.objectInfo.pipe.maxGap=1000; // 中间可通过的最大间隙
            global.objectInfo.pipe.istance=1900; // 水管之间的默认距离
            $("#lev0").css("color","gray");
            $("#lev1").css("color","black");
            $("#lev2").css("color","gray");
			break;
		case 2://hard
            global.objectInfo.pipe.minGap=300; // 中间可通过的最小间隙
            global.objectInfo.pipe.maxGap=500; // 中间可通过的最大间隙
            global.objectInfo.pipe.istance=900; // 水管之间的默认距离
            $("#lev0").css("color","gray");
            $("#lev1").css("color","gray");
            $("#lev2").css("color","black");
			break;
	}
    initPipes();
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