import BottomSlider from './modules/BottomSlider';
import ProductTileHoverEffect from './modules/ProductTileHoverEffect';
import StickyHeader from './modules/StickyHeader';
import ProductServicesDisplay from './modules/ProductServicesDisplay';
import CatSelection from './modules/CatSelection';
import SelectOnClick from './modules/SelectOnClick';
import ChangeImages from './modules/ChangeImages';
import Slider from './modules/Slider.js';
import Modal from './modules/Modal';
import LoginDisplay from './modules/LoginDisplay';
import MobileMenu from './modules/MobileMenu';
import AvailabityCheck from './modules/AvailabilityCheck';
import $ from 'jquery';

$(function(){
  $('.aid:not(.aid--faq)').each(function(){
    new BottomSlider($(this));
  });
  $('.aid.aid--faq').each(function(index){
    new BottomSlider($(this), index);
  });

  if($('.product-tile')){
    ProductTileHoverEffect();
  }
  if($('.hardware-card__img-box')){
    new ChangeImages($('.hardware-card__img-box'));
  }

  var login = new LoginDisplay($('.site-header__top__links__login'));
  var stickyHeader = new StickyHeader();

  $('.product-services__item:not(.product-services__item--fixed-display)').each(function(){
    new ProductServicesDisplay($(this));
  });
  if($('.siema').length > 0){
    var slider = new Slider('.siema');
    new Slider('.siema1');
    new Slider('.siema2');
    console.log(slider);
    $('.siema1, .siema2').removeClass('is-visible');
  }
  var modal = new Modal();

  //new SelectOnClick($('.hardware-selection__nav'), µ'li:not(.hardware-selection__nav__arrow)');
  new CatSelection({
    nav : $('.hardware-selection__nav'),
    navChildSelector : 'li:not(.hardware-selection__nav__arrow)',
    content : $('.hardware-selection__content')
  });

  var mobileMenu = new MobileMenu();
  if($('#btnCP').length > 0){
    var availability = new AvailabityCheck();
  }
});
