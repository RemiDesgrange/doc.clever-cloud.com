$(document).ready(function() {

  $("h2").append("<h4>Table of Contents</h4><ul id='cc-tableofcontent__list'></ul>");

  //Instanciate an index for each h3 
  $(".cc-content h3").each( function() {
  	//Slugifying titles for urls
    var Text = $(this).text();
    Text = Text.toLowerCase();
    Text = Text.replace(/\s/g,'-');
    Text = Text.replace(/[^a-zA-Z0-9\-]/g,'');
    var line = "<li><a href=#"+Text+'>'+$(this).text()+'</a></li>';
    var $newli = $(line);
    $("#cc-tableofcontent__list").append($newli);
  });
  
  //Smooth scrolling
  $('.cc-content__text ul li a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 1
    }, 500);
    return false;
});
});