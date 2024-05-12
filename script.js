document.addEventListener('DOMContentLoaded', function() {

  /* CONSTANTS DECLARATIONS */
  const container = document.querySelector('.grid-container');
  const images = document.querySelectorAll('.grid-image');
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
  var timerNeverSet = true;

  insertImages("people", people, 70);
  setTimeout(() => shiftImages("people"), 5000);
  setTimeout(() => insertImages("instructions", instructions, 60), 8000);
  setTimeout(() => shiftImages("instructions"), 13000);
  setTimeout(initializeNMOT, 16000);

  /* FUNCTIONS DECLARATIONS */

  function initializeNMOT() { // Add audio elements and set up for NMOT interface
    insertImages("nmot", nmot, 35);

    document.querySelectorAll('.playbutton').forEach((button, index) => {
      button.style.opacity = 1;
      button.addEventListener('click', () => {
        if (timerNeverSet) countdown();
        const audioLeft = document.getElementById(`audio${index+1}left`);
        const audioRight = document.getElementById(`audio${index+1}right`);
        if (audioLeft.paused || audioRight.paused) {
          button.src = "resources/pause.png";
          button.alt = "Pause";
          audioLeft.play();
          audioRight.play();
        } else { // button.alt == "Pause"
          button.src = "resources/play.png";
          button.alt = "Play";
          audioLeft.pause();
          audioRight.pause();
        }
      });
    })

    document.querySelectorAll('.slider').forEach((mixer, index) => {
      mixer.style.opacity = 1;
      mixer.addEventListener('input', function() {
        const volumeValue = parseInt(mixer.value);
        const audioLeft = document.getElementById(`audio${index+1}left`);
        const audioRight = document.getElementById(`audio${index+1}right`);
        audioLeft.volume = 1 - volumeValue / 100;
        console.log(audioLeft.volume);
        audioRight.volume = volumeValue / 100;
        console.log(audioRight.volume);
      });
    })
  }

  function insertImages(name, arr, height) { // Add 12 images of a pattern
    images.forEach((image, index) => {
      image.src = `resources/${name}/${index + 1}.png`;
      image.alt = arr[index];
      image.height = height;
    })
    fadeImages();
  }

  function shiftImages(id) { // Replace the grid of images images with their copies at the top
      fadeImages(fadeOut=true); // Trigger fade-out animation
      // Show images outside the grid
      setTimeout(() => { 
        document.querySelectorAll(`#${id}`).forEach(element => {
        element.style.opacity = '1'; // Set opacity of the actual images to 1
        element.style.transition = 'opacity 1s ease-in-out' // Fade in
        }, 3000);
      });
  }

  function fadeImages(fadeOut=false) { // Fade images in/out
    //const images = document.querySelectorAll('.grid-container img');
    images.forEach((image, index) => {
      setTimeout(() => {
        image.style.opacity = fadeOut ? 0 : 1; // Fade out each image
      }, index * 250); // Delay each image by 250 ms for staggered fade
    });
  }

  function countdown() { // Start the one-minute countdown
    timerNeverSet = false;
    document.getElementById('timer').style.opacity = 1;
    var seconds = 60, timer = setTimeout(update, 1000);
    function update()
    {
      if (seconds > 0) {
      document.getElementById("timer").innerText = "You have " + --seconds + " seconds remaining.";
         timer = setTimeout(update, 1000);
      } else {
          alert('Your one minute of noise-making onomatopoeia is over. Close the page or reload to play again.');
          location.reload();
        }
    }
  }
});