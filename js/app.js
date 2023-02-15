document.addEventListener('DOMContentLoaded', () => {
    carga();

const mascara = document.querySelector('.mascara');
const btnScroll8 = document.querySelector('.btnScroll8');

btnScroll8.addEventListener('click', ()=>{
    textoShowCase.classList.add('animacionVideoEntrada');
    mascara.classList.add('animacionVideoEntrada');
})



/*logo go to home*/
const enlaces = document.querySelector('#inicio');
enlaces.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

/*diccionario*/

const what_is_agos  = document.querySelector('#what_is_agos');
const flash = document.querySelector('.definition');
const flasheo = document.querySelector('.mascara');
const btnScroll2  = document.querySelector('.btnScroll2');

what_is_agos.addEventListener('mouseenter', () => {
    flasheo.classList.add('flasheo');
    flash.classList.add('flasheo');
    if(flash.classList.contains('visible')){
        setTimeout(() => {
            palabra("AGOS /a-go•s/ v. and n.•V. to do, to act, to make; to move or drive; to lead and guide; to aim and achieve • n. a group with a deeper vision; people who belive that ideas make the world; a team ready to create bigger, bolder and better projects because it's possible.");    
            flash.classList.remove('visible');
        }, 1000);
    }
});


const palabra = srt => {
    let palabra = srt.split('');
    let i = 0;
    const efecto = document.querySelector("#efecto");
    //function temporizador
    let maquina = setInterval(function () {
        if (palabra[i] === '  ') {
            efecto.innerHTML += palabra[i];
            efecto.innerHTML += palabra(i + 1);
            i += 2;
        }
        else {
            efecto.innerHTML += palabra[i];
            i++;
        }
        if (i === palabra.length) {
            clearInterval(maquina);
        }
    }, 45);
    
    btnScroll2.addEventListener('click', ()=>{
        const efecto = document.querySelector('#efecto');
        efecto.textContent = "";
        flash.style.display = "flex";
        flasheo.classList.remove('flasheo');
        flash.classList.remove('flasheo');
    });
}

const mascaraVideo = document.querySelector('.mascaraVideo');
const showcaseVideo = document.querySelector('#showcaseVideo');

mascaraVideo.addEventListener('mouseenter', ()=>{
    mascaraVideo.classList.add('flasheo');
    showcaseVideo.removeAttribute('muted');
    showcaseVideo.setAttribute('controls', '');
    setTimeout(() => {
        mascaraVideo.remove();    
    }, 2000);
}); 



btnScroll8.addEventListener('click', ()=>{
    mascaraVideo.classList.remove('flasheo');
    showcaseVideo.setAttribute('muted', '');
});
});




let lottie = document.getElementById('lottie');
const carga = () => {
    setTimeout(() => {
        lottie.remove();
    }, 3000)
}
