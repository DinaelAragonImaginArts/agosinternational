const weAnalize = document.querySelector('.weAnalize');
const weCreate = document.querySelector('.weCreate');
const weDeliver = document.querySelector('.weDeliver');
/*texto*/
const analizeContent = document.querySelector('.contenidoAnalize');
const createContent = document.querySelector('.contenidoCreate');
const deliverContent = document.querySelector('.contenidoDeliver');

function create() {
    analizeContent.classList.add('animacion-salida');
    deliverContent.classList.add('animacion-salida');
    analizeContent.classList.remove('animacion-entrada');
    deliverContent.classList.remove('animacion-entrada');

    createContent.classList.add('animacion-entrada');
    createContent.classList.remove('animacion-salida');

    /*Color Texto*/
    weAnalize.classList.remove('colorActive');
    weDeliver.classList.remove('colorActive');
    weCreate.classList.add('colorActive');
}
function deliver() {
    analizeContent.classList.add('animacion-salida');
    analizeContent.classList.remove('animacion-entrada');
    createContent.classList.remove('animacion-entrada');
    createContent.classList.add('animacion-salida');
    deliverContent.classList.remove('animacion-salida');
    deliverContent.classList.add('animacion-entrada');
    weCreate.classList.remove('colorActive');
    weAnalize.classList.remove('colorActive');
    weDeliver.classList.add('colorActive');
}
function analize() {
    deliverContent.classList.add('animacion-salida');
    deliverContent.classList.remove('animacion-entrada');
    createContent.classList.add('animacion-salida');
    createContent.classList.remove('animacion-entrada');

    analizeContent.classList.add('animacion-entrada');
    analizeContent.classList.remove('animacion-salida');

    /*colores texto*/ 
    weAnalize.classList.add('colorActive');
    weDeliver.classList.remove('colorActive');
    weCreate.classList.remove('colorActive');
}

    weAnalize.addEventListener('click', () => {
        clearInterval(analizeS);
        clearInterval(createS);
        clearInterval(deliverS);
        analize();
    });
    weCreate.addEventListener('click', () => {
        clearInterval(analizeS);
        clearInterval(createS);
        clearInterval(deliverS);
        create();
        
    });
    weDeliver.addEventListener('click', () => {
        clearInterval(analizeS);
        clearInterval(createS);
        clearInterval(deliverS);
        deliver();
    });

    var inicio = 0;
    var fin = 5000;
    const createS = setInterval(() => {
       create(); 
    }, fin);

    const deliverS = setInterval(() => {
        deliver(); 
     }, fin * 2);

     const analizeS = setInterval(() => {
        analize()
    }, fin * 3);
