//Menu Hambuerger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//Slider All Posts

function changeActive2(activeImage, nextImage){
    activeImage.classList.remove("item-active2");
    activeImage.classList.add("item-hide2");
    nextImage.classList.add("item-active2");
    nextImage.classList.remove("item-hide2");
}

let nextButton1= document.querySelector("#pointer2");

nextButton1.addEventListener("click", (eventArgs) => {

    //identificar a imagem ativa
    let activeImage = document.querySelector(".item-active2")
    //identificar o irmao da imagem
    //a proxima imagem ativa
    let nextImage = activeImage.nextElementSibling;
    //trocar as classes para esconder a ativa e mostrar a irma
    /*activeImage.classList.remove("item-active");
    activeImage.classList.add("item-hide");
    nextImage.classList.add("item-active");
    nextImage.classList.remove("item-hide");*/
    changeActive2(activeImage, nextImage);
    if (!nextImage.nextElementSibling) {
        // let buttonNext = document.querySelector("nextButton");
        let buttonNext = eventArgs.target;
        buttonNext.classList.add("item-hide2");
    }
    // mostra o prev button
    let buttonPrev1 = document.querySelector("#pointer1");
    buttonPrev1.classList.remove("item-hide2");
})

let prevButton1 = document.querySelector("#pointer1");

prevButton1.addEventListener("click", (eventArgs) => {
    let activeImage = document.querySelector(".item-active2")
    let nextImage = activeImage.previousElementSibling;
    changeActive2(activeImage, nextImage);
    if (!nextImage.previousElementSibling) {
        let buttonPrev = eventArgs.target;
        buttonPrev.classList.add("item-hide2");
    }

    let buttonNext1 = document.querySelector("#pointer2");
    buttonNext1.classList.remove("item-hide2");
});


//Chosse Catagory (JSON)

//Exercício dado pelo Alexandre para as Categories

let funcPopCategories = (dataArray) =>{ 
	let categoriesContainer = document.querySelector(".galleryCategories");
        for(i = 0 ; i < dataArray.length ; ++i){
           let newDiv = document.createElement("div");
	        newDiv.classList.add("squares");
           newDiv.innerHTML = `<img src="${dataArray[i].image}"></img><h3>${dataArray[i].title}</h3><p>${dataArray[i].text}</p>`;
           categoriesContainer.appendChild(newDiv);
        }
}


funcPopCategories([{image:"./Imagens/JSON/environment-logo-icon-design-template-free-vector.jpg",title:"Environment",text:"Lorem ipsum dolor sit amet consectetuer adipiscing elit."},{image:"./Imagens/JSON/insurance-policy-icon-design-vector.jpg",title:"Policy",text:"Lorem ipsum dolor sit amet consectetuer adipiscing elit."},{image:"./Imagens/JSON/vector-social-tree-5a2d70eb8128d3.216858301512927467529.jpg",title:"Social",text:"Lorem ipsum dolor sit amet consectetuer adipiscing elit."},{image:"https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-green-leaf-icon-graphic-design-template-vector-png-image_530823.jpg",title:"Green",text:"Lorem ipsum dolor sit amet consectetuer adipiscing elit."}]);


let btPrev = document.querySelector("#prev22");
btPrev = addEventListener("click", () => {
    let carrousel = document.querySelector(".galleryCategories");
    let carrouselItems = document.querySelectorAll(".galleryCategories .squares");
    let item2Move = carrouselItems[7];
    carrousel.innerHTML = "";
    carrousel.appendChild(item2Move);
        for (i = 0; i < carrouselItems.length -1; ++i) {
            let item2Move = carrouselItems[i];
            carrousel.appendChild(item2Move);
        }
});

let btNext = document.querySelector("#next2");
btNext.addEventListener("click", () => {
    let carrousel = document.querySelector(".galleryCategories");
    let carrouselItems = document.querySelectorAll(".galleryCategories .squares");
    let item2Move = carrouselItems[0];
    carrousel.removeChild(item2Move);
    carrousel.appendChild(item2Move);
});