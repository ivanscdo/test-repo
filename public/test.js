$(function() {
    $(".signup-form").on("submit", function(event) {
        event.preventDefault();
    
        var newUser = {
            username: $("#signup-username").val().trim(),
            password: $("#signup-password").val().trim()
        };

        console.log("-newUser-");
        console.log(newUser);
        
    
        $.post("/api/test", newUser).then(function(data) {
            console.log("-$.post:data-");
            console.log(data)
            location.reload();
        });
    });


    function doSomethingWithFiles(fileList) {
        // console.log("doSomethingWithFiles fired!");

        let file = null;
    
        for (let i = 0; i < fileList.length; i++) {
            if (fileList[i].type.match(/^image\//)) {
                file = fileList[i];
                break;
            }
        }
        console.log("-file-");
        console.log(file);
    
        if (file !== null) {
            // const output = document.getElementById('output');    
            // output.src = URL.createObjectURL(file);
            console.log("-URL.createObjectURL(file)-");            
            console.log(URL.createObjectURL(file));
            $("#output")
                .attr("src", URL.createObjectURL(file))
                .width("150px")
                .height("150px");
        }
    // END OF: function doSomethingWithFiles(fileList) {
    }

    // const fileInput = document.getElementById('file-input');
    // fileInput.addEventListener('change', (e) => doSomethingWithFiles(e.target.files));
    $("#image-capture-input").change(function(event) {
        // console.log("image-capture fired!");
        
        var fileList  = event.target.files;
        // console.log(event.target.files);
        console.log("-fileList-");
        console.log(fileList);

        // var fileList_Arr = Array.from(event.target.files);
        // console.log(fileList_Arr);

        doSomethingWithFiles(fileList);

        // $("#show-picture").attr(src="");
    });


// END OF: $(function() {
});


