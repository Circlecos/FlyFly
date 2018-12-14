window.onkeydown = function(ev) {
	preventDefaultEvents(ev);

	var keychar = String.fromCharCode(ev.keyCode);
	switch (keychar) {
		case 'a':
		case 'A':
			left = true;
			break;
		case 'd':
		case 'D':
			right = true;
			break;
		case ' ':
			jump = true;
			break;
	}
}
window.onkeyup = function(ev) {
	var keychar = String.fromCharCode(ev.keyCode);
	
	switch (keychar) {
		case 'a':
		case 'A':
			left = false;
			break;
		case 'd':
		case 'D':
			right = false;
			break;
		case ' ':
			jump = false;
			break;
	}
}

function preventDefaultEvents(ev){
	if (ev && ev.preventDefault){
		//阻止默认浏览器动作(W3C) 
		ev.preventDefault();
	}	
	else{
		//IE中阻止函数器默认动作的方式 
		window.event.returnValue = false;
	}
}
