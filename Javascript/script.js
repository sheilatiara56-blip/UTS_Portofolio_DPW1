const form = document.getElementById("contactForm");
const namaInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const hasilInput = document.getElementById("hasil");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    hasilInput.textContent = `Terima kasih, ${nama}! Pesan Anda telah dikirim.`;
});

