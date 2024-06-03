const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
// funcion para capturar el click y cambiar el estado
toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
};