document.addEventListener('DOMContentLoaded', function(){
    const questions = document.querySelectorAll('[data-faq-question]');

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abrefecha);
    }
})
function abrefecha(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementopai = elemento.target.parentNode;
    elementopai.classList.toggle(classe);
}