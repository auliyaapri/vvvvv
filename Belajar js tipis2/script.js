let koloms = document.querySelectorAll(".kolomBro");
let currentIndex = 0;

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % koloms.length;
  } else if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + koloms.length) % koloms.length;
  }
  
  // Menampilkan indeks kolom yang sedang difokuskan di konsol
  console.log("Current Index:", currentIndex);

  koloms[currentIndex].focus();
});
