// script for the popup notification after making a review (post) 

const openpopup = document.getElementById("post");
const closepopup = document.getElementById("closepopup");
const popup = document.getElementById("popup");

openpopup.addEventListener("click", () => {
    popup.classList.add("open");
});

closepopup.addEventListener("click", () => {
    popup.classList.remove("open");
});
