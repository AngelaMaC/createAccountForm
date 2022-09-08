// Global Fields
const username = document.querySelector('#username')
const emailfield = document.querySelector('#email')
const button = document.querySelector('#button')
const response = document.querySelector('#response')

// Concat first name with last name, place in Username
const firstname = document.querySelector('#firstname')

firstname.addEventListener('keyup', event => {
    username.value = event.target.value
})

// Concat first name with last name, place in Username,
// and append random 4 digits
const lastname = document.querySelector('#lastname')
const num = (Math.random() * 10000).toFixed(0)

lastname.addEventListener('keyup', event => {
    username.value = firstname.value + event.target.value + '_' + num
})

// Show/hide pw instructions
const userpassword = document.querySelector('#password')

// show message box
userpassword.onfocus = function () {
    document.querySelector("#passwordmessage").style.display = "inline-block"
}

// hide message box 
userpassword.onblur = function () {
    document.querySelector('#passwordmessage').style.display = "none"
}

// New account password validation
// Modified from: https://www.w3schools.com/howto/howto_js_password_validation.asp
const letter = document.querySelector('#letter')
const capital = document.querySelector('#capital')
const number = document.querySelector('#number')
const length = document.querySelector('#length')

userpassword.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g

    if (userpassword.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid")
        letter.classList.add("valid")
    } else {
        letter.classList.remove("valid")
        letter.classList.add("invalid")
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g

    if (userpassword.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid")
        capital.classList.add("valid")
    } else {
        capital.classList.remove("valid")
        capital.classList.add("invalid")
    }

    // Validate numbers
    var numbers = /[0-9]/g

    if (userpassword.value.match(numbers)) {
        number.classList.remove("invalid")
        number.classList.add("valid")
    } else {
        number.classList.remove("valid")
        number.classList.add("invalid")
    }

    // Validate length
    if (userpassword.value.length >= 8) {
        length.classList.remove("invalid")
        length.classList.add("valid")
    } else {
        length.classList.remove("valid")
        length.classList.add("invalid")
    }
}

// Create account sign up form validation
document.querySelector('#sign-up').addEventListener('click', signup)

function signup(event) {
    const { isValid, fields } = validate()

    if (isValid) {
        createAccount(fields)
    }
}

// Confirm required fields
function validate() {
    // Fields
    const usernamevalue = document.querySelector('#username').value
    const firstnamevalue = document.querySelector('#firstname').value
    const lastnamevalue = document.querySelector('#lastname').value
    const passwordvalue = document.querySelector('#password').value
    const emailvalue = document.querySelector('#email').value
    const toscheck = document.querySelector('#terms').checked

    // Banner
    const signupmessage = document.querySelector('#signupmessage')

    // Data
    const data = {
        isValid: true,
        fields: {}
    }

    // Check if fields are valid
    if (firstnamevalue === '') {
        data.isValid = false

        signupmessage.className = "alert"
        signupmessage.innerHTML = signupmessage.innerHTML + '<div>Please enter <strong>a First Name</strong></div>'
    } else {
        data.fields.firstname = firstnamevalue
    }

    if (lastnamevalue === '') {
        data.isValid = false

        signupmessage.className = "alert"
        signupmessage.innerHTML = signupmessage.innerHTML + '<div>Please enter a <strong>Last Name</strong></div>'
    } else {
        data.fields.lastname = lastnamevalue
    }

    if (usernamevalue === '') {
        data.isValid = false

        signupmessage.className = "alert"
        signupmessage.innerHTML = signupmessage.innerHTML + '<div>Please enter a valid <strong>User Name</strong></div>'
    } else {
        data.fields.username = usernamevalue
    }

    if (passwordvalue === '') {
        data.isValid = false

        signupmessage.className = "alert"
        signupmessage.innerHTML = signupmessage.innerHTML + '<div>Please enter a valid <strong>Password</strong></div>'
    } else {
        data.fields.password = passwordvalue
    }

    if (emailvalue === '') {
        data.isValid = false

        signupmessage.className = "alert"
        signupmessage.innerHTML = signupmessage.innerHTML + '<div>Please enter a valid <strong>Email</strong></div>'
    } else {
        data.fields.email = emailvalue
    }

    if (!toscheck) {
        data.isValid = false

        signupmessage.className = "alert"
        signupmessage.innerHTML = signupmessage.innerHTML + '<div>Please agree to the <strong>Terms of Service</strong></div>'
    } else {
        data.isValid = true
        signupmessage.className = "alert-hidden"
    }

    return data
}

// Hide banner error if Login link is selected
document.querySelector('#loginlink').addEventListener('click', e => {
    e.preventDefault()
    signupmessage.className = "alert-hidden"
})

// Confirm email looks like - text@domain.tld
function validateEmail(email) {
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    return emailformat.test(String(email).toLowerCase())
}

// Form data into object
function createAccount(fields) {
    console.log(fields)
}

// Existing user log in view

document.addEventListener('DOMContentLoaded', () => {
    const createaccount = document.querySelector('#createaccount')
    const login = document.querySelector('#login')
    // const welcome = document.querySelector('#success')

    document.querySelector('#createaccountlink').addEventListener('click', e => {
        e.preventDefault()
        login.classList.add('login-hidden')
        createaccount.classList.remove('login-hidden')
    })

    document.querySelector('#loginlink').addEventListener('click', e => {
        e.preventDefault()
        login.classList.remove('login-hidden')
        createaccount.classList.add('login-hidden')
    })

    // document.querySelector('#loginbutton').addEventListener('click', e => {
    //     e.preventDefault()
    //     welcome.classList.remove('welcome-hidden')
    //     login.classList.add('login-hidden')

    // })
});

// Existing user log in form verification
document.querySelector('#loginbutton').addEventListener('click', verifylogin, false);

function verifylogin(e) {
    e.preventDefault()

    const loginusernamevalue = document.querySelector('#loginusername').value
    const loginpasswordvalue = document.querySelector('#loginpassword').value
    const loginmessage = document.querySelector('#loginmessage')
    const welcome = document.querySelector('#success')

    // make sure all required fields have been filled out

    if (loginusernamevalue == '' || loginpasswordvalue == '') {
        loginmessage.className = "alert"
        loginmessage.innerHTML = 'Please complete all required fields.'
    } else {
        //Success message
        welcome.classList.remove('welcome-hidden')
        login.classList.add('login-hidden')
        success.innerHTML = `<div id='success-welcome'><h1>Welcome, ` + loginusernamevalue + `!</h1><div>`
        console.log('Thanks for logging in!')

        // location.href = "./private_practice_portal.html"
    }
}

// Terms of Service Modal
// Modified from: https://codepen.io/bradtraversy/pen/zEOrPp
const modal = document.querySelector('#simplemodal')
const termsofservice = document.querySelector('#tos')
const closebtn = document.querySelector('.closebtn')

termsofservice.addEventListener('click', event => {
    modal.style.display = 'block'
})

closebtn.addEventListener('click', event => {
    modal.style.display = 'none'
})

window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
})

