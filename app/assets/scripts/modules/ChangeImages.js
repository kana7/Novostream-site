import $ from 'jquery';

/*
element : list (ul, ol, parent of div) : jquery element
childSelector: selector for the children : String
class select state should be ".is-active"
*/
class ChangeImages {

  constructor(element) {
    this.imgContainer = element;
    this.mainImg = this.imgContainer.find('.gallery-image');
    this.imgThumbLinks = this.imgContainer.find('.thumb-link');
    this.events();
  }

  events(){
    this.imgThumbLinks.on('click', this.changeImage.bind(this));
  }
  changeImage(event){
    event.preventDefault();
    var src = event.currentTarget.href;
    var $li = $(event.target).closest('li');;
    this.mainImg.fadeOut(300, (function(){
      this.mainImg.attr('src', src);
    }).bind(this)).fadeIn(300);
    $li.addClass('is-active');
    this.imgThumbLinks.parents('li').not($li).removeClass('is-active');
  }
}

export default ChangeImages;
