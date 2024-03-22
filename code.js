document.addEventListener("DOMContentLoaded", () => {
    const listaNomes = document.body.querySelector('#listaNomes');
    const inputNome = document.body.querySelector('#inputNome'); 
    const buttonAdicionar = document.body.querySelector('#buttonAdicionar');
    buttonAdicionar.addEventListener('click', () => {
        const div = document.createElement('div');
        div.innerHTML = '<li>'+inputNome.value+'</li>';
        listaNomes.appendChild(div.firstElementChild);



    })


       
});
