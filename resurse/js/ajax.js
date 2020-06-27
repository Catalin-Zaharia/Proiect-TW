window.onload=function(){
	var ajaxRequest = new XMLHttpRequest();

	var pieceTotal = document.getElementById("pieceTotal");
	pieceTotal.innerHTML="Total piese in pagina: ";
	var pieceNum=0;

	//la schimbarea starii obiectului XMLHttpRequest (la schimbarea proprietatii readyState)
	/* stari posibile:
	0 - netrimis
	1 - conexiune deschisa
	2 - s-au transmis headerele
	3 - se downleadeaza datele (datele sunt impartite in pachete si el primeste cate un astfel de pachet)
	4 - a terminat
	*/
	ajaxRequest.onreadystatechange = function() {
			//daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
			if (this.readyState == 4 && this.status == 200) {
					//in proprietatea responseText am contintul fiserului JSON
					var obJson = JSON.parse(this.responseText);
					afiseajaJsonTemplate(obJson);
			}
	};
	//deschid o conexiune cu o cerere de tip get catre server
	//json e pus in folderul static "resurse" deci calea e relativa la acel folder (fisierul e la calea absoluta /resurse/json/studenti.json)
	ajaxRequest.open("GET", "/json/legoItems.json", true);
	//trimit catre server cererea
	ajaxRequest.send();

	function afiseajaJsonTemplate(obJson) { 
			//in acets div voi afisa template-urile   
			let container=document.getElementById("gridContainer");

			//in textTemplate creez continutul (ce va deveni innerHTML-ul) divului "afisTemplate"
			let textTemplate ="";
			//parcurg vetorul de studenti din obJson
			for(let i=0;i<obJson.items.length;i++){
				//creez un template ejs (primul parametru al lui ejs.render)
				//acesta va primi ca parametru un student din vectorul de studenti din json {student: obJson.studenti[i]}
				//practic obJson.studenti[i] e redenumit ca "student" in template si putem sa ii accesam proprietatile: student.id etc
				textTemplate+=ejs.render("<div class='gridItem'>\
                <img src= '<%= item.src %>' class='respImg' >\
                <p> <%= item.nume %> </p>\
                <div class='centered'>\
                    <p> <%= item.pret %> Ron </p>\
                    <p> <%= item.piese %> Piese </p>\
                    <p> <%= item.varsta %> Ani </p>\
                </div>\
                </div>", 
				{item: obJson.items[i]});
				pieceNum+=obJson.items[i].piese;
            } 
			container.innerHTML=textTemplate;
			pieceTotal.innerHTML+=pieceNum;
	}
}