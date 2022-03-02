document.addEventListener("DOMContentLoaded", function(event) {
    // 你的所有代码都应该写在这里
<img src="https://s2.loli.net/2022/03/02/uJXGPfLrvxmZQbB.jpg"></img>
{
    id="smart-image"
}
let targetImage = document.querySelector("#smart-image");
targetImage.addEventListener("click", function() {
    alert("点击了图片");
});
targetImage.classList.add("small");
targetImage.classList.remove("small");






});