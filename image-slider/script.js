const nextBtn = document.getElementsByClassName("next");
const prevBtn = document.getElementsByClassName("prev");

const imageE1 = document.querySelectorAll("img");
console.log(imageE1);

const imageContainer = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextBtn[0].addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();  
});

prevBtn[0].addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

// updateImg();

function updateImg() {
    if (currentImg > imageE1.length) {
        currentImg = 1;
    } else if (currentImg < 1){
        currentImg = imageE1.length;
    }
    imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

      timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
}

