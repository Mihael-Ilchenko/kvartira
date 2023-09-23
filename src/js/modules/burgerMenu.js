function burgerMenu() {
    const menu = document.querySelector('.burger');
    const btnOpen = document.querySelector('.burger__btn');
    const dropdown = document.querySelector('.burger__dropdown');

    btnOpen.addEventListener('click', (e) => {
        e.stopPropagation();
        btnOpen.classList.toggle('burger__btn_active');
        if (btnOpen.classList.contains('burger__btn_active')) {
            menu.classList.add('burger_active');
        } else {
            menu.classList.remove('burger_active');
        }
    })

    document.addEventListener('click', e => {
        let target = e.target;


        if (target !== menu && target !== dropdown) {
            menu.classList.remove('burger_active');
            btnOpen.classList.remove('burger__btn_active');
        }
    });
}

export default burgerMenu;