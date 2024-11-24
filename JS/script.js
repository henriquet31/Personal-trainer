document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll('.nav-link');
    let navCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            let bsCollapse = new bootstrap.Collapse(navCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });
});