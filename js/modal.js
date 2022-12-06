(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalWindow: document.querySelector('[data-modal-window]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', removeModal);
  refs.closeModalBtn.addEventListener('click', addModal);
  

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.modalWindow.classList.toggle('modal__animation');
  }
  function addModal() {
    refs.modalWindow.classList.add('modal__animation--off')
  }
  function removeModal() {
    refs.modalWindow.classList.remove('modal__animation--off')
  }
})();