document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const menuList = document.getElementById('menu-list');

    toggleBtn.addEventListener('click', function() {
        menuList.classList.toggle('show-menu');
        if (menuList.classList.contains('show-menu')) {
            menuList.style.display = "block";
        } 
        else {
            menuList.style.display = "none";
        }
    });
});