// 初始化系统音效或音乐
function initSystemSound() {
	loadSysSounds();
	
	document.getElementById("modelLoadStatus").value++;
	document.getElementById("modelLoadStatus").onchange();
}

// 创建audio标签并加载系统音效
function loadSysSounds() {
	var levelUpAudio = $("<audio id='levelUpAudio' src='sound/levelUp.wav' preload='auto'></audio>");
	$('body').append(levelUpAudio);
	
	var eatRewardAudio = $("<audio id='eatRewardAudio' src='sound/eatReward.wav' preload='auto'></audio>");
	$('body').append(eatRewardAudio);
}