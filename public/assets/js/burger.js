// Make sure we wait to attach our handlers until the DOM is fully loaded.
$( document ).ready(function() {
    $("#devour").hide();
  $("#search-btn").on("click", function(event) {
    event.preventDefault();
    var choice = $("#choice").val().trim()
    $("#devour").text(choice)
    console.log(choice)

    var newBurger = {
      burger_name: $("#choice").val().trim(),
      
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }


    );
  });


  function devourIt(){
     $("#devour").on("click", function(){
      $("devoured").text(choice)

      var id = $(this).data("id");
    var burger_name = $(this).data("burger_name");

    var newBurger = {
      burger_name: burger_name
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurger
    }).then(
      function() {
        console.log("show me the new", burger_name);
        // Reload the page to get the updated list
        location.reload();
    })

    
      }
  }
});


  


  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCat = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newCat
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE",
  //   }).then(
  //     function() {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });


