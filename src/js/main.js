import './jquery-3.1.1.min.js';
import './slick.min.js';

//get pagin slider
var greetingPagin = []
$('.greeting_pagin span').each(function () {
	greetingPagin.push($(this).text())
});

$('.greeting_slick').slick({
	dots: true, 
	speed: 300,
	arrows: false,
	responsive: [
	    {
	      breakpoint: 769,
	      settings: {
	      	dots: false
	      }
	    }
	]
});

$('.testimon_slick').slick({
	dots: true, 
	speed: 300,
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	]
});

//show user menu
$('.header_user-name').on('click', function(){
	$('.header_user-menu, .header_menu-ul, .header_user').toggleClass('show_block'); 
});		


//tabs hover bg
$(".tabs_list").on('mouseover',function(e){
	var tabOffset = $(this).offset().left
	var parentOffset = $(this).parent().offset().left; 

	var relParentX = e.pageX - parentOffset;
	var relTabX = e.pageX - tabOffset;
	var relTabStart = relParentX - relTabX - 2;
	var tabWidth = $(this).outerWidth();

	$('.tabs_hover').css({
		left: relTabStart + 'px',
		width: tabWidth + 'px'
	});
});

//tabs switcher
$(".tabs_list").on('click', function(){
	var tabDataName = $(this).attr('data-tab-nav');
	if($('#' + tabDataName).hasClass('tab_active')) {
		return false;
	}
	$('.tabs_item').hide(300).removeClass('tab_active');
	$('#' + tabDataName).show(300).addClass('tab_active');
});

//mobile options
if($(window).width() < 1280) {



//mobile menu
$('.header_mobile-menu').on('click', function(){
	$(this).toggleClass('mobile_menu--active');
	$('.header_menu').slideToggle(300)
});
	
//trade mobile menu
$('.header_menu-tradeLink').on('click', function(){
	$('.trade_submenu').slideToggle()
});

//mobile tabs nav block 
//tabs li
	var tabParent = $('.tabs_nav')
	var cloneTabFst = tabParent.find('li').first().clone().addClass('tabs_list--active');
	cloneTabFst.prependTo(tabParent)

	$('.tabs_nav').on('click', function(e){  
		var tabClone = $(e.target).clone();
		tabParent.find('li').first().remove()
		tabClone.prependTo(tabParent);
		if(tabParent.hasClass('tabs_nav--active')){
			tabParent.removeClass('tabs_nav--active');
		} else {
			tabParent.addClass('tabs_nav--active');
		}
	});	
}