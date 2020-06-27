function animateTitle(){
    var title = document.getElementsByTagName("title")[0];
    var original = title.innerText;
    var counter=0;
    title.innerText=".";
    var id = setInterval(() => {
        if (original.length/2-counter<2){
            if (original.length%2!=0){
                setTimeout(() => {
                    title.innerText=original;
                }, 1000)
            }
            clearInterval(id);
        }
        var aux='';
        for (var i=0; i<=counter; i++){
            aux+=original[i];
        }
        for (var i=original.length-1-counter; i<original.length; i++){
            aux+=original[i];
        }
        title.innerText=aux;
        counter+=1;
    },1000);
}


function animateText(){
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var original1 = text1.innerHTML.split(/\s+/);
    var counter1=0;
    var original2 = text2.innerHTML.split(/\s+/);
    var counter2=0;
    text1.innerHTML="";
    text2.innerHTML=""
    var interval1 = setInterval(() => {
        text1.innerHTML+=original1[counter1]+' ';
        counter1+=1;
        if (counter1==original1.length){
            clearInterval(interval1);
        }
    }, 333);
    var interval2 = setInterval(() => {
        text2.innerHTML+=original2[counter2]+' ';
        counter2+=1;
        if (counter2==original2.length){
            clearInterval(interval2);
        }
    }, 333);
}

function namePrompt(){
    var title = document.getElementsByTagName("title")[0];
    original = title.innerText;
    var name = prompt ("Cum va numiti?");
    if (name!= ''){
        title.innerHTML=name;
        setTimeout(() => {
            title.innerHTML=original;
        }, 2000);
    }
}

animateTitle();

animateText();