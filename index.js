let encrypt_btn = document.getElementById("encrypt");
let decrypt_btn = document.getElementById("decrypt");
let btn_container = document.querySelector(".btn_container");
let title = document.querySelector("h1");
let msg_section = document.querySelector(".en_msg_section");
let encrypt_msg_btn = document.getElementById("encrypt_msg_btn");
let copy_btn = document.getElementById("copy_btn");
let input_msg = document.getElementById("input_msg");
let output_msg = document.getElementById("output_msg");



encrypt_btn.addEventListener("click", () => {
    btn_container.classList.add("hide");
    title.style.marginTop = "2rem";
    msg_section.classList.remove("hide");
})

encrypt_msg_btn.addEventListener("click", () => {
    let msg = input_msg.value;
    console.log(msg);

    let char_array = msg.split('').reverse();
    console.log(char_array[0]);

    
       
});