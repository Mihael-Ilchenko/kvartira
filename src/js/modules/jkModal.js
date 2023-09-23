function jkModal() {
    const btns = document.querySelectorAll('.card__btn');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const dataset = e.target.dataset.path;
            const dataTarget = document.querySelector(`[data-target="${dataset}"]`)
            dataTarget.style.display = 'block';
            console.log(dataset, dataTarget)
        })
    })


    const cardModalBtn = document.querySelectorAll('.card-modal__btn');
    cardModalBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.jk-item-modal').forEach(item => item.style.display = 'none')
        })
    })




    const cardsModalBtn = document.querySelectorAll('.card-modal-tab__btn');
    const cardsModalImg = document.querySelectorAll('.card-modal__img');

    cardsModalBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const dataset = e.target.dataset.path;
            const dataTarget = document.querySelector(`[data-target="${dataset}"]`);
            cardsModalImg.forEach(img => {
                img.style.display = 'none'
            });

            dataTarget.style.display = 'block';
        })
    })


}

export default jkModal;