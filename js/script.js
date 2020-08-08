
function hoverbtn(){
var btn=document.getElementById("hedbtn");
btn.style.backgroundColor=" #00bc2fc4";
}

function mousout(){
    var btn=document.getElementById("hedbtn");
    btn.style.backgroundColor="#00BC8A";
    }

 function show_elem(){
     var elem =document.getElementById("elem");
     elem.style.display="block";
     var btn2=document.getElementById("btn2");
     btn2.innerHTML="Hide";
 }
 function hide_elem(){
    var elem =document.getElementById("elem");
    elem.style.display="none";
    var btn2=document.getElementById("btn2");
    btn2.innerHTML="loren More";
}



