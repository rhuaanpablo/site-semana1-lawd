const resizeBox = (id, ntam) => {
    const div = document.getElementById(id);
    div.style.width = ntam + "vw";
}
const eventos = ['DOMContentLoaded', 'resize'];

eventos.forEach(e => window.addEventListener(e, () => {
    if(window.innerWidth < window.innerHeight) {
        resizeBox('vs-box',90);
    } else {
         resizeBox('vs-box',31);
    }
}))