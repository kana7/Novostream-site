import BottomSlider from './modules/BottomSlider';
import $ from 'jquery';

$(".aid").each(function(){
  new BottomSlider($(this));
});
