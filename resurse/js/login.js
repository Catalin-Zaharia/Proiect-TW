//
//========== LOGIN INFO STYLING ==========
//

var loginUser = document.getElementById("loginUser");
var loginPass = document.getElementById("loginPass");

var defaultUserFromJS = true;
function changeUser(){
	if (loginUser.value ==""){
		loginUser.value = "Username";
		loginUser.style.opacity= "0.5";
		defaultUserFromJS= true;
	}
	else{
		defaultUserFromJS= false;
	}
}
function focusUser(){
	if (loginUser.value == "Username" && defaultUserFromJS){
		loginUser.value ="";
		loginUser.style.opacity="1";
	}
	if (loginUser.value != "Username"){
		loginUser.style.opacity="1";
	}
}
function blurUser(){
	if (loginUser.value == ""){
		loginUser.value = "Username";
		loginUser.style.opacity= "0.5";
	}
}

var defaultPassFromJS = true;
function changePass(){
	if (loginPass.value ==""){
		loginPass.type= "text";
		loginPass.value = "Parola";
		loginPass.style.opacity= "0.5";
		defaultPassFromJS= true;
	}
	else{
		defaultPassFromJS= false;
	}
}
function focusPass(){
	if (loginPass.value == "Parola" && defaultPassFromJS){
		loginPass.type= "password";
		loginPass.value ="";
		loginPass.style.opacity="1";
	}
}
function blurPass(){
	if (loginPass.value == ""){
		loginPass.type= "text";
		loginPass.value = "Parola";
		loginPass.style.opacity= "0.5";
	}
}
setInterval(() => {
	loginUser.value="";
	loginPass.value="";
	blurUser();
	blurPass();
}, 60000);
//
//
//