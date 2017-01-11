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
          console.log(response[1][0]);
          console.log(response[2][0]);
          console.log(response[3][0]);
          console.log(response[1][9]);
          console.log(response[2][9]);
          console.log(response[3][9]);

          $('#first').html(response[1][9] + "<br/>" +response[2][9] + "<br/>" + response[3][9]);
          $('#first').attr('href' , response[3][9]);



        }

      });

    });
});
