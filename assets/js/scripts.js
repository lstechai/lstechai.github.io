const modal = document.getElementById("modal");
const quoteButton = document.getElementById("quoteButton");
const quoteButton1 = document.getElementById("quoteButton1");
const quoteButton2 = document.getElementById("ContactBn");
const closeButton = document.querySelector(".close");

quoteButton.onclick = function () {
    modal.style.display = "flex";
};

quoteButton1.onclick = function () {
    modal.style.display = "flex";
};

quoteButton2.onclick = function () {
    modal.style.display = "flex";
};

closeButton.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const extraDescription = button.previousElementSibling;

        if (extraDescription.style.display === 'none') {
            extraDescription.style.display = 'block'; 
            button.textContent = 'Less'; 
        } else {
            extraDescription.style.display = 'none'; 
            button.textContent = 'More'; 
        }
    });
});