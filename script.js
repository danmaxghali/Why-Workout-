document.addEventListener('DOMContentLoaded', function () {
    if (document.body.classList.contains("load-page")) {
        const getUrl = document.body.getAttribute("data-url")

        if (getUrl) {
            setTimeout(function () {
                window.location.href = getUrl;
            }, 6000);
        } 
        else {
            console.error('No target URL specified in data-url attribute');
        }
    }
});

const buttons = document.querySelectorAll(".rdbutton")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const targetUrl = button.getAttribute("data-page");
        
        window.location.href = targetUrl;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Single back button (go back 1 page)
    const backButton = document.querySelector(".back-button");
    if (backButton) {
        backButton.addEventListener("click", () => {
            window.history.back(); 
        });
    } else {
        console.warn("back-button not found.");
    }

    // Double back button (go back 2 pages)
    const backButton2 = document.querySelector(".back-button2");
    if (backButton2) {
        backButton2.addEventListener("click", () => {
            window.history.go(-2); 
        });
    } else {
        console.warn("back-button2 not found.");
    }
});








