const btn = document.querySelector ('[data-form-btn]');

const createTask = (evento) => {
    evento.preventDefault();
    const input = documet.querySelector('[data-form-inpu]');
    console.log(input.value);
};

console.log(btn);

btn.addEventListener ("click", createTask);
//Lintener

