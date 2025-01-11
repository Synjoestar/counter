/**
 * Aplikasi Counter untuk menambah, mengurangi, atau mereset nilai yang ditampilkan.
 * 
 * @fileoverview Script ini menangani logika interaksi tombol dan 
 * memperbarui nilai serta warnanya secara dinamis.
 */

// Mengatur nilai awal ke nol
let count = 0;

/**
 * Memilih elemen nilai yang akan diperbarui.
 * @type {HTMLElement}
 */
const value = document.querySelector("#value");

/**
 * Memilih semua tombol dengan class "btn".
 * @type {NodeListOf<HTMLElement>}
 */
const btns = document.querySelectorAll(".btn");

/**
 * Menambahkan event listener ke setiap tombol untuk memperbarui nilai counter.
 */
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    // Memperbarui nilai berdasarkan tombol yang ditekan
    if (styles.contains("decrease")) {
      count--; // Mengurangi nilai
    } else if (styles.contains("increase")) {
      count++; // Menambah nilai
    } else {
      count = 0; // Mengatur ulang nilai ke nol
    }

    // Mengubah warna teks berdasarkan nilai counter
    if (count > 0) {
      value.style.color = "green"; // Hijau jika nilai positif
    } else if (count < 0) {
      value.style.color = "red"; // Merah jika nilai negatif
    } else {
      value.style.color = "#222"; // Warna default jika nilai nol
    }

    // Memperbarui nilai yang ditampilkan
    value.textContent = count;
  });
});
