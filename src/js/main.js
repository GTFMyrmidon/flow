$(document).ready(function()
{

	setTimeout(function()
	{
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
 
  // Landing
  // Alway make landing container height equal to browser window height
 
  var $landingContainer = $('.landing');
 
  $landingContainer.height(window.innerHeight);
 
  // When user resize browser window, hero container needs to have the same
  // height as browser window height.
 
  $(window).resize(function() {
    $landingContainer.height(window.innerHeight);
  });
 
  // Work
  // Isotope filters
 
  var $workFilterLinks = $('.work-filters li'),
      $container = $('.work-items');
 
  $workFilterLinks.find('a').click(function(){
 
    $workFilterLinks.removeClass('active');
 
    $container.isotope({
      // options
      filter: $(this).attr('data-filter'),
      itemSelector: '.isotope-item',
      animationEngine : "best-available",
      masonry: {
        columnWidth: '.isotope-item'
      }
    });
 
    $(this).parent().addClass('active');
 
    return false;
  });
 
  // Menu initialization
 
  var $menuIcon = $('.menu-icon'),
      $navigation = $('.navigation'),
      $mainNavigation = $('.main-navigation'),
      $navigationLink = $('.main-navigation a');
 
  $(window).scroll(function() {
    if(window.scrollY > window.outerHeight) {
      $menuIcon.addClass('active');
    } else {
      $menuIcon.removeClass('active');
    }
  });
 
  $menuIcon.click(function(e) {
    e.preventDefault();
 
    $navigation.toggleClass('active');
  });
 
  $mainNavigation.singlePageNav({
    filter: ':not(.external)',
    speed: 1000,
    currentClass: 'current',
    easing: 'swing',
    updateHash: false,
    beforeStart: function() {
    },
    onComplete: function() {
      $navigation.removeClass('active');
    }
  });
 
  // Scrollreveal initialize
 
  var config = {
 
    easing: 'hustle',
    reset:  false,
    delay:  'onload',
    opacity: .2,
    vFactor: 0.2,
    mobile: false
  }
 
  window.sr = new ScrollReveal(config);
  sr.reveal('.introduction');
 
  // Fancybox
 
  $(".video-play").fancybox({
    closeClick  : false,
  });
});