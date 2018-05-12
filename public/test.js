$(function() {
    $(".signup-form").on("submit", function(event) {
        event.preventDefault();
    
        var newUser = {
            username: $("#signup-username").val().trim(),
            password: $("#signup-password").val().trim()
        };
    
        $.post("/api/test", newUser).then(function(data) {
            console.log("-$.post:data-");
            console.log(data)
            location.reload();
        });
    });
});