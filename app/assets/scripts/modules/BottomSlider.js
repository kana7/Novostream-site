const $ = require('jquery');

class BottomSlider {
  constructor(element) {
    this.element = element;
    this.trigger = this.element.find(".aid__question");
    this.content = this.trigger.next();
    //this.content.attr('max-height', this.content.prop('scrollHeight') + 'px');
    this.bindEvents();
  }
  bindEvents(){
    var that = this;
    this.trigger.on('click', this.toggleOpen.bind(that));
  }

  toggleOpen(){
    if (this.content[0].style.maxHeight){
      this.content[0].style.maxHeight = null;
      this.element.removeClass('aid--is-open');
    }
    else {
      this.content[0].style.maxHeight = this.content.prop('scrollHeight') + 'px'
      this.element.addClass('aid--is-open');
    }
  }
}

export default BottomSlider;
