/*
const people = [ 'T', 'W', 'E', 'L', 'V', 'E', 'P', 'E', 'O', 'P,' 'L', 'E' ];
for (let i=0; i<people.length; i++)
	var image = "<img src=\"people" + i + ".png\" alt=\"" + people[i] + "\" height=200>"
	document.write(image)
	document.getElementByID("twelvepeople").innerHTML = image;

	function frame()
*/

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.animated-image');

    // Loop through each image and animate them
    images.forEach((image, index) => {
        // Delay each image animation
        setTimeout(() => {
            // Set initial position and opacity
            image.style.opacity = '1';
            image.style.top = '50px'; // Adjust the desired position from the top

            // After a delay, move the image to the top
            setTimeout(() => {
                image.style.top = '0';
            }, 1000); // Adjust the delay time as needed
        }, index * 1000); // Adjust the delay between each image
    });
});
