
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let firstName = document.getElementById("firstName").value.trim();
    let lastName  = document.getElementById("lastName").value.trim();
    let email     = document.getElementById("emailSignup").value.trim();
    let password  = document.getElementById("passwordSignup").value.trim();

    
    if (firstName !== "" && lastName !== "" && email !== "" && password !== "") {
        window.location.href = "homepage2.html";  
    }
});

