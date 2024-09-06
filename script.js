document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".top-bar-left .toggle-btn");
    const sidebar = document.querySelector(".sidebar");
    const thumbnailsContainer = document.querySelector(".thumbnails-container");
    const categoryBar = document.querySelector(".category-bar");

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");
        thumbnailsContainer.classList.toggle("sidebar-collapsed");
        categoryBar.classList.toggle("collapsed");
        categoryBar.classList.toggle("expanded");
    });
});
