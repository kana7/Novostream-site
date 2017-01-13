import BottomSlider from './modules/BottomSlider';
import productTileHoverEffect from './modules/productTileHoverEffect';
import $ from 'jquery';

$(".aid").each(()=>{
  new BottomSlider($(this));
});
if($('.product-tile')){
  productTileHoverEffect();
}
