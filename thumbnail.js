document.addEventListener("DOMContentLoaded", function(event) {
    // 你的所有代码都应该写在这里
 let targetImage = document.querySelector ("#smart-image");
 targetImage.addEventListener("click", function(){
    if (targetImage.classList.contains("small")) {
        targetImage.classList.remove("small");
    } else {
        targetImage.classList.add("small");
    }
});

 let targetImage1 = document.querySelector ("#a");
 targetImage1.addEventListener("click", function(){
    if (targetImage1.classList.contains("small")) {
        targetImage1.classList.remove("small");
    } else {
        targetImage1.classList.add("small");
    }
});

let targetImage2 = document.querySelector ("#b");
 targetImage2.addEventListener("click", function(){
    if (targetImage2.classList.contains("small")) {
        targetImage2.classList.remove("small");
    } else {
        targetImage2.classList.add("small");
    }
});

let targetImage3 = document.querySelector ("#c");
 targetImage3.addEventListener("click", function(){
    if (targetImage3.classList.contains("small")) {
        targetImage3.classList.remove("small");
    } else {
        targetImage3.classList.add("small");
    }
});

let targetImage4 = document.querySelector ("#d");
 targetImage4.addEventListener("click", function(){
    if (targetImage4.classList.contains("small")) 
    {
        targetImage4.classList.remove("small");
    } 
    else 
    {
        targetImage4.classList.add("small");
    }
});










});


