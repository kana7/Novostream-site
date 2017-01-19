import $ from 'jquery';

/*
element : list (ul, ol, parent of div) : jquery element
childSelector: selector for the children : String
class select state should be ".is-active"
*/
class SelectOnClick {

  constructor(element, childSelector) {
    this.list = element;
    this.children = (childSelector) ? this.list.children(childSelector) : this.list.children('*');
    this.events();
  }

  events(){
    this.children.on('click', this.selectChildren.bind(this));
  }

  selectChildren(event){
    event.preventDefault();
    $(event.currentTarget).addClass('is-active');
    this.children.not(event.currentTarget).removeClass('is-active');
  }
}

export default SelectOnClick;
