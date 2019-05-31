export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.buttonOpen = document.querySelector(botaoAbrir);
    this.buttonClose = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  addModalEvents() {
    this.buttonOpen.addEventListener('click', this.eventToggleModal);
    this.buttonClose.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickOutModal);
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
