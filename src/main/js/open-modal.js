// TOGGLE MODAL
(() => {
  const refs = {
    openModalBtn: document.querySelector('.hero__btn'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// PHONE INPUT
$(function () {
  $('.form__input').usPhoneFormat({
    format: '(xxx) xxx-xxxx'
  });
});
