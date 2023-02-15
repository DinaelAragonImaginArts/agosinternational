const formulario = document.querySelector('.contenedorFormulario');
const btnRequestForm = document.querySelector('.btnRequest');
const btnDeCerrado = document.querySelector('.btnDeCerrado');

btnRequestForm.addEventListener('click', ()=>{
    formulario.style.display = "flex";
    formulario.classList.add('animacionFormulario');
    btnRequestForm.style.display = "none";
})

btnDeCerrado.addEventListener('click', ()=>{
    formulario.style.display = "none";
    btnRequestForm.style.display = "flex";
})
