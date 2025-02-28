
// document.body.addEventListener('click', function (event) {
//     // Get the click coordinates
//     const x = event.clientX;
//     const y = event.clientY;

//     // Get the circle element
//     const circle = document.querySelector('.circle');

//     // Update the circle's position
//     circle.style.left = `${x}px`;
//     circle.style.top = `${y}px`;

//     // Add the 'clicked' class to trigger the animation
//     document.body.classList.add('clicked');

//     // Remove the 'clicked' class after the animation ends
//     setTimeout(() => {
//         document.body.classList.remove('clicked');
//     }, 2000); // 2000ms matches the animation duration
// });