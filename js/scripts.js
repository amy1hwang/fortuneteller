$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".output").show();

    var qArray = [];
    $("input:checkbox[name=question]:checked").each(function() {
      var results = $(this).val()
      qArray.push(results);
    });

    console.log(qArray);


    $(".output").append(qArray.join(" "));

  });
})
