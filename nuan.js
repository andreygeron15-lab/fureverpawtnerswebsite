const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card-link");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active state
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {
            const animalCard = card.querySelector(".animal-card");

            if (filter === "all") {
                card.style.display = "block";
            } else if (animalCard.classList.contains(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
