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
        // $.post("/api/test", newUser).then(function(data) {
        //     console.log("-$.post:data-");
        //     console.log(data)
        //     location.reload();
        // });

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
        fetch('/api/test', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
          }
        ).then(function(res){
            console.log(res);
            res.json();
            // location.reload();
        });
        // .then(
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

        // for fetch post birdPic
        // var formData = new FormData();
        
    
        for (let i = 0; i < fileList.length; i++) {
            if (fileList[i].type.match(/^image\//)) {
                file = fileList[i];
                break;
            }
        }
        console.log("-file-");
        console.log(file);
        console.log("file.name");
        console.log(file.name);
    
        if (file !== null) {
            // const output = document.getElementById('output');    
            // output.src = URL.createObjectURL(file);
            // console.log("-URL.createObjectURL(file)-");            
            // console.log(URL.createObjectURL(file));
            // $("#output")
            //     .attr("src", URL.createObjectURL(file))
            //     .width("150px")
            //     .height("150px");

            // formData.append('picname', 'test1');        
            // formData.append('birdPic1', file);

            // console.log("-formData-");
            // console.log(formData);

            // Test 1: fetch post bird pic
            // fetch("/api/birdpic", {
            //     method: 'POST', 
            //     body: formData
            //     // headers: new Headers({
            //     //     'Content-Type': ''
            //     // })
            //   }
            // ).then(function(res) {
            //     console.log(res);
            // })
            var birdpic = {
                picname: file.name,
                picURL: URL.createObjectURL(file)
            };

            fetch("/api/birdpic", {
                method: 'POST', 
                // body: file
                body: JSON.stringify(birdpic),
                headers: new Headers({
                    'Content-Type': 'application/json'
                  })
              }
            ).then(function(res) {
                // console.log(res);
                console.log(res.blob());
            })
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

    $("#fetch-button").on("click", function(event) {
        console.log("fetch-button clicked!");
    // var input = $("#image-capture-input")
    // console.log(input.files);

    // $("#fetch-button").on("click", function(event) {
    //     console.log("fetch-button clicked!");

        // fetch('/api/test', {
        //     method: 'POST',
        //     body: data
        //   });

        // fetch("https://jsonplaceholder.typicode.com/posts")
        // .then(res => res.json())
        // .then(posts => console.log(posts));

        // fetch("https://storage.googleapis.com/snavdeepsingh/bird.jpg")
        // .then(res => res.send);

    })


// END OF: $(function() {
});


// var formData = new FormData();
// var fileField = document.querySelector("input[type='file']");

// formData.append('username', 'abc123');
// formData.append('avatar', fileField.files[0]);

// fetch('https://example.com/profile/avatar', {
//   method: 'PUT',
//   body: formData
// })
// .then(response => response.json())
// .catch(error => console.error('Error:', error))
// .then(response => console.log('Success:', response));