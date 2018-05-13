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

    const target = document.getElementById('target');

    target.addEventListener('drop', (e) => {
      e.stopPropagation();
      e.preventDefault();
  
      doSomethingWithFiles(e.dataTransfer.files);
    });
  
    target.addEventListener('dragover', (e) => {
      e.stopPropagation();
      e.preventDefault();
  
      e.dataTransfer.dropEffect = 'copy';
    });


});