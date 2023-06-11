//Menu Hambuerger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//Imagem Principal (Carrosel)

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
    let buttonPrev = document.querySelector(".prevButton");
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

    let buttonNext = document.querySelector(".nextButton");
    buttonNext.classList.remove("item-hide");
});

//About Us, Our Mission, Our Valeurs  (Tabs)

let tabs = document.querySelectorAll(".tab");
tabs.forEach(element => element.addEventListener("click",eventArg=>{
    let contents = document.querySelectorAll(".content");
    contents.forEach(content => content.classList.add("hide"));
    let tabClicked = eventArg.target;
    let tabId = tabClicked.id;
    let content2Showdocument = document.querySelector("."+tabId);
    content2Showdocument.classList.remove("hide");
}));

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


// let prevButton2 = document.querySelector(".prevButton2");

// prevButton2.addEventListener("click", () => {

// })



// let nextButton2 = document.querySelector(".nextButton2");

// nextButton2.addEventListener("click", () => {
//     function 
// })


//Slider Testimonials

function changeActive1(activeImage, nextImage){
    activeImage.classList.remove("item-active1");
    activeImage.classList.add("item-hide1");
    nextImage.classList.add("item-active1");
    nextImage.classList.remove("item-hide1");
}

let nextButton1= document.querySelector(".nextButton1");

nextButton1.addEventListener("click", (eventArgs) => {

    //identificar a imagem ativa
    let activeImage = document.querySelector(".item-active1")
    //identificar o irmao da imagem
    //a proxima imagem ativa
    let nextImage = activeImage.nextElementSibling;
    //trocar as classes para esconder a ativa e mostrar a irma
    /*activeImage.classList.remove("item-active");
    activeImage.classList.add("item-hide");
    nextImage.classList.add("item-active");
    nextImage.classList.remove("item-hide");*/
    changeActive1(activeImage, nextImage);
    if (!nextImage.nextElementSibling) {
        // let buttonNext = document.querySelector("nextButton");
        let buttonNext = eventArgs.target;
        buttonNext.classList.add("item-hide1");
    }
    // mostra o prev button
    let buttonPrev1 = document.querySelector(".prevButton1");
    buttonPrev1.classList.remove("item-hide1");
})

let prevButton1 = document.querySelector(".prevButton1");

prevButton1.addEventListener("click", (eventArgs) => {
    let activeImage = document.querySelector(".item-active1")
    let nextImage = activeImage.previousElementSibling;
    changeActive1(activeImage, nextImage);
    if (!nextImage.previousElementSibling) {
        let buttonPrev = eventArgs.target;
        buttonPrev.classList.add("item-hide1");
    }

    let buttonNext1 = document.querySelector(".nextButton1");
    buttonNext1.classList.remove("item-hide1");
});