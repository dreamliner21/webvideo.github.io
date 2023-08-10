var video = document.getElementById("my-video");
var popup;

// Mendapatkan tombol pop-up
const popupButton = document.querySelector('.popup-button');

// Membuat fungsi untuk membuka pop-up
function openPopup() {
  const popup = window.open("", "Video Pop Up", "width=800,height=600");
  const popupContent = '<video id="popup-video" controls>' +
    '<source src="video.mp4" type="video/mp4">' +
    '</video>';
  popup.document.write(popupContent);
}

// Menambahkan kejadian klik ke tombol pop-up
popupButton.addEventListener('click', openPopup);

// Fungsi untuk memainkan video berikutnya
function nextVideo() {
  // Ganti src video dengan URL video berikutnya
  video.src = "next_video.mp4";
}

// Fungsi untuk memainkan video sebelumnya
function previousVideo() {
  // Ganti src video dengan URL video sebelumnya
  video.src = "previous_video.mp4";
}

const videoElement = document.querySelector('video');

function handleOrientationChange() {
  if (window.orientation === 0 || window.orientation === 180) {
    videoElement.classList.remove('landscape');
    videoElement.classList.add('portrait');
  } else {
    videoElement.classList.remove('portrait');
    videoElement.classList.add('landscape');
  }
}

window.addEventListener('orientationchange', handleOrientationChange);
