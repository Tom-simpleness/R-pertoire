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