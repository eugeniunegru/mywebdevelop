   
  var f=true;
  var f1=true;
  var f2=true;
  var f3=true;
  var nri=0;
  var str1=["<h4>\"Program\" ","Abonament \"Start\"","Abonament \"Neața\"","Abonament \"Seara\"","Abonament \"Weekend\"","Abonament \"VIP\""];
  var str2=["7:00-22:00","7:00-22:00","07:00-12:00","17:00-22:00","Zile libere","07:00-22:00"];
  var str3=["08:00-21:00","08:00-21:00","08:00-12:00","17:00-21:00","08:00-22:00","08:00-21:00"];
  var timp=0;
  var timp1=0;
  var imgpos=1;
  var myVar;
  var myVar2;
  var position1;
 
  function myFunction() {
   var element = document.getElementById("programdiv"); 
   element.style.display="none";
}
function show1(){
if(f){document.getElementById("programdiv").style.display="block";f=false;}
else{ document.getElementById("programdiv").style.display="none";f=true;}
  }

  // Carousel 1
    jssor_1_slider_init = function() {

            var jssor_1_SlideoTransitions = [
              [{b:-1,d:1,o:-0.7}],
              [{b:900,d:2000,x:-379,e:{x:7}}],
              [{b:900,d:2000,x:-379,e:{x:7}}],
              [{b:-1,d:1,o:-1,sX:2,sY:2},{b:0,d:900,x:-171,y:-341,o:1,sX:-2,sY:-2,e:{x:3,y:3,sX:3,sY:3}},{b:900,d:1600,x:-283,o:-1,e:{x:16}}]
            ];

            var jssor_1_options = {
              $AutoPlay: 1,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $Align: 0,
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 3000;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };
        // Carousel 2
    jssor_2_slider_init = function() {

            var jssor_1_SlideoTransitions = [
              [{b:-1,d:1,o:-0.7}],
              [{b:900,d:2000,x:-379,e:{x:7}}],
              [{b:900,d:2000,x:-379,e:{x:7}}],
              [{b:-1,d:1,o:-1,sX:2,sY:2},{b:0,d:900,x:-171,y:-341,o:1,sX:-2,sY:-2,e:{x:3,y:3,sX:3,sY:3}},{b:900,d:1600,x:-283,o:-1,e:{x:16}}]
            ];

            var jssor_1_options = {
              $AutoPlay: 1,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $Align: 0,
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_2", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 3000;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };
         // Carousel 3
    jssor_3_slider_init = function() {

            var jssor_1_SlideoTransitions = [
              [{b:-1,d:1,o:-0.7}],
              [{b:900,d:2000,x:-379,e:{x:7}}],
              [{b:900,d:2000,x:-379,e:{x:7}}],
              [{b:-1,d:1,o:-1,sX:2,sY:2},{b:0,d:900,x:-171,y:-341,o:1,sX:-2,sY:-2,e:{x:3,y:3,sX:3,sY:3}},{b:900,d:1600,x:-283,o:-1,e:{x:16}}]
            ];

            var jssor_1_options = {
              $AutoPlay: 1,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $Align: 0,
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_3", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 3000;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };
         // Carousel 4
    jssor_4_slider_init = function() {

            var jssor_1_SlideoTransitions = [
              [{b:-1,d:1,o:-0.7}],
              [{b:900,d:2000,x:-379,e:{x:7}}],
              [{b:900,d:2000,x:-379,e:{x:7}}],
              [{b:-1,d:1,o:-1,sX:2,sY:2},{b:0,d:900,x:-171,y:-341,o:1,sX:-2,sY:-2,e:{x:3,y:3,sX:3,sY:3}},{b:900,d:1600,x:-283,o:-1,e:{x:16}}]
            ];

            var jssor_1_options = {
              $AutoPlay: 1,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $Align: 0,
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_4", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 3000;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };
         // Carousel 5
    jssor_5_slider_init = function() {

            var jssor_1_SlideoTransitions = [
              [{b:-1,d:1,o:-0.7}],
              [{b:900,d:2000,x:-379,e:{x:7}}],
              [{b:900,d:2000,x:-379,e:{x:7}}],
              [{b:-1,d:1,o:-1,sX:2,sY:2},{b:0,d:900,x:-171,y:-341,o:1,sX:-2,sY:-2,e:{x:3,y:3,sX:3,sY:3}},{b:900,d:1600,x:-283,o:-1,e:{x:16}}]
            ];

            var jssor_1_options = {
              $AutoPlay: 1,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $Align: 0,
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_5", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 3000;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };
// Price List
function table1(){
  var d = document.getElementById("tableunu");
  if(f1){
    d.style.display="block";
d.className += " animtable";
f1=false;
}else{d.style.display="none";f1=true;} 
  
}
function table2(){
  var d = document.getElementById("tabledoi");
  if(f2){
    d.style.display="block";
d.className += " animtable";
f2=false;
}else{d.style.display="none";f2=true;} 
  
}
function table3(){
  var d = document.getElementById("tabletrei");
  if(f3){
    d.style.display="block";
d.className += " animtable";
f3=false;
}else{d.style.display="none";f3=true;} 
  
}
// $("hover").mouseleave(
//   function() {
//     $(this).removeClass("hover");
//   }
// );
function next(){
  nri++;
  if(nri<6){document.getElementById("head").innerHTML=str1[nri];document.getElementById("primul").innerHTML=str2[nri];document.getElementById("doilea").innerHTML=str3[nri];}
     else{document.getElementById("head").innerHTML=str1[0];document.getElementById("primul").innerHTML=str2[0];document.getElementById("doilea").innerHTML=str3[0];
     nri=0;
}
}
function prev(){
  nri--;
  if(nri>=0){document.getElementById("head").innerHTML=str1[nri];document.getElementById("primul").innerHTML=str2[nri];document.getElementById("doilea").innerHTML=str3[nri];}
     else{document.getElementById("head").innerHTML=str1[5];document.getElementById("primul").innerHTML=str2[5];document.getElementById("doilea").innerHTML=str3[5];
     nri=5;
   }
}

function myTimer() {
  timp++;
  if (timp==2) {clearInterval(myVar);document.getElementById('preloader').style.display="none";
} 
}
function myFunctionshow(){

  myVar = setInterval(myTimer ,1000);
  document.getElementById('preloader').style.opacity="0"; 
  position1=document.getElementsByClassName('content')[0].style.top; 
}

function stand(){
  var marg=document.getElementById('nav').style.height;
 document.getElementById('personal').style.marginTop=marg+"px";
// document.getElementsByClassName('content')[0].style.top=(marg+30)+"px";
 //alert(marg);
}

  function imaginistand(){
  var maxim=document.getElementsByTagName('img')[1].clientHeight;
   var top;
  for(var i=2; i<16;i++) {
    //alert(document.getElementsByTagName('img')[i].src);
    if(maxim<(document.getElementsByTagName('img')[i].clientHeight))maxim=document.getElementsByTagName('img')[i].clientHeight;
     }
  document.getElementsByClassName('alb')[0].style.height=maxim+"px";
   for(var i=1; i<15;i++){
    document.getElementsByClassName('alb')[i].style.height=maxim.toString()+"px";
    top=(maxim-document.getElementsByTagName('img')[i].clientHeight)/2;
    document.getElementsByTagName('img')[i].style.paddingTop=top+"px";
    document.getElementsByTagName('img')[i].style.paddingBottom=top+"px";
  }
  top=(maxim-document.getElementById('ultima').clientHeight)/2;
    document.getElementById('ultima').style.paddingTop=top+"px";
    document.getElementById('ultima').style.paddingBottom=top+"px";
      //alert(maxim);  
}

 function opengl(source,index){ 
   source = source.replace("file:///",'');
   //alert(source);
   imgpos=parseInt(index);
document.getElementsByClassName('content')[0].style.backgroundImage="url("+source+")";
document.getElementsByClassName('content')[0].style.opacity="1";
document.getElementsByClassName('content')[0].style.display="block";
 //window.onscroll = function () { window.scrollTo(0, 0); };
// document.getElementsByClassName('description')[imgpos].h2.innerHTML=text;
document.getElementById('nav').style.zIndex="-1";
}

function posit(){
  var meniu=document.getElementById('nav');
if((meniu.style.width+document.getElementById('Band').style.width)<window.pageYOffset){
// meniu.style.position="fixed";
// meniu.style.top="0px";
// meniu.style.left="0px";
// meniu.style.height="55px";
// meniu.style.overflow="hidden";
// document.getElementById('logo').style.width="55px";
// document.getElementById('logo').style.height="55px";
// document.getElementsByTagName('a')[1].style.padding="18px 20px";
// document.getElementsByTagName('a')[2].style.padding="18px 20px";
// document.getElementsByTagName('a')[8].style.padding="18px 20px";
// document.getElementsByTagName('a')[9].style.padding="18px 20px";
// document.getElementsByTagName('a')[10].style.padding="18px 20px";
// document.getElementsByTagName('a')[11].style.padding="18px 20px";
// document.getElementsByTagName('a')[12].style.padding="18px 20px";
meniu.setAttribute("class","nav");
}
else if(55>window.pageYOffset){
  meniu.removeAttribute("class");
}
}
function closegl(){
  myVar2 = setInterval(myTimer1 ,800);
  document.getElementsByClassName('content')[0].style.opacity="0";
  timp1=0;
  imgpos=1;
  document.getElementById('nav').style.zIndex="1";
  document.getElementById('nav').style.transition=" z-index 1.5s";
}

function myTimer1() {
  timp1++;//alert(timp1);
  if (timp1==2) {clearInterval(myVar2);
    document.getElementsByClassName('content')[0].style.display="none";
} 
}
function next(){
if (imgpos==15) {imgpos=1;}
else imgpos++;
  document.getElementsByClassName('content')[0].style.backgroundImage="url("+document.getElementsByTagName('img')[imgpos].src+")";
 
}
function prev(){
if (imgpos==1) {imgpos=15;}
else imgpos--;
  document.getElementsByClassName('content')[0].style.backgroundImage="url("+document.getElementsByTagName('img')[imgpos].src+")";
 
}
function verifica(){
  var nume=document.getElementById('name');
  var reg1 = new RegExp("^[A-Z]{1}[a-z]+[ ][A-Z]{1}[a-z]+$");

 var email=document.getElementById('email');
  var reg2 = new RegExp("^([A-Za-z0-9.,_-]+)[@]([A-Za-z0-9]{1,10})[.]([A-Za-z0-9]{1,10})$");

   var message=document.getElementById('message');
  var reg3 = new RegExp("^[0-9A-Za-z.!?-]+$");

  if (nume.value.match(reg1)) {
    nume.style.borderColor="#00ff00";
  }
  else
   nume.style.borderColor="#ff0000";

  if (email.value.match(reg2)) {
    email.style.borderColor="#00ff00";
  }
  else
   email.style.borderColor="#ff0000";

   if (message.value.match(reg3)) {
    message.style.borderColor="#00ff00";
  }
  else
   message.style.borderColor="#ff0000";
}
function heigthcontent(){
   document.getElementsByClassName('content')[0].style.height=document.body.clientHeight;
}
function schimb(className){
  var path=document.getElementsByClassName("ch-img-1")[0],
   style1 = path.currentStyle || window.getComputedStyle(path, false),
bi1 = style1.backgroundImage.slice(13, -1);
   var img = document.getElementsByClassName(className)[0],
style = img.currentStyle || window.getComputedStyle(img, false),
bi = style.backgroundImage.slice(13, -1);
bi=bi.replace('\"','');
bi1=bi1.replace('\"','');
var text1=document.getElementById("ch-img-1").innerHTML;
var text2=document.getElementById(className.slice(9)).innerHTML;
//alert(text2);
 document.getElementsByClassName("ch-img-1")[0].style.backgroundImage="url("+bi+")";
  document.getElementsByClassName(className.slice(9))[0].style.backgroundImage="url("+bi1+")";
  document.getElementById("ch-img-1").innerHTML=text2;
  document.getElementById(className.slice(9)).innerHTML=text1;
}
function maresc(){
 var plan=document.getElementById('plan2');
 var index=0;
 //alert(window.innerHeight);
 //while((+)<=)
 {
  index=window.innerHeight-(document.getElementById('Band').clientHeight+document.getElementById('nav').clientHeight+document.getElementById('plan2').clientHeight);
  // alert(document.getElementById('plan2').clientHeight);
  plan.style.paddingBottom=index+"px";
 }
}