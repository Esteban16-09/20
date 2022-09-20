const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Se que hoy 20 de septiembre tendrás un examen y estoy 100% seguro que saldrá de maravilla te conozco y se que lo vas a hacer bien eres alguien que se esfuerza y da todo de si, y se que prefieres una flor amarilla real, pero te entrego esta imagen con una flor amarilla de mi juego favorito, me gustaría darte un ramo completo con flores amarillas pero ya llegara ese día, pero no me olvidare de tus flores amarillas, yo no se lo que tenga que pasar mañana o mas tarde pero créeme que si tengo que cruzar el fin del mundo para conseguirte una flor amarilla, si es para ti créeme que lo hare.')
    alert('Eres la persona que me hace muy feliz')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})