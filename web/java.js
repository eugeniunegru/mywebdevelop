function onclick1(){
	var par=document.getElementById('paragraf');
	par.innerHTML=Date();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function onclick2(){
var block=document.getElementById('head');
//document.getElementById('paragraf').innerHTML=getRandomColor();
block.style.background=getRandomColor();
block.style.color=getRandomColor();
}