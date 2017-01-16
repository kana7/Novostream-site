import BottomSlider from './modules/BottomSlider';
import ProductTileHoverEffect from './modules/ProductTileHoverEffect';
import Slider from './modules/Slider';
import $ from 'jquery';

$(".aid").each(function(){
  new BottomSlider($(this));
});

if($('.banner-home').length > 0){
  new Slider('.banner-home');
}

if($('.product-tile').length > 0){
  ProductTileHoverEffect();
}
