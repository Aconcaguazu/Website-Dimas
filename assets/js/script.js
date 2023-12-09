function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.getElementById("animated-text");
    const textsToAnimate = ["Hello, I'm Web Development", "Hello, I'm UI/UX Designer"];
    const delay = 2000; // Waktu tunda antara setiap gantian teks (dalam milidetik)
    let textIndex = 0;
    let charIndex = 0;
    let displayText = "";

    function type() {
        if (charIndex < textsToAnimate[textIndex].length) {
            displayText += textsToAnimate[textIndex].charAt(charIndex);
            animatedText.textContent = displayText;
            charIndex++;
            setTimeout(type, 100); // Waktu antara setiap karakter (dalam milidetik)
        } else {
            setTimeout(erase, delay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            displayText = textsToAnimate[textIndex].substring(0, charIndex - 1);
            animatedText.textContent = displayText;
            charIndex--;
            setTimeout(erase, 50); // Waktu antara setiap karakter yang dihapus (dalam milidetik)
        } else {
            textIndex = (textIndex + 1) % textsToAnimate.length;
            setTimeout(type, 500); // Waktu tunda sebelum mengetik teks baru (dalam milidetik)
        }
    }

    setTimeout(type, delay);
});

AOS.init({
    duration: 500,
    once: true, // Animasi hanya terjadi sekali
  });

  // Tangkap elemen-elemen skill
  var skillItems = document.querySelectorAll('.skills-item');

  // Fungsi untuk menentukan apakah elemen berada dalam tampilan
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Fungsi untuk menambahkan kelas aktif ketika elemen dalam tampilan
  function handleScroll() {
    skillItems.forEach(function (item) {
      if (isElementInViewport(item)) {
        item.classList.add('active');
      }
    });
  }

  // Event listener untuk menangani scroll
  window.addEventListener('scroll', handleScroll);

  // Panggil fungsi handleScroll setelah halaman dimuat
  document.addEventListener('DOMContentLoaded', handleScroll);

  