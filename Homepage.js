function changeActive(activeImage, nextImage){
    activeImage.classList.remove("item-active");
    activeImage.classList.add("item-hide");
    nextImage.classList.add("item-active");
    nextImage.classList.remove("item-hide");
}

let nextButton = document.querySelector(".nextButton");

nextButton.addEventListener("click", (eventArgs) => {

    //identificar a imagem ativa
    let activeImage = document.querySelector(".item-active")
    //identificar o irmao da imagem
    //a proxima imagem ativa
    let nextImage = activeImage.nextElementSibling;
    //trocar as classes para esconder a ativa e mostrar a irma
    /*activeImage.classList.remove("item-active");
    activeImage.classList.add("item-hide");
    nextImage.classList.add("item-active");
    nextImage.classList.remove("item-hide");*/
    changeActive(activeImage, nextImage);
    if (!nextImage.nextElementSibling) {
        // let buttonNext = document.querySelector("nextButton");
        let buttonNext = eventArgs.target;
        buttonNext.classList.add("item-hide");
    }
    // mostra o prev button
    let buttonPrev = document.querySelector("prevButton");
    buttonPrev.classList.remove("item-hide");
})

let prevButton = document.querySelector(".prevButton");

prevButton.addEventListener("click", (eventArgs) => {
    let activeImage = document.querySelector(".item-active")
    let nextImage = activeImage.previousElementSibling;
    changeActive(activeImage, nextImage);
    if (!nextImage.previousElementSibling) {
        let buttonPrev = eventArgs.target;
        buttonPrev.classList.add("item-hide");
    }

    let buttonNext = document.querySelector("nextButton");
    buttonPrev.classList.remove("item-hide");
});