  var imgpos=1;
  var myVar;
  var timer;
    var timp=0;
function next(){
if (imgpos==7) {imgpos=1;}
else imgpos++;
  document.getElementsByClassName('banner')[0].style.backgroundImage="url(\"images/slide/image"+imgpos+".jpg\")";
 
}
function prev(){
if (imgpos==1) {imgpos=7;}
else imgpos--;
   document.getElementsByClassName('banner')[0].style.backgroundImage="url(images/slide/image"+imgpos+".jpg)";
 
}
function myTimer() {
  timp++;
  if (timp==2) {clearInterval(myVar);document.getElementById('preloader').style.display="none";
} 
}
function myFunctionshow(){

  myVar = setInterval(myTimer ,1000);
  document.getElementById('preloader').style.opacity="0"; 
}

function corect(){
	var prenume=new RegExp("^[A-Z]{1}[a-z]+$");	
	var nume=new RegExp("^[A-Z]{1}[a-z]+$");
	var data=new RegExp("^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$");
	var oras=new RegExp("^[a-z]+[.][A-Z]{1}[a-z]+$");
	var strad=new RegExp("^[a-z]+[.][A-Z]{1}[a-z]+$");
	var email=new RegExp("^[A-Za-z0-9-_]+[@][A-Za-z0-9-_]+[.][A-Za-z0-9-_]+$");
	var telefon=new RegExp("^[0-9]{3}[-][0-9]{3}[-][0-9]{3}$");
	// alert(document.getElementById("form_Row2_Column4_Fieldset6_prenume").value);
	if (document.getElementById("form_Row2_Column4_Fieldset6_prenume").value.match(prenume))
		document.getElementById("form_Row2_Column4_Fieldset6_prenume").style.border="2px solid green";
	else document.getElementById("form_Row2_Column4_Fieldset6_prenume").style.border="2px solid red";

	if (document.getElementById("form_Row2_Column4_Fieldset6_nume").value.match(nume))
		document.getElementById("form_Row2_Column4_Fieldset6_nume").style.border="2px solid green";
	else document.getElementById("form_Row2_Column4_Fieldset6_nume").style.border="2px solid red";

	if (document.getElementById("form_Row2_Column4_Fieldset6_firma").value.match(data))
		document.getElementById("form_Row2_Column4_Fieldset6_firma").style.border="2px solid green";
	else document.getElementById("form_Row2_Column4_Fieldset6_firma").style.border="2px solid red";

	if (document.getElementById("form_Row2_Column4_Fieldset6_judet_localitate").value.match(oras))
		document.getElementById("form_Row2_Column4_Fieldset6_judet_localitate").style.border="2px solid green";
	else document.getElementById("form_Row2_Column4_Fieldset6_judet_localitate").style.border="2px solid red";

	if (document.getElementById("form_Row2_Column4_Fieldset6_strada").value.match(strad))
		document.getElementById("form_Row2_Column4_Fieldset6_strada").style.border="2px solid green";
	else document.getElementById("form_Row2_Column4_Fieldset6_strada").style.border="2px solid red";

	if (document.getElementById("form_Row2_Column4_Fieldset6_email").value.match(email))
		document.getElementById("form_Row2_Column4_Fieldset6_email").style.border="2px solid green";
	else document.getElementById("form_Row2_Column4_Fieldset6_email").style.border="2px solid red";

	if (document.getElementById("form_Row2_Column4_Fieldset6_telefon").value.match(telefon))
		document.getElementById("form_Row2_Column4_Fieldset6_telefon").style.border="2px solid green";
	else document.getElementById("form_Row2_Column4_Fieldset6_telefon").style.border="2px solid red";

}

function validare(){
	var prenume=new RegExp("^[a-z]+[.][a-z]+$");	
	var nume=new RegExp("^[A-Za-z0-9-_.,@#$%^&*]+[.][A-Za-z0-9-_.,@#$%^&*]+$");
		if (document.getElementById("form_Row2_Column4_Fieldset6_prenume").value.match(prenume))
		document.getElementById("form_Row2_Column4_Fieldset6_prenume").style.border="2px solid green";
	else document.getElementById("form_Row2_Column4_Fieldset6_prenume").style.border="2px solid red";

	if (document.getElementById("form_Row2_Column4_Fieldset6_firma").value.match(nume))
		document.getElementById("form_Row2_Column4_Fieldset6_firma").style.border="2px solid green";
	else document.getElementById("form_Row2_Column4_Fieldset6_firma").style.border="2px solid red";
}
timer = setInterval(next ,4000);
function meniu(){
	if (window.scrollY>165) 
	document.getElementById('meniu').setAttribute("style"," margin:0 auto;	width:960px; background:#d13f31; height:85px;	margin-top:0px; position: fixed; left:25%; z-index:4;");
else if (window.scrollY<80)  document.getElementById('meniu').removeAttribute("style");
}