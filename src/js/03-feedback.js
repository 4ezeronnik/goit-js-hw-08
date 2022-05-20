// const inputRef = document.querySelector('input');
// const textareaRef = document.querySelector('textarea');
const formRef = document.querySelector('form');


formRef.addEventListener('input', onInput);

function onInput(evt) {
    const message = evt.target.value;
    localStorage.setItem('feedback-form-state', message);
    console.log(message);
}

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
}