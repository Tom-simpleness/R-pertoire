//====================================Liste déroulante===========================================================================

document.getElementById('menu').style.display='block';

document.getElementById('Bmenu').addEventListener("click", function1);
function function1() {
    document.getElementById('menu').style.display ='block';
    document.getElementById('liste').style.display = 'none';
    document.getElementById('ajout').style.display = 'none';
    document.getElementById('total').style.display = 'none';
}

document.getElementById('Bliste').addEventListener("click", function2);

function function2() {
    document.getElementById('menu').style.display ='none';
    document.getElementById('liste').style.display = 'block';
    document.getElementById('ajout').style.display = 'none';
    document.getElementById('total').style.display = 'none';
}

document.getElementById('Bajout').addEventListener("click", function3);
function function3() {
    document.getElementById('menu').style.display ='none';
    document.getElementById('liste').style.display = 'none';
    document.getElementById('ajout').style.display = 'block';
    document.getElementById('total').style.display = 'none';
}

document.getElementById('Btotal').addEventListener("click", function4);
function function4() {
    document.getElementById('menu').style.display ='none';
    document.getElementById('liste').style.display = 'none';
    document.getElementById('ajout').style.display = 'none';
    document.getElementById('total').style.display = 'block';
}


//========================================Script Formulaire-Contact======================================================

var contact = [];

var compteur=0;

document.getElementById("bFormulaire").addEventListener("click",myFunction)

function myFunction() {

    var x = document.getElementById("box");
    contact.push(document.getElementById("input1").value);
    contact.push(document.getElementById("input2").value);
    contact.push(document.getElementById("input3").value);

    x.innerHTML = contact.join('<br/>');

    document.getElementById("input1").value="<hr/>";
    document.getElementById("input2").value="";
    document.getElementById("input3").value="";

    contact.push(document.getElementById("input2").value);
    contact.push(document.getElementById("input1").value);

    document.getElementById("input1").value="";

    compteur+=1;
    document.getElementById("compteur").innerHTML=compteur;
}



