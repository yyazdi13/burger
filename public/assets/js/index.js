$(function(){
    $(".change-devoured").on("click", function() {
        var id = $(this).data("id");
        var newdevoured = $(this).data("newdevoured");
    
        var newDevouredState = {
          devoured: newdevoured
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
          function() {
            console.log("changed sleep to", newdevoured);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
    $(".create").on("submit", function(){
        // event.preventDefault();

        var newBurger = {
            name: $("#name").val().trim(),
            devoured: $("[name = devoured]:checked").val()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("added new burger");
            location.reload();
        });
    });
});

