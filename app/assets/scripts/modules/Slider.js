import Siema from 'siema';

class Slider {
  constructor(selector) {
    this.slider = new Siema({
      selector: selector,
      duration: 500,
      easing: 'ease',
      perPage: {
        0: 1,
        800: 2,
        1010: 3,
      },
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: true,
    });
    this.prev = document.querySelector('.siema-ui .prev');
    this.next = document.querySelector('.siema-ui .next');
    this.events();
  }

  events(){
    this.prev.addEventListener('click', this.moveToPrev.bind(this));
    this.next.addEventListener('click', this.moveToNext.bind(this));
  }
  moveToPrev(){
    this.slider.prev();
  }
  moveToNext(){
    this.slider.next();
  }
}

export default Slider;
