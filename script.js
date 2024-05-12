document.addEventListener('DOMContentLoaded', function() {
  
  /* CONSTANTS DECLARATIONS */

  const container = document.querySelector('.grid-container');
  const people = [ 'T', 'W', 'E', 'L', 'V', 'E', 'P', 'E', 'O', 'P', 'L', 'E' ];
  const instructions = [ "each", "to", "repeat", "for", "one", "minute",
    "constantly", "the", "following", "noise", "making", "onomatopoeia" ];
  const nmot = [
    "tentententententen",
    "enennenennenennenennenennenennen",
    "yoummoooyouyoummoooyouyoumooyouooo",
    "tea.tea.tea.tea.tea.tea.tea.tea.tea",
    "miaaaaaanayoooo,miaaaaaaaanayooooo",
    "sta—sta—sta—sta—sta",
    "lalalalalalalalalalalalalalalalalalalaslalalala",
    "fftfftfftfftfftfftfftfftfftfftfftfftfft",
    "reoooreoooreoooreoooreoooreoooreooreooo",
    "scscscscscspsspscscscscscspssps",
    "yeayeayeayeayeayeayeayeayeayeayea",
    "nunnnooonunnnooonunnnooonunnnooonunnnooo"
  ];

  /* MAIN BODY */
  insertImages("people", people, 0); //100
  setTimeout(() => shiftImages("people"), 0); //5000
  setTimeout(() => insertImages("instructions", instructions, 75), 0); //7000
  setTimeout(() => shiftImages("instructions"), 0); //14000
  setTimeout(() => insertImages("nmot", nmot, 35), 0); //16000



  /* FUNCTIONS DECLARATIONS */

  // Add 12 images of a pattern
  function insertImages(name, arr, height) {
    for (let i = 1; i <= 12; i++) {
      const img = document.createElement("img");
      img.src = `resources/${name}/${i}.png`;
      img.alt = arr[i - 1];
      img.height = height;
      img.classList.add(`image${i}`); // Add CSS class for styling
      container.appendChild(img);
    }
    fadeImages();
  }

  // Replace the grid of images images with their copies at the top
  function shiftImages(id){
      fadeImages(fadeOut=true); // Trigger fade-out animation
      container.innerHTML = ''; // Clear existing images from the container
      document.querySelectorAll(`#${id}`).forEach(element => {
        element.style.opacity = '1'; // Set opacity of the actual images to 1
        element.style.transition = 'opacity 1s ease-in-out' // Fade in
      });
  }

  // Fade images in/out
  function fadeImages(fadeOut=false) {
    const images = document.querySelectorAll('.grid-container img');
    images.forEach((image, index) => {
      setTimeout(() => {
        image.style.opacity = fadeOut ? 0 : 1; // Fade out each image
      }, index * 250); // Delay each image by 250 ms for staggered fade-in
    });
  }
});