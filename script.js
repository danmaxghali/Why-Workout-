// Get the button element
const startBtn = document.getElementById("start-btn");

// Add an event listener to the button
startBtn.addEventListener("click", () => {
    // Change the window's location to the next HTML page
    window.location.href = "load1.html";
});

window.onload = function() {
    const loadingBar = document.getElementById('loading-bar');
    let width = 0;

    // Increment the loading bar every second by 20%
    const interval = setInterval(function() {
        width += 20;  // Increase width by 20% each second
        loadingBar.style.width = width + '%';

        // After 5 seconds (when the width reaches 100%), redirect to another page
        if (width >= 100) {
            clearInterval(interval);  // Stop the interval
            setTimeout(function() {
                window.location.href = 'menu.html';  // Redirect to the next page
            }, 500);  // Small delay to allow for the last frame to show
        }
    }, 1000); // 1000 ms = 1 second
};
