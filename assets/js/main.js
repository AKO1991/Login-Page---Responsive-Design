/*-- Show/Hide Login --*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')

signUp.addEventListener('click', ()=>{
    //Remove class first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    //Add class
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    //Remove class first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    //Add class
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
}) 