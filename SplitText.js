function animateText(textElement) {
  const text = textElement.innerHTML;
  textElement.innerHTML = "";

  let index = 0;
  const interval = 50; // Waktu antara setiap karakter (dalam milidetik)

  function type() {
    textElement.innerHTML += text[index];
    index++;
    if (index < text.length) {
      setTimeout(type, interval);
    }
  }

  setTimeout(type, interval);
}

// Panggil fungsi untuk animasi elemen pertama
animateText(document.getElementById("text1"));

// Panggil fungsi untuk animasi elemen kedua
setTimeout(() => {
  animateText(document.getElementById("text2"));
}, 1000); // Tambahkan penundaan jika diperlukan (dalam milidetik)
