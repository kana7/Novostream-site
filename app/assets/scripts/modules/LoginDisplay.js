import $ from 'jquery';

/*
  Allow to switch between containers tanks to a nav element
  Takes an object in parameter
*/

class LoginDisplay{

  constructor(element) {
    this.element = element;
    this.btn = this.element.find('a');
    this.form = this.element.find('.login-form');
    this.events();
  }
  events(){
    this.btn.on('click', this.toggleOpen.bind(this));
    this.element.on('mouseleave', this.closeForm.bind(this));
  }
  toggleOpen(){
    this.element.toggleClass('site-header__top__links__login--is-open');
  }
  closeForm(){
    this.element.removeClass('site-header__top__links__login--is-open');
  }
}

export default LoginDisplay;
