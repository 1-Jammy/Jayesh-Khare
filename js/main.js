document.addEventListener('DOMContentLoaded', () => {
    // Navbar Image
    const pfpBtn = document.querySelector('#navbar-image');
    if(pfpBtn){
        pfpBtn.addEventListener('click', () => {
            window.location.href = window.location.pathname;
        });
    }


    // Scroll-to-top button
    const scrollBtn = document.querySelector('#btn-scroll-to-top');
    if (scrollBtn) {
        scrollBtn.style.transition = 'opacity 0.3s';
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;
            if (scrollPercent > 0.3) { // Make the btn visible only when the user has scrolled 30% of the page
                scrollBtn.style.opacity = '1';
                scrollBtn.disabled = false;
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.disabled = true;
            }
        });
        scrollBtn.addEventListener('click', () => { // Scroll to the top when clicked
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});