/*global $, jQuery, alert*/
$(function () {
    
    'use strict';
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }     
    });
    // trigger navbar links 
    $("#navbar-axit  li a").click(function () { 
        //    console.log($(this).data("target"));
           $("html, body").animate({
            scrollTop: $($(this).data("target")).offset().top
          }, 1000);
        });
    $('.tabs-switch li').click(function()  {
        //adding class selected to each tab in the section
        $(this).addClass('selected').siblings().removeClass('selected');
        //hide each content in the tab remain only required tab
        $('.tabs-section .tab-content >div').hide();
        // to show spacific tab content 
        $($(this).data('class')).show();
        window.console.log($(this).data('class'));
   }); 
});