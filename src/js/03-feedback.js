import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; 


const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');
const formRef = document.querySelector('form');

populateTextarea();

formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onInput(evt) {
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    formData[evt.target.name] = evt.target.value;
 
}

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    evt.currentTarget.reset();
    
}

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (savedMessage) {

        textareaRef.value = savedMessage.message || "";
        inputRef.value = savedMessage.email || "";
    }

}
