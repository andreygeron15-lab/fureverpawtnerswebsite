
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email !== "" && password !== "") {
        window.location.href = "homepage2.html";  
    }
});

