document.addEventListener("DOMContentLoaded", function () {
    const loaderWrapper = document.getElementById("loader-wrapper");
    loaderWrapper.style.opacity = "0";

    setTimeout(() => {
        loaderWrapper.style.display = "none";
    }, 500);
});

function toggleModal() {
    const modal = document.getElementById('mobileModal');
    modal.classList.toggle('active');
}

function checkWindowSize() {
    const modal = document.getElementById('mobileModal');
    if (window.innerWidth > 1024) {
        modal.classList.remove('active');
    }
}
window.addEventListener('resize', checkWindowSize);

function url(url) {
    window.open(url, "_blank");
}

function urlnomethod(url) {
    window.location.href = url;
}
// document.addEventListener("contextmenu", function(event) {
//     event.preventDefault();
// });

// document.addEventListener("keydown", function(event) {
//     if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
//         event.preventDefault();
//     }
// });

// document.addEventListener("keydown", function(event) {
//     if (event.ctrlKey && event.key === "s") {
//         event.preventDefault();
//     }
// });

// document.addEventListener("keydown", function(event) {
//     if ((event.ctrlKey || event.metaKey) && event.key === "s") {
//         event.preventDefault();
//     }
// });