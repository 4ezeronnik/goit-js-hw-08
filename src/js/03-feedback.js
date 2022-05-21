import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; 


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

    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    
    
}

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (savedMessage) {
    
        inputRef.value = savedMessage.email || "";
        textareaRef.value = savedMessage.message || "";
        
    }

}
