document.getElementById("imageForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let userText = document.getElementById("userText").value;

    // Suratni yaratish uchun matnni tahrir qilamiz
    let imageUrl = `https://via.placeholder.com/600x300.png?text=${encodeURIComponent(userText)}`;

    // Suratni ekranda ko'rsatish
    let imageContainer = document.getElementById("generatedImage");
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;
});