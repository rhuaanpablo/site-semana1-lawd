const resizeBox = (id, ntam) => {
    const div = document.getElementById(id);
    div.style.width = ntam;
}
const eventos = ['DOMContentLoaded', 'resize'];
const resizeFont = (id, ntam) => {
    const div = document.getElementById(id);
    div.style.fontSize = ntam;
}
eventos.forEach(e => window.addEventListener(e, () => {
    if(window.innerWidth < window.innerHeight) {
        resizeBox('vs-box','90vw');
        resizeFont('vs-text','6vw');
        resizeFont('vs-text-inner','8vw');
        resizeFont('text-liberta','4vw');
        resizeFont('text-brasil','8vw');
        resizeFont('text-liberta1','4vw');
        resizeFont('text-brasil1','7.5vw');
        resizeFont("mid-text1",'8vw');
        resizeFont("mid-text2",'3vw');
        resizeBox("big-box","90vw");
        resizeBox("npage-button","70vw");
        resizeFont("bfont",'7vw');
    } else {
         resizeBox('vs-box','31vw');
         resizeFont('vs-text','2vw');
         resizeFont('vs-text-inner','2vw');
         resizeFont('text-liberta','15px');
         resizeFont('text-brasil','3vw');
         resizeFont('text-liberta1','15px');
         resizeFont('text-brasil1','2vw');
         resizeFont("mid-text1",'5vw');
        resizeFont("mid-text2",'1vw');
        resizeBox("big-box","40%");
        resizeBox("npage-button","40%");
        resizeFont("bfont",'1vw');
    }
}))