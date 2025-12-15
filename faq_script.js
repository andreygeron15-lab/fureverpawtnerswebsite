const buttons = document.querySelectorAll(".question-btn");
const answers = document.querySelectorAll(".answer");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        
        buttons.forEach(b => b.classList.remove("active"));
        answers.forEach(a => a.classList.remove("active"));

       
        btn.classList.add("active");
        const target = document.getElementById(btn.dataset.answer);
        target.classList.add("active");
    });
});
