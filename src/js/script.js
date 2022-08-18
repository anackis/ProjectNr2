$(document).ready(function() {

	// tiny slider 
	var slider = tns({
		container: '.slider-section__inner',
		items: 1,
		slideBy: 'page',
		autoplay: false,
		controls: false,
		nav: false
	});


	// tiny slider adaptive 
	// var slider = tns({
	// container: '.slider-section__inner',
	// items: 1,
	// responsive: {
	// 	992: {
	// 	fixedWidth: 100px
		
	// 	},
	// 	700: {
	// 	},
	// 	900: {
	// 	}
	// }
	// });

   // this script to make element as button for slider 
  document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
  });

  // this script to make element as button for slider 
  document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
  });

  // skript for tabs 
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
	$(this)
	  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
	  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  
  // Catalog LEARN MORE SCRIPT 
  // script that activate class=active 
	//   not optimizated 
	//   $('.catalog-item__link').each(function(i) {
	// 	  $(this).on('click', function(e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	  })
	//   });
	// Catalog back link SCRIPT 
	// script that activate class=active 
	//   not optimizated 
	//   $('.catalog-item__back').each(function(i) {
	// 	$(this).on('click', function(e) {
	// 	  e.preventDefault();
	// 	  $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	  $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 	})
	// });


  	 // Catalog LEARN MORE SCRIPT 
  	// script that activate class=active 
	//   optimizated !
	function activate(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
			e.preventDefault();
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			})
		});
	};

	activate('.catalog-item__link');
	activate('.catalog-item__back');



	// when you click on button appiers modal window 
	$('[data-modal="consultation"]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	

	// modal close button 
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #thanks').fadeOut();
	});


	// button buy in catalog 
	// we do not need it because we put it next script below 
	// $('.button_catalog').each(function(i) {
	// 	$(this).on('click', function(e) {
	// 		$('.overlay, #order').fadeIn('slow');
	// 	})
	// });



	// script that take name of product from catalog and put it in modal window 
	// as well we put part of top script here to activate  buy button 
	$('.button_catalog').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});
	


	$('form').submit(function(e) {
		e.preventDefault();

		// if (!$(this).valid()) {
		// 	return;
		// }

		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn();

			$('form').trigger('reset');
		});
		return false;
	});




});






