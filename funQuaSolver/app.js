let a = document.getElementById("a").value;
let b = document.getElementById("b").value;
let c = document.getElementById("c").value;
let delta = (b*b) - (4*a*c);
let x2 = (-b - Math.sqrt(delta)) / (2*a);

function limpar(){
    document.getElementById("x1").innerHTML = "";
    document.getElementById("x2").innerHTML = "";
    document.getElementById("a").value = '';
    document.getElementById("b").value = '';
    document.getElementById("c").value = '';

}

function bhaskara(){

    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let delta = (b*b) - (4*a*c);
    let x1 = (-b + Math.sqrt(delta)) / (2*a);
    let x2 = (-b - Math.sqrt(delta)) / (2*a);

    document.getElementById("x1").innerHTML = 'x1= ' + x1;
    document.getElementById("x2").innerHTML = 'x2= ' + x2;



   



}