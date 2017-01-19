import $ from 'jquery';
import SelectOnClick from './SelectOnClick';

/*
  Allow to switch between containers tanks to a nav element
  Takes an object in parameter
*/

class CatSelection extends SelectOnClick{

  constructor(obj) {
    super(obj.nav, obj.navChildSelector);
    this.element = obj.element;
    this.link = obj.nav.children(obj.navChildSelector);
    this.contentContainer = obj.content.children();
    this.selectionEvents();
  }
  selectionEvents(){
    this.children.on('click', this.changeContainer.bind(this));
  }
  changeContainer(event){
    let index = $(event.currentTarget).attr('data-link');
    let container = this.contentContainer.filter('[data-link="'+index+'"]');
    container.addClass('is-visible');
    this.contentContainer.not(container).removeClass('is-visible');
  }
}

export default CatSelection;
