var video = document.getElementById("my-video");
var popup;

// Fungsi untuk membuka video dalam pop-up
function openPopup() {
  popup = window.open("", "Video Pop Up", "width=800,height=600");
  popup.document.write('<video id="popup-video" controls>' +
    '<source src="video.mp4" type="video/mp4">' +
    '</video>');
}

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
