const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    message: ''
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
}

form.addEventListener('input', event =>{
    const {name,value} = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
})
form.addEventListener('submit', event =>{
    event.preventDefault();

    if (!formData.email || !formData.message){
        alert('Fill please all fields!');
returun;}
        console.log('Submitted data:', formData);

    formData = { email:'', message:''};
    localStorage.removeItem(STORAGE_KEY);
    form.reset()
    
})