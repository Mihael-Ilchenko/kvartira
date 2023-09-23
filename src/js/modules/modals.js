import createModal from "./createModal.js";

function modals() {

    const childrenCompilation = (title = 'Оставьте заявку и мы вышлем вам подборку', inputPhone = false) => `<div class='compilation'>
  <h4 class='compilation__title ff-merriweather'>${title}</h4>
  <form class='compilation__form'>
  <div class='compilation__form-container'>
  <input class='compilation__input input-reset' type='text' placeholder='Имя' />
  ${inputPhone ? `<input class='compilation__input input-reset' type='number' placeholder='Номер телефона'/>` :
`<input class='compilation__input input-reset' type='email' placeholder='Эл. почта'/>`}
  <button class='compilation__btn gold-gradient btn-reset'>Отправить</button>
  </div>
  </form>
  <p class='compilation__policy'>
  Нажимая на кнопку, вы даете согласие на обработку персональных данных в соответствии с <a class='compilation__policy__link link-reset' href='#'>Политикой конфиденциальности</a></p>
  </div>
  `;
    const btnCompilationDesktop = document.querySelector('.btn-compilation-desktop');
    const btnCompilationMobile = document.querySelector('.btn-compilation-mobile');
    const btnCompilationHero = document.querySelector('.hero__btn');
    const helpBtn = document.querySelector('.help__btn');
    const calculatBtn = document.querySelector('.calculat__btn');
    const footerCompilationBtn = document.querySelector('.footer__btn');

    createModal(footerCompilationBtn, childrenCompilation());
    createModal(calculatBtn, childrenCompilation('Оставьте заявку и мы с вами свяжемся', true));
    createModal(helpBtn, childrenCompilation('Получите точный расчет, не выходя из дома.'));
    createModal(btnCompilationDesktop, childrenCompilation());
    createModal(btnCompilationMobile, childrenCompilation());
    createModal(btnCompilationHero, childrenCompilation());

}

export default modals;