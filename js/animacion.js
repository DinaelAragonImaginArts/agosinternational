document.addEventListener('DOMContentLoaded', () => {

    const mascara4 = document.querySelector('.mascara4');
    const OurVision = document.querySelector('.OurVision');
    /*Sin relleno*/

    const weContorno = document.querySelector('.weContorno');
    const dareContorno = document.querySelector('.dareContorno');
    const lifeContorno = document.querySelector('.lifeContorno');
    const shortContorno = document.querySelector('.shortContorno');

    /*Con relleno*/
    const the = document.querySelector('.the');
    const world = document.querySelector('.world');
    const big = document.querySelector('.big');
    const life = document.querySelector('.life');
    const short = document.querySelector('.short');
    const we = document.querySelector('.we');
    const dare = document.querySelector('.dare')
    const that = document.querySelector('.that');
    const why = document.querySelector('.why');
    const palito = document.querySelector('#palito');
    const punta = document.querySelector('#punta');
    const btnScroll5 = document.querySelector('.btnScroll5');
    const dareUs = document.querySelector('.dareUs');
    const withUs = document.querySelector('.withUs');
    const us1 = document.querySelector('.us1');
    const us2 = document.querySelector('.us2');
    const withUsSinFill = document.querySelector('.withUsSinFill');
    const worlds1 = document.querySelector('.worlds1');
    const palito4 = document.querySelector('.palito4');
    const punta4 = document.querySelector('.punta4');
    const puntaSinfill4 = document.querySelector('.puntaSinfill4');
    const palitoSinfill4 = document.querySelector('.palitoSinfill4');
    const our_vision = document.querySelector('#our_vision');

    our_vision.addEventListener('mousemove', () => {
        OurVision.classList.add('flasheo');
        mascara4.classList.add('flasheo');
        the.classList.add("animacionThe");
        world.classList.add('animationWorld');
        big.classList.add('animationBig');
        life.classList.add('animationLife');
        short.classList.add('animationShort');
        that.classList.add('animationThat');
        why.classList.add('animationWhy');
        we.classList.add('animationWe');
        dare.classList.add('animationDare');
        palito.classList.add('animationFlecha');
        punta.classList.add('animationFlecha');
        weContorno.classList.add('animationRedFill');
        dareContorno.classList.add('animationRedFill');
        lifeContorno.classList.add('animationRedFill');
        shortContorno.classList.add('animationRedFill');
        palito.classList.add('animacionFade');
        punta.classList.add('animacionFade');
        if (OurVision.classList.contains('flasheo')) {
            setTimeout(() => {
                worlds1.classList.add('flasheo');
                dareUs.classList.add('animacionFade');
                withUs.classList.add('animacionFade');
                us1.classList.add('animacionFade');
                us2.classList.add('animacionFade');
                withUsSinFill.classList.add('animacionFade');
                punta4.classList.add('animationRedFill');
                palito4.classList.add('animacionFade');
                palitoSinfill4.classList.add('animacionFade');
                puntaSinfill4.classList.add('animationRedFill');

            }, 4000);
        }

    });

    btnScroll5.addEventListener('click', () => {
        the.classList.remove("animacionThe");
        world.classList.remove('animationWorld');
        big.classList.remove('animationBig');
        life.classList.remove('animationLife');
        short.classList.remove('animationShort');
        that.classList.remove('animationThat');
        why.classList.remove('animationWhy');
        we.classList.remove('animationWe');
        dare.classList.remove('animationDare');
        palito.classList.remove('animationFlecha');
        punta.classList.remove('animationFlecha');
        weContorno.classList.remove('animationRedFill');
        dareContorno.classList.remove('animationRedFill');
        lifeContorno.classList.remove('animationRedFill');
        shortContorno.classList.remove('animationRedFill');
        palito.classList.remove('animacionFade');
        punta.classList.remove('animacionFade');
        OurVision.classList.remove('flasheo');
        mascara4.classList.remove('flasheo');
        worlds1.classList.remove('flasheo');
        dareUs.classList.remove('animacionFade');
        withUs.classList.remove('animacionFade');
        us1.classList.remove('animacionFade');
        us2.classList.remove('animacionFade');
        withUsSinFill.classList.remove('animacionFade');
        palito4.classList.remove('animacionFade')
        punta4.classList.remove('animationRedFill')
        puntaSinfill4.classList.remove('animationRedFill')
        palitoSinfill4.classList.remove('animacionFade')
    });


    /*Friend create together*/
    /*OUR STORY */
    const mascara2 = document.querySelector('.mascara2');
    const OurStory = document.querySelector('.OurStory')
    const friend = document.querySelector('.friends');
    const create = document.querySelector('.create');
    const grow = document.querySelector('.grow');
    const thatFriend = document.querySelector('.thatFriends');
    const tgFriends = document.querySelector('.tgFriends');
    const tgFriends2 = document.querySelector('.tgFriends2');
    const growSinFill = document.querySelector('.growSinFill');
    const createSinFill = document.querySelector('.createSinFill');
    const puntaSinFill = document.querySelector('.flecha1');
    const palitoSinFill = document.querySelector('.flecha2');
    const btnScroll3 = document.querySelector('.btnScroll3');
    const friendsSVG = document.querySelector('.friendsSVG');
    const ten = document.querySelector('.ten');
    const Helping = document.querySelector('.Helping');
    const ourClients = document.querySelector('.ourClients');
    const potential = document.querySelector('.potential');
    const reachTheir = document.querySelector('.reachTheir');
    const tenSinFill = document.querySelector('.tenSinFill');
    const flecha4 = document.querySelector('.flecha4');
    const flecha5 = document.querySelector('.flecha5');
    const helpingSinFill = document.querySelector('.helpingSinFill');
    const potentialSinFill = document.querySelector('.potentialSinFill');
    const yearsOf = document.querySelector('.yearsOf');
    const experience = document.querySelector('.experience');
    const friendsCreateTogether = document.querySelector('#friendsCreateTogether');

    friendsCreateTogether.addEventListener('mousemove', () => {
        OurStory.classList.add('flasheo');
        mascara2.classList.add('flasheo');
        friend.classList.add('animacionHorizontal1');
        create.classList.add('animacionHorizontal2');
        grow.classList.add('animacionHorizontal3');
        thatFriend.classList.add('animacionVertical1');
        tgFriends.classList.add('animacionVertical2');
        tgFriends2.classList.add('animacionVertical3');
        growSinFill.classList.add('animacionContorno');
        createSinFill.classList.add('animacionContorno');
        puntaSinFill.classList.add('animacionFade');
        palitoSinFill.classList.add('animacionFade');
        if (OurStory.classList.contains('flasheo')) {
            setTimeout(() => {
                friendsSVG.classList.add('flasheo');
                ten.classList.add('animacionVertical2');
                experience.classList.add('animacionVertical2');
                yearsOf.classList.add('animacionHorizontal2');
                Helping.classList.add('animacionVertical2');
                ourClients.classList.add('animacionHorizontal3');
                potential.classList.add('animacionHorizontal3');
                reachTheir.classList.add('animacionVertical2');
                tenSinFill.classList.add('animacionContorno');
                flecha4.classList.add('animacionContorno');
                flecha5.classList.add('animacionContorno');
                helpingSinFill.classList.add('animacionContorno');
                potentialSinFill.classList.add('animacionContorno');

            }, 3500);
        }
    });

    btnScroll3.addEventListener('click', () => {
        friend.classList.remove('animacionHorizontal1');
        create.classList.remove('animacionHorizontal2');
        grow.classList.remove('animacionHorizontal3');
        thatFriend.classList.remove('animacionVertical1');
        tgFriends.classList.remove('animacionVertical2');
        tgFriends2.classList.remove('animacionVertical3');
        growSinFill.classList.remove('animacionContorno');
        createSinFill.classList.remove('animacionContorno');
        puntaSinFill.classList.remove('animacionFade');
        palitoSinFill.classList.remove('animacionFade');
        OurStory.classList.remove('flasheo');
        mascara2.classList.remove('flasheo');
        friendsSVG.classList.remove('flasheo');
        ten.classList.remove('animacionVertical2');
        experience.classList.remove('animacionVertical2');
        yearsOf.classList.remove('animacionHorizontal2');
        Helping.classList.remove('animacionVertical2');
        ourClients.classList.remove('animacionHorizontal3');
        potential.classList.remove('animacionHorizontal3');
        reachTheir.classList.remove('animacionVertical2');
        tenSinFill.classList.remove('animacionContorno');
        flecha4.classList.remove('animacionContorno');
        flecha5.classList.remove('animacionContorno');
        helpingSinFill.classList.remove('animacionContorno');
        potentialSinFill.classList.remove('animacionContorno');
    });
    window.addEventListener('scroll', () => {
        /*reiniciar friends con scroll*/

        friend.classList.remove('animacionHorizontal1');
        create.classList.remove('animacionHorizontal2');
        grow.classList.remove('animacionHorizontal3');
        thatFriend.classList.remove('animacionVertical1');
        tgFriends.classList.remove('animacionVertical2');
        tgFriends2.classList.remove('animacionVertical3');
        growSinFill.classList.remove('animacionContorno');
        createSinFill.classList.remove('animacionContorno');
        puntaSinFill.classList.remove('animacionFade');
        palitoSinFill.classList.remove('animacionFade');
        OurStory.classList.remove('flasheo');
        mascara2.classList.remove('flasheo');
        friendsSVG.classList.remove('flasheo');
        ten.classList.remove('animacionVertical2');
        experience.classList.remove('animacionVertical2');
        yearsOf.classList.remove('animacionHorizontal2');
        Helping.classList.remove('animacionVertical2');
        ourClients.classList.remove('animacionHorizontal3');
        potential.classList.remove('animacionHorizontal3');
        reachTheir.classList.remove('animacionVertical2');
        tenSinFill.classList.remove('animacionContorno');
        flecha4.classList.remove('animacionContorno');
        flecha5.classList.remove('animacionContorno');
        helpingSinFill.classList.remove('animacionContorno');
        potentialSinFill.classList.remove('animacionContorno');
        /*reiniciar the world is big con scroll*/
        the.classList.remove("animacionThe");
        world.classList.remove('animationWorld');
        big.classList.remove('animationBig');
        life.classList.remove('animationLife');
        short.classList.remove('animationShort');
        that.classList.remove('animationThat');
        why.classList.remove('animationWhy');
        we.classList.remove('animationWe');
        dare.classList.remove('animationDare');
        palito.classList.remove('animationFlecha');
        punta.classList.remove('animationFlecha');
        weContorno.classList.remove('animationRedFill');
        dareContorno.classList.remove('animationRedFill');
        lifeContorno.classList.remove('animationRedFill');
        shortContorno.classList.remove('animationRedFill');
        palito.classList.remove('animacionFade');
        punta.classList.remove('animacionFade');
        OurVision.classList.remove('flasheo');
        mascara4.classList.remove('flasheo');
        worlds1.classList.remove('flasheo');
        dareUs.classList.remove('animacionFade');
        withUs.classList.remove('animacionFade');
        us1.classList.remove('animacionFade');
        us2.classList.remove('animacionFade');
        withUsSinFill.classList.remove('animacionFade');
        palito4.classList.remove('animacionFade')
        punta4.classList.remove('animationRedFill')
        puntaSinfill4.classList.remove('animationRedFill')
        palitoSinfill4.classList.remove('animacionFade')
    });


});



