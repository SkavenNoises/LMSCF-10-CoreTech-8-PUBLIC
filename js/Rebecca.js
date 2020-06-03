function changeMe() {
	var back = document.getElementById('content');
	var colorArray = [];
	for (let i = 0; i < 3; i++) {
		colorArray.push(Math.floor(Math.random() * 255));
	}
	return (back.style.backgroundColor = 'rgb' + '(' + colorArray + ')');
} 