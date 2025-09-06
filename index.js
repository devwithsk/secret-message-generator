let encrypt_btn = document.getElementById("encrypt");
let decrypt_btn = document.getElementById("decrypt");
let btn_container = document.querySelector(".btn_container");
let title = document.querySelector("h1");
let msg_section = document.querySelector(".en_msg_section");
let encrypt_msg_btn = document.getElementById("encrypt_msg_btn");
let copy_btn = document.getElementById("copy_btn");
let input_msg = document.getElementById("input_msg");
let output_msg = document.getElementById("output_msg");


function encryptMessage(message) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const reversed = message.split('').reverse().join('');
    let encrypted = '';

    for (let i = 0; i < reversed.length; i++) {
        const char = reversed[i];

        // Ignore space and newline
        if (char === ' ' || char === '\n') {
            encrypted += char;
            continue;
        }

        const isUpperCase = char === char.toUpperCase();
        const lowerChar = char.toLowerCase();

        // If not an alphabet letter, keep it unchanged
        if (!alphabet.includes(lowerChar)) {
            encrypted += char;
            continue;
        }

        const index = alphabet.indexOf(lowerChar);
        let newIndex;

        // Odd index: -2 (remember 0-based indexing)
        if (i % 2 === 0) {
            newIndex = (index - 2 + 26) % 26;
        } 
        // Even index: +1
        else {
            newIndex = (index + 1) % 26;
        }

        let newChar = alphabet[newIndex];
        if (isUpperCase) {
            newChar = newChar.toUpperCase();
        }

        encrypted += newChar;
    }

    return encrypted;
}




encrypt_btn.addEventListener("click", () => {
    btn_container.classList.add("hide");
    title.style.marginTop = "2rem";
    msg_section.classList.remove("hide");
})

encrypt_msg_btn.addEventListener("click", () => {
    let message = input_msg.value;
    if (message.trim() === "") {
        alert("Please enter a message to encrypt.");
        return;
    }
    let encryptedMessage = encryptMessage(message);
    output_msg.value = encryptedMessage;
    
});

copy_btn.addEventListener("click", () => {
    output_msg.select();
    // output_msg.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Encrypted message copied to clipboard!");
});