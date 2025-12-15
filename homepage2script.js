
document.addEventListener("DOMContentLoaded", () => {
    const profileBtn = document.getElementById("profileBtn");

    if (profileBtn) {
        profileBtn.addEventListener("click", () => {
            window.location.href = "login.html";
        });
    }
});
