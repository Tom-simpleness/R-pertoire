//====================================Liste déroulante===========================================================================

document.getElementById('Bmenu').addEventListener("click", function1);
function function1() {
    document.getElementById('liste').style.display = 'none';
    document.getElementById('ajout').style.display = 'none';
    document.getElementById('total').style.display = 'none';
}

document.getElementById('Bliste').addEventListener("click", function2);

function function2() {
    document.getElementById('liste').style.display = 'block';
    document.getElementById('ajout').style.display = 'none';
    document.getElementById('total').style.display = 'none';
}

document.getElementById('Bajout').addEventListener("click", function3);
function function3() {
    document.getElementById('liste').style.display = 'none';
    document.getElementById('ajout').style.display = 'block';
    document.getElementById('total').style.display = 'none';
}

document.getElementById('Btotal').addEventListener("click", function4);
function function4() {
    document.getElementById('liste').style.display = 'none';
    document.getElementById('ajout').style.display = 'none';
    document.getElementById('total').style.display = 'block';
}


//========================================Script Formulaire-Contact======================================================

var number = [];

var clicks=0;

document.getElementById("bFormulaire").addEventListener("click",myFunction)

function myFunction()
{

    var x = document.getElementById("box");
    number.push(document.getElementById("input1").value);
    number.push(document.getElementById("input2").value);
    number.push(document.getElementById("input3").value);

    x.innerHTML = number.join('<br/>');

    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    document.getElementById("input3").value="";

    number.push(document.getElementById("input1").value);

    clicks+=1;
    document.getElementById("clicks").innerHTML=clicks;

}