function CloseBtn(){
    var contentAtual = document.getElementsByClassName("contentWrapper");
    contentAtual[0].style.display = "none";
    contentAtual[1].style.display = "none";
    contentAtual[2].style.display = "none";
    contentAtual[3].style.display = "none";
}

function show1(){
    var contentAtual = document.getElementsByClassName("contentWrapper");
    contentAtual[0].style.display = "flex";
}
function show2(){
    var contentAtual = document.getElementsByClassName("contentWrapper");
    contentAtual[1].style.display = "flex";
}
function show3(){
    var contentAtual = document.getElementsByClassName("contentWrapper");
    contentAtual[2].style.display = "flex";
}
function show4(){
    var contentAtual = document.getElementsByClassName("contentWrapper");
    contentAtual[3].style.display = "flex";
}