const a = document.getElementById('i-acerca');
a.addEventListener('click', function () {
    if (!document.getElementById('acerca').classList.contains("activado")) {
        document.getElementById('acerca').classList.add('activado') ;
    }
    
    document.getElementById('contacto').classList.remove('activado');
    document.getElementById('educacion').classList.remove('activado');
    document.getElementById('trabajo').classList.remove('activado');

})

const b = document.getElementById('i-contacto');
b.addEventListener('click', function () {
    if (!document.getElementById('contacto').classList.contains("activado")) {
        document.getElementById('contacto').classList.add('activado') ;
    }
    document.getElementById('acerca').classList.remove('activado');
    document.getElementById('educacion').classList.remove('activado');
    document.getElementById('trabajo').classList.remove('activado');

})

const d = document.getElementById('i-educacion');
d.addEventListener('click', function () {
    if (!document.getElementById('educacion').classList.contains("activado")) {
        document.getElementById('educacion').classList.add('activado') ;
    }
    document.getElementById('acerca').classList.remove('activado');
    document.getElementById('contacto').classList.remove('activado');
    document.getElementById('trabajo').classList.remove('activado');

})

const e = document.getElementById('i-trabajo');
e.addEventListener('click', function () {
    if (!document.getElementById('trabajo').classList.contains("activado")) {
        document.getElementById('trabajo').classList.add('activado') ;
    }
    
    document.getElementById('acerca').classList.remove('activado');
    document.getElementById('contacto').classList.remove('activado');
    document.getElementById('educacion').classList.remove('activado');

})