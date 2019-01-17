// Function ready
$(function (){
var url = 'https://api.instagram.com/oembed?url=https://www.instagram.com/p/BpMiaXVFh4U/' 

  $.ajax ({
    url: url,
    method: 'GET',
  }).then(function (data){
    console.log(data);
    $(".instagram").append(data.html);
    $(".instagram").prepend('<h2>POST DE INSTAGRAM</h2>');

    });


    $('#links').on('click',function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          links = this.getElementsByTagName('a');
      blueimp.Gallery(links, options);
  });

  
});