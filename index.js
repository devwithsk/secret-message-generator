let encrypt_btn = document.getElementById("encrypt");
let decrypt_btn = document.getElementById("decrypt");
let btn_container = document.querySelector(".btn_container");
let title = document.querySelector("h1");


encrypt_btn.addEventListener("click", () => {
    btn_container.classList.add("hide");
    title.style.marginTop = "2rem";
})