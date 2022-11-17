const inputEmail = document.getElementById('email_input')
const form = document.getElementById('form')
const errorMsg = document.getElementById('error_msg')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // VALIDACIÓN CAMPO VACÍO
    if (inputEmail.value === '') {
        inputEmail.classList.add('input_error')
        inputEmail.classList.add('margin_bottom')
        errorMsg.innerHTML = 'Email cannot be empty'
        return
        // VALIDACIÓN DE @ EN EMAIL
    } else if (inputEmail.value.indexOf("@") < 0) {
        inputEmail.classList.add('input_error')
        inputEmail.classList.add('margin_bottom')
        errorMsg.innerHTML = 'Please provide a valid email address'
        return
        // VALIDACIÓN DE .COM EN EMAIL
    } else if (inputEmail.value.indexOf(".com") < 0) {
        inputEmail.classList.add('input_error')
        inputEmail.classList.add('margin_bottom')
        errorMsg.innerHTML = 'Please provide a valid email address'
        return
    } else {
        inputEmail.classList.remove('input_error')
        errorMsg.classList.add('ok_msg')
        errorMsg.innerHTML = ''
        inputEmail.value = ''
        // setTimeout(() => {
        //     window.location.reload()
        // }, 2000);
    }
})