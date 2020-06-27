
var priceMin, priceMax, age, pieceMin, pieceMax, themes;

function applyFilters(){
    priceMin = document.getElementById("priceMin").value;
    priceMax = document.getElementById("priceMax").value;
    age = document.getElementById("age").value;
    pieceMin = document.getElementById("pieceMin").value;
    pieceMax = document.getElementById("pieceMax").value;
    if (priceMin == '') priceMin=0;
    if (priceMax == '') priceMax=99999;
    if (age == '') age=0;
    if (pieceMin == '') pieceMin=0;
    if (pieceMax == '') pieceMax=99999;
    getThemes();
}

function getThemes(){
    themes="";
    if (document.getElementById("starwars").checked == true) themes+="starwars";
    if (document.getElementById("technic").checked == true) themes+="technic";
    if (document.getElementById("city").checked == true) themes+="city";
    if (document.getElementById("frozen").checked == true) themes+="frozen";
    if (document.getElementById("batman").checked == true) themes+="batman";
    console.log(themes);
}

function nofilter(){
    document.getElementById("priceMin").value="";
    document.getElementById("priceMax").value="";
    document.getElementById("age").value="";
    document.getElementById("pieceMin").value="";
    document.getElementById("pieceMax").value="";
    document.getElementById("starwars").checked = true;
    document.getElementById("technic").checked = true;
    document.getElementById("batman").checked = true;
    document.getElementById("frozen").checked = true;
    document.getElementById("city").checked = true;
    repop();
}

function conditions(item){
    return (item.pret >= priceMin && item.pret <= priceMax && 
            item.varsta >= age &&
            item.piese >= pieceMin && item.piese <= pieceMax &&
            themes.includes(item.tema))
}

function repop(){
        var ajaxRequest = new XMLHttpRequest();
    
        var pieceTotal = document.getElementById("pieceTotal");
        pieceTotal.innerHTML="Total piese in pagina: ";
        var pieceNum=0;

        ajaxRequest.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                        var obJson = JSON.parse(this.responseText);
                        afiseajaJsonTemplate(obJson);
                }
        };
        ajaxRequest.open("GET", "/json/legoItems.json", true);

        ajaxRequest.send();
    
        function afiseajaJsonTemplate(obJson) { 
                let container=document.getElementById("gridContainer");

                applyFilters();
                container.innerHTML="";
                let textTemplate ="";
                for(let i=0;i<obJson.items.length;i++){
                    if (conditions(obJson.items[i])){
                        textTemplate+=ejs.render("<div class='gridItem'>\
                        <img src= '<%= item.src %>' class='respImg' >\
                        <p> <%= item.nume %> </p>\
                        <div class='centered'>\
                            <p class='price'> <%= item.pret %> Ron </p>\
                            <p class='piece'> <%= item.piese %> Piese </p>\
                            <p class='age'> <%= item.varsta %> Ani </p>\
                        </div>\
                        </div>", 
                        {item: obJson.items[i]});
                        pieceNum+=obJson.items[i].piese;
                    }
                } 
                container.innerHTML=textTemplate;
                pieceTotal.innerHTML+=pieceNum;
        }
}
var sortedUp=localStorage.getItem("sortedWay");
function sortPrice(){
    let container=document.getElementById("gridContainer");
    var items = container.children;
    var itemArray = Array.prototype.slice.call(items);
    function sortUp(a, b){
        return a.children[2].children[0].innerHTML.split(' ')[1] - 
        b.children[2].children[0].innerHTML.split(' ')[1]
    }
    function sortDown(a, b){
        return b.children[2].children[0].innerHTML.split(' ')[1] - 
        a.children[2].children[0].innerHTML.split(' ')[1]
    }
    if (!sortedUp){
        itemArray.sort(sortUp);
        sortedUp=true;
        localStorage.setItem("sortedWay", sortedUp);
    }
    else{
        itemArray.sort(sortDown);
        sortedUp=false;
        localStorage.setItem("sortedWay", sortedUp);
    }
    
    for(let item of itemArray){
        container.appendChild(item);
    }
}