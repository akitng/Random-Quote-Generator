
$(document).ready(function() {

    var getQuote = function() {
      $.ajax({
        url: 'http://api.forismatic.com/api/1.0/?',
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        dataType: "jsonp",
        success: function(response) {
          console.log(response);
          $('#quoteText').html(response.quoteText);
          if (response.quoteAuthor === ""){
            $('#quoteAuthor').html("~Author Unknown");
          } else {
            $('#quoteAuthor').html("~ " + response.quoteAuthor);
          }
        }
      });
    }

    $('button').on('click', function() {
      getQuote();
    });

});
