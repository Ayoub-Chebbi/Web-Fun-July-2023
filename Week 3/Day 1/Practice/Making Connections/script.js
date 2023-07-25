console.log("page loaded...");

var userCard = document.querySelector("#remove-card");

function changeonlick(){
    userCard.remove();
}

var userName = document.querySelector("#name");

function changeName(){
    userName.innerHTML = "Ayoub Chebbi";
}