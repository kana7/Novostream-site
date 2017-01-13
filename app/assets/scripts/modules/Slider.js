import Siema from 'siema';

class Slider {
  constructor(selector) {
    this.slider = new Siema({
      selector: selector,
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: false,
    });
  }
}

export default Slider;
