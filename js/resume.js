(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function()  {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
})(jQuery); // End of use strict

// when users scroll 1000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
var btn = document.getElementById('myBtn');
function scrollFunction() {
 if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500 ) {
   btn.style.display = "block";
 } else {
   btn.style.display = "none";
 }

}

//When user clicks on the button,scroll to the top
function topFunction() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}

//function that triggers the preloader
function loader(){
 window.addEventListener('load', () => {
   const preload = document.querySelector('.page-preloader');
    preload.classList.add('preload-finish') ;
 });
}
loader();

//Progressbar function
const html = document.querySelector('.html');
const css = document.querySelector('.css');
const bootstrap = document.querySelector('.bootstrap');
const javascript = document.querySelector('.javascript');
const wordpress = document.querySelector('.Wordpress');
const screenPosition = window.innerHeight;
function htmlEffect(){
  const htmlPosition = html.getBoundingClientRect().top;
  if ( htmlPosition < screenPosition ) {
    html.classList.add('html-animate');
  }
}

function cssEffect(){
  const cssPosition = css.getBoundingClientRect().top;
  if ( cssPosition < screenPosition ) {
    css.classList.add('css-animate');
  }
}

function bootstrapEffect(){
  const bootstrapPosition = bootstrap.getBoundingClientRect().top;
  if ( bootstrapPosition < screenPosition) {
    bootstrap.classList.add('bootstrap-animate');
  }
}

function javascriptEffect(){
 const javascriptPosition = javascript.getBoundingClientRect().top;
  if ( javascriptPosition < screenPosition) {
    javascript.classList.add('javascript-animate');
  }
}

function wordpressEffect(){
  const wordpressPosition = wordpress.getBoundingClientRect().top;
  if (wordpressPosition < screenPosition) {
    wordpress.classList.add('wordpress-animate')
  }
}
window.addEventListener('scroll', htmlEffect);
window.addEventListener('scroll', cssEffect);
window.addEventListener('scroll', bootstrapEffect);
window.addEventListener('scroll', javascriptEffect);
window.addEventListener('scroll', wordpressEffect)
