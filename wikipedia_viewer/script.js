$(document).ready(function() {

    $('h1').click(function(){
      window.open('https://en.wikipedia.org/wiki/Main_Page');
    });

    $('h1').hover(function(){
      $(this).css('cursor' , 'hand');
      }, function() {
      $(this).css('cursor' , 'pointer');
    });

    // Clicking this button fires this function to search for a random wiki
    // article in a new window
    $('#randomBtn').click(function() {
      window.open('https://en.wikipedia.org/wiki/Special:Random');
    });

    // Clicking this button fires this function to hide the search button,
    // create an input element and append it to the body.
    $('#searchBtn').click(function() {
      $('#searchBtn').hide();
      $('<input>').appendTo('body');
      $('input').attr({'id' : 'search_text',
                      'type' : 'text'});
      $('input').css({'margin': '0 auto 20px auto',
                      'display': 'block'});
    });

    // This function fires only when the enter key is pressed. The function gets the value
    // from the input field, connects to wiki API with the corresponding search
    // parameter, and appends the results to the body.
    $(document).keypress(function(event){
          var keycode = (event.keyCode ? event.keyCode : event.which);
          if (keycode == 13) {
            var searchThis = $('input').val();

            var wikiUrl = "https://en.wikipedia.org/w/api.php?";
            wikiUrl += "action=opensearch";
            wikiUrl += "&search=" + searchThis;
            wikiUrl += "&format=json";  // Use format=jsonp if I want HTML output.
            //wikiUrl += "formatversion=2"; Use this if the format=jsonfm

            $.ajax({
              url: wikiUrl,
              headers: {'Api-User-Agent' : 'Amy'},
              success: function(response) {
                console.log(response);

                // The response is an array. response[0] is a string of the searched word,
                // response[1] is an array of the searched word, response[2] is an array
                // of definitions, and response[3] is an array of urls.

                for (var i= 0; i < response[1].length; i++) {
                  $('<a href=' + response[3][i] + '>' + response[1][i] + '<br/>' + response[2][i] + '</a>').appendTo('body');
                  $('a').attr('target', '_blank');
                  $('a').css({'margin': '0 50px 10px 50px',
                              'background-color': '#1A2D40',
                              'color' : 'white',
                              'padding' : '10px 10px 10px 10px',
                              'text-decoration' : 'none',
                              'display': 'block',
                              'cursor' : 'hand',
                              'outline' : '2px solid black'});
                }
                $('a').hover(function(){
                  $(this).css('background-color' , '#3F4C59');
                  }, function() {
                  $(this).css('background-color' , '#1A2D40');
                });
              }  // closes ajax success function
            });  //closes ajax request
          }  // closes if loop (when return button is entered)
    });  // closes keypress function
});  // closes document.ready function
