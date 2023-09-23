function createModal(btn, children = 'Модальное окно') {
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');

    modal.classList.add('modal');
    modalContent.classList.add('modal__content');
    modal.append(modalContent);

    modalContent.innerHTML = children;

    modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    btn.addEventListener('click', () => {
        document.body.append(modal);
        document.body.classList.add('overflowYHidden')
    })
    document.addEventListener('click', (e) => {
        if (e.target !== btn && e.target !== modalContent && e.target !== modalContent) {
            modal.remove();
            document.querySelector('.modal') === null ? document.body.classList.remove('overflowYHidden') :
                '';
        }
    })
    return modal;
}

export default createModal;