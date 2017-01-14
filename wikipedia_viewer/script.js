$(document).ready(function() {

    $('#searchBtn').click(function() {
      var wikiUrl = "https://en.wikipedia.org/w/api.php?";
      wikiUrl += "action=opensearch&";
      wikiUrl += "search=Te&";
      wikiUrl += "format=json";  //use format=jsonp if I want html
      //wikiUrl += "formatversion=2"; use this if format=jsonfm

      $.ajax({
        url: wikiUrl,
        headers: {'Api-User-Agent' : 'Amy'},
        success: function(response) {
          console.log(response);

          // The response is an array. response[0] is a string of the searched word,
          // response[1] is an array of the searched word, response[2] is an array
          // of definitions, and response[3] is an array of urls.

        for (var i= 0; i < response[1].length; i++) {
          $('<a href=' + response[3][i] + '>' + response[1][i] + '<br/>' + response[2][i] + '</a>').appendTo('#results');
          $('a').attr('target', '_blank');
          $('a').css({'margin-bottom': '10px',
                      'background-color': 'gray',
                      'color': 'white'});
        }
      }





      });

    });
});
