function animateBg(){
    var body = document.body;
    body.style.backgroundImage= "url('https://www.modernlola.com/images/products/290.jpg')";
    body.style.backgroundRepeat= "no-repeat";
    body.style.backgroundPosition= "0% 85%";
    body.style.backgroundSize= " 20vw 20vw"
    var num= parseInt(body.style.backgroundPositionX[0]+body.style.backgroundPositionX[1]);
    var coef=0.5;
    var id = setInterval(() => {
        if (num==100) coef=-0.5;
        if (num==0) coef=0.5;
        num+=coef;
        body.style.backgroundPositionX = num+"%";
    }, 10);
}

function updateColor(){
    var option= new Option().style;
    option.color= document.getElementById("bgColor").value;
    document.body.style.backgroundColor = option.color;
    if (document.body.style.backgroundColor == ""){
    alert("nu e o culoare valida");
    }
    //console.log(document.body.style.backgroundColor);
}

function resetColor(){
    document.getElementById("bgColor").value="white";
    updateColor();
}
