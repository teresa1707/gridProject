const mainImages = document.getElementsByTagName("img");
const anchors = document.getElementsByTagName("a");
const show_image_popup = document.getElementById("show_image_popup");
const popUpImage = document.getElementById("pop-up-image");
const closeButton = document.getElementById("close-btn");

for (let i = 0; i < mainImages.length; i++) {
    mainImages[i].addEventListener("click", function () {
        for (let j = 0; j < mainImages.length; j++) {
            mainImages[i].classList.remove("active");
        }
        this.classList.add("active");
        let srcVal = this.src;
        popUpImage.src = srcVal;
        showModal();
    });
}
function showModal() {
    show_image_popup.style.display = "block";
}
closeButton.addEventListener("click", function () {
    for (let i = 0; i < mainImages.length; i++) {
        mainImages[i].classList.remove("active");
    }
    closeModal();
});
function closeModal() {
    show_image_popup.style.display = "none";
}
