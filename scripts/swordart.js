const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const closeBtn = document.querySelector('.close-icon');
const loginPopUp = document.querySelector('.btnLogin-popup');


registerLink.addEventListener('click',()=>{
  wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
  wrapper.classList.remove('active');
});


loginPopUp.addEventListener('click',()=>{
  wrapper.classList.add('active-popup');
});

closeBtn.addEventListener('click', ()=>{
  wrapper.classList.remove('active-popup');
})