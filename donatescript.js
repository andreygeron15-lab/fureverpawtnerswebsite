const oneTime = document.getElementById("oneTime");
const recurring = document.getElementById("recurring");

oneTime.addEventListener("click", () => {
    oneTime.classList.add("active");
    recurring.classList.remove("active");
});

recurring.addEventListener("click", () => {
    recurring.classList.add("active");
    oneTime.classList.remove("active");
});
function goToPayment() {
    window.location.href = "payment.html";
}