import BottomSlider from './modules/BottomSlider';
import ProductTileHoverEffect from './modules/ProductTileHoverEffect';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';

$(".aid").each(function(){
  new BottomSlider($(this));
});
if($('.product-tile')){
  ProductTileHoverEffect();
}
var stickyHeader = new StickyHeader();
