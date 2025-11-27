// Daftar gambar untuk slideshow
const images = [
    "images/foto1.jpg",
    "images/foto4.jpg",
    "images/foto5.jpg",
    "images/foto9.jpg",
    "images/foto11.jpg",
    "images/foto12.jpg",
    "images/foto14.jpg",
    "images/foto15.jpg",
    "images/foto16.jpg",
    "images/foto17.jpg",
    "images/foto18.jpg",
    "images/foto19.jpg",
    "images/foto20.jpg",
    "images/foto21.jpg",
    "images/foto22.jpg",
    "images/foto23.jpg",
    "images/foto24.jpg",
    "images/foto25.jpg",
    "images/foto26.jpg",
    "images/foto27.jpg",
    "images/foto28.jpg",
    "images/foto29.jpg",
    "images/foto30.jpg",
    "images/foto33.jpg",
    "images/foto34.jpg",
    "images/foto35.jpg",
    "images/foto36.jpg",
    "images/foto37.jpg",
    "images/foto38.jpg",
    "images/foto39.jpg",
    "images/foto40.jpg",
    "images/foto41.jpg",
    "images/foto42.jpg",
    "images/foto43.jpg"
];

let index = 0;
const overlay = document.createElement("div");
overlay.id = "background-overlay";
document.body.appendChild(overlay);

// Atur gaya overlay langsung via JavaScript
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.zIndex = "-1";
overlay.style.backgroundSize = "cover";
overlay.style.backgroundPosition = "center";
overlay.style.backgroundRepeat = "no-repeat";
overlay.style.transition = "opacity 1.5s ease-in-out";
overlay.style.opacity = "1";

// Fungsi untuk mengganti background dengan efek fade
function changeBackground() {
    overlay.style.opacity = "0";

    setTimeout(() => {
        overlay.style.backgroundImage = `url('${images[index]}')`;
        overlay.style.opacity = "1";
        index = (index + 1) % images.length;
    }, 500); // waktu fade-out sebelum ganti gambar
}

// Ganti foto setiap 5 detik
setInterval(changeBackground, 5000);

// Set foto awal
changeBackground();
