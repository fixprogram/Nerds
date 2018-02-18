var link=document.querySelector(".footer-btn");
var popup=document.querySelector(".modal-win");
var close=popup.querySelector(".button-close");
var form=popup.querySelector("form");
var login=document.querySelector("[name=name]");
var password=document.querySelector("[name=email]");
var storage=localStorage.getItem("login");

link.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.add("modal-win-show");
	if(storage){
		login.value=storage;
		password.focus();
	}
});

close.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.remove("modal-win-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event){
	if(!login.value || !password.value){
		event.preventDefault();
		popup.classList.add("modal-error")
	} else {
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function(event){
	if(event.keyCode === 27){
		if(popup.classList.contains("modal-win-show")){
			popup.classList.remove("modal-win-show");
		}
	}
});