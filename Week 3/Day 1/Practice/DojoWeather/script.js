function alertOnclick(){
    alert("Loading Weather Report")
}

var cookieDiv = document.querySelector("#cookie");

function accept() {
    cookieDiv.remove();
}

var weatherSelection = document.querySelector(".select-main").value;
function convert(element){
    if(element.value == "C"){
        document.querySelector(".para1").innerHTML = "24*"
        document.querySelector(".para2").innerHTML = "18*"
        document.querySelector(".para3").innerHTML = "27*"
        document.querySelector(".para4").innerHTML = "19*"
        document.querySelector(".para5").innerHTML = "21*"
        document.querySelector(".para6").innerHTML = "16*"
        document.querySelector(".para7").innerHTML = "26*"
        document.querySelector(".para8").innerHTML = "21*"
    }
    else if(element.value == "F"){
        document.querySelector(".para1").innerHTML = "75*"
        document.querySelector(".para2").innerHTML = "65*"
        document.querySelector(".para3").innerHTML = "80*"
        document.querySelector(".para4").innerHTML = "66*"
        document.querySelector(".para5").innerHTML = "69*"
        document.querySelector(".para6").innerHTML = "61*"
        document.querySelector(".para7").innerHTML = "78*"
        document.querySelector(".para8").innerHTML = "60*"
    }
}