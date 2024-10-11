function EmailValidation() {
    
    var emailValue = document.getElementById("email").value;
    var email = document.querySelector(".wrapper1");
    

    var textEmail = document.getElementById("text_email");
    
    var emailPattern = /^[^ ]+@[^]+\.[a-z]{2,3}$/;
    

    if(emailValue.match(emailPattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        email.classList.add("valid");
        email.classList.remove("invalid");
        textEmail.innerHTML = "You Email Address is Valid"
        textEmail.style.color = "#00c500"
        return true;
    }else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        email.classList.add("invalid");
        email.classList.remove("valid");
        textEmail.innerHTML = "You Email Address is Invalid"
        textEmail.style.color = "#c50000"
        return false;
    }




}

function NameValidation() {
    var nameValue = document.getElementById("name").value.trim(); 
    var name = document.querySelector(".wrapper2");
    var textName = document.getElementById("text_name");

    var invalidTitles = [
        "Mr", "Mr.", 
        "Ms", "Ms.", 
        "Miss", "Miss.", 
        "Sir", "Sir.", 
        "Mister", "Mister.", 
        "Misses", "Misses.", 
        "Lady", "Lady."
    ];

    var nameParts = nameValue.split(" ");
    var firstName = nameParts[0]; 

    var namePattern = /^[A-Z][a-zA-Z]+(?:-[A-Z][a-zA-Z]+)?(?: [A-Z][a-zA-Z]+(?:-[A-Z][a-zA-Z]+)?)*$/;

    if (invalidTitles.includes(firstName) || 
        (nameValue === "John Doe") || 
        (nameValue === "Jane Doe")) {
        
        form.classList.remove("valid");
        form.classList.add("invalid");
        name.classList.add("invalid");
        name.classList.remove("valid");
        textName.innerHTML = "Cannot be a title or specific names like 'John Doe' or 'Jane Doe'";
        textName.style.color = "#c50000";
        return false;
    } 

    if (nameValue.match(namePattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        name.classList.add("valid");
        name.classList.remove("invalid");
        textName.innerHTML = "Your Full Name is Valid";
        textName.style.color = "#00c500";
        return true;
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        name.classList.add("invalid");
        name.classList.remove("valid");
        textName.innerHTML = "Your Full Name is Invalid";
        textName.style.color = "#c50000";
        return false;
    }
}

function PasswordValidation() {
    var passwordValue = document.getElementById("password").value;
    var password = document.querySelector(".input-box1");
    var textPassword = document.getElementById("text_password");

    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordValue.match(passwordPattern)) {
        password.classList.add("valid");
        password.classList.remove("invalid");
        textPassword.innerHTML = "Your Password is Valid";
        textPassword.style.color = "#00c500";
        return true;
    } else {
        password.classList.remove("valid");
        password.classList.add("invalid");
        textPassword.innerHTML = "Password must be at least 8 characters, include uppercase, lowercase, numbers, and special characters.";
        textPassword.style.color = "#c50000";
        return false;
    }
}

var form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const card = document.getElementById("card");
    const front = document.getElementById("front");
    const passwordBtn = document.getElementById("form-submit2");

    const isEmailValid = EmailValidation();
    const isNameValid = NameValidation();

    var snackbar = document.getElementById("snackbar");

    if (isEmailValid && isNameValid) {
        snackbar.className = "show success";
        snackbar.innerHTML = "Email and Name Form is valid. Proceeding to password validator.";
        card.style.transform = "rotateY(180deg)"
        front.style.transform = "rotateY(0deg)"
        passwordBtn.style.visibility = "visible"
    } else {
        snackbar.className = "show error";

        if (!isEmailValid) {
            snackbar.innerHTML = `Error: Email is invalid [${e.target[0].value}]`;
        } else if (!isNameValid) {
            snackbar.innerHTML = `Error: Name is invalid [${e.target[1].value}]`;
        }
    }

    setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", "");
        snackbar.className = snackbar.className.replace("error", "");
        snackbar.className = snackbar.className.replace("success", "");
    }, 5000);
});

var form2 = document.getElementById("form2"); 

form2.addEventListener("submit", function(e) {
    e.preventDefault();

    const isEmailValid = EmailValidation();
    const isNameValid = NameValidation();
    const isPasswordValid = PasswordValidation();

    var snackbar = document.getElementById("snackbar");

    if (isEmailValid && isNameValid && isPasswordValid) {
        snackbar.className = "show success";
        snackbar.innerHTML = "Password Form is valid. Proceeding with submission.";
    } else {
        snackbar.className = "show error";

        if (!isEmailValid) {
            snackbar.innerHTML = `Error: Email is invalid [${e.target[0].value}]`;
        } else if (!isNameValid) {
            snackbar.innerHTML = `Error: Name is invalid [${e.target[1].value}]`;
        } else if (!isPasswordValid) {
            snackbar.innerHTML = `Error: Password is invalid`;
        }
    }

    setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", "");
        snackbar.className = snackbar.className.replace("error", "");
        snackbar.className = snackbar.className.replace("success", "");
    }, 5000);
});


