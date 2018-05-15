$(function() {
    $(".signup-form").on("submit", function(event) {
        event.preventDefault();
    
        var newUser = {
            username: $("#signup-username").val().trim(),
            password: $("#signup-password").val().trim()
        };

        console.log("-newUser-");
        console.log(newUser);
        
        // routes/api-routes.js
        $.post("/api/test", newUser).then(function(data) {
            console.log("-$.post:data-");
            console.log(data)
            location.reload();
        });

        // TEST 1:routes/fetch-route.js
        // fetch("./api/test", {
        //     method: 'post',
        //     // headers: {
        //     //   "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        //     // },
        //     body: newUser
        //   })
        //   .then(json)
        //   .then(function (data) {
        //     console.log('Request succeeded with JSON response', data);
        //   })
        //   .catch(function (error) {
        //     console.log('Request failed', error);
        //   });

        // TEST 2: 
        // fetch('/api/test', {
        //     method: 'POST',
        //     body: newUser
        //   }).then(
        //     response => response.json() // if the response is a JSON object
        //   ).then(
        //     success => console.log(success) // Handle the success response object
        //   ).catch(
        //     error => console.log(error) // Handle the error response object
        //   );

        
    //END OF: $(".signup-form").on("submit", function(event) {
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
        console.log(fileList[0]);

        // var fileList_Arr = Array.from(event.target.files);
        // console.log(fileList_Arr);

        doSomethingWithFiles(fileList);

        // $("#show-picture").attr(src="");
    });

    // var input = $("#image-capture-input")
    // console.log(input.files);

    // $("#fetch-button").on("click", function(event) {
    //     console.log("fetch-button clicked!");

    //     fetch('/api/test', {
    //         method: 'POST',
    //         body: data
    //       })

    // })


// END OF: $(function() {
});


