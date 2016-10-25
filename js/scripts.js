$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#output").toggle();

    var qArray = [];
    $("input:checkbox[name=question]:checked").each(function() {
      var results = $(this).val()
      qArray.push(results);
    });

    console.log(qArray);

    var numUnlucky = 0;
    var numLucky = 0;

    qArray.forEach(function(item) {
      if (item === "lucky") {
        numLucky += 1;
      } else {
        numUnlucky += 1;
      }
    });

    if (numUnlucky <= numLucky) {
      $("#fortune").text("You are a lucky person.  Good things are coming your way!");
    } else {
      $("#fortune").text("I'm sorry, but you are not lucky.");
    }


  });
})
