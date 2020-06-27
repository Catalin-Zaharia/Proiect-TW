function wordCount(){
    var container = document.getElementById("wordP");
    var elems = document.body.children, words="";
    for (let i=0; i<elems.length; i+=1){
        words+= elems[i].innerText+" ";
    }
    var count= words.split(/[\s+/-]+/).length;
    container.innerHTML="Numar Cuvinte: "+count;
}
wordCount();

var fontSize;
var initialFontSize;
function updateFont(){
    var options= document.getElementsByClassName('fontOption');
    for (let i=0; i<3;i+=1){
        if(options[i].selected == true){
            localStorage.setItem("fontSizeLocal", options[i].value);
        }
    }
    changeFont();
}

function resetFont(){
    localStorage.setItem("fontSizeLocal", '1vw');
    changeFont();
}

function changeFont(){
    fontSize= localStorage.getItem("fontSizeLocal");
    if (fontSize!=null){
        var arr =  document.getElementsByTagName('p');
        for (var i=0; i<arr.length;i++){
            arr[i].style.fontSize=fontSize;             
        }
    }
}
changeFont();

var imgToggled=true;
function imgToggle(){
    var button = document.getElementById("imgToggle");
    if (imgToggled){
        var images = document.getElementsByTagName("img");
        for (var i= 0; i<images.length; i+=1){
            images[i].style.display="none";
        }
        button.innerHTML="Afiseaza Imagini";
        imgToggled=false;
    }
    else{
        var images = document.getElementsByTagName("img");
        for (var i= 0; i<images.length; i+=1){
            images[i].style.display="";
        }
        button.innerHTML="Ascunde Imagini";
        imgToggled=true;
    }
}
