const track = document.getElementById("carouselTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const cardWidth = 483.6756 + 35;
let index = 0;
const maxIndex = 6 - 3;

nextBtn.addEventListener("click", () => {
  if (index < maxIndex) {
    index++;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});