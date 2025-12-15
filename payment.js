function handlePayment() {
    const selected = document.querySelector('input[name="paymethod"]:checked');

    const cardForm = document.getElementById("cardForm");
    const ewalletForm = document.getElementById("ewalletForm");

    // Hide both forms first
    cardForm.style.display = "none";
    ewalletForm.style.display = "none";

    if (!selected) {
        alert("Please select a payment method.");
        return;
    }

    if (selected.value === "card") {
        cardForm.style.display = "block";
    } else {
        ewalletForm.style.display = "block";
    }
}

// Demo confirmation
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("confirm-btn")) {
        alert("Payment Successful! Thank you for your donation ❤️");
    }

    if (e.target.classList.contains("wallet-btn")) {
        alert("Redirecting to E-Wallet payment...");
    }
});
