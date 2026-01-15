let lastScroll = 0;
const headerBox = document.querySelector('.header_box');

window.addEventListener('scroll', () => {
    const current = window.scrollY;

    // Скролл вниз (больше 40px чтобы избежать дрожания)
    if (current > lastScroll && current > 40) {
        headerBox.classList.add("hide");
    } 
    // Скролл вверх
    else {
        headerBox.classList.remove("hide");
    }

    lastScroll = current;
});