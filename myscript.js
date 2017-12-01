var i = 3;
function left(){
	var temp = --i;
	var imgsrc = temp.toString() + ".png";
	checkscroll();
	console.log('Scrolling left ',i);
	var image = document.getElementById("myimage").setAttribute("src", imgsrc);
	return 1;
}

function right(){
	var temp = ++i;
	var imgsrc = temp.toString() + ".png";
	checkscroll();
	console.log('Scrolling left ',i);
	var image = document.getElementById("myimage").setAttribute("src", imgsrc);
	return 1;
}

function checkscroll(){
		if(i==1){
		console.log('disabling left scroll');
		document.getElementById("leftscroll").style.display="none";
	}else if(i==5){
		console.log('disabling right scroll');
		document.getElementById("rightscroll").style.display="none";
	}else{
		document.getElementById("leftscroll").style.display="inline";
		document.getElementById("rightscroll").style.display="inline";
	}
}