
$(document).ready(function () {
    
    // Ensures form waits for submit
    $("#form").submit(function (e) {
        e.preventDefault();
    });

    $("#userError").hide();		//hides Error message
    $("#userPass").hide();		//hides pass message
    let usernameError = true;
    $("#userError").keyup(function () {
        validateUsername();
    });

    //function to check username validation 
    function validateUsername() {
        let usernameValue = $("#username").val();
	  //validate that the username is not less than 6 or greater than 10
       if (usernameValue.length < 6 || usernameValue.length > 10) {
            $("#userError").show(); 	//username not accepted shows error message
            $("#userPass").hide();		//hides the pass message
            document.getElementById('username').style.borderColor = "red" //makes input box border red
            usernameError = false;
            return false; 		//Set funtion to false
        } else {
            $("#userError").hide();		//hides error message
            $("#userPass").show();		//username accepted show pass message
            document.getElementById('username').style.borderColor = "grey" //turn border back to grey
            return true; 		//Set function to true
        }
    }

    $("#emailError").hide(); //hides error message
    $("#emailPass").hide();  //hides pass message
    let mailError = true;
    $("#emailError").keyup(function () {
        validateEmail();
    });

    //function to check email validation 
    function validateEmail() {
        let emailValue = $("#email").val();
	  //validate that the email input is in correct email format
        if (emailValue.length == "" ||
            !emailValue.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
            $("#emailError").show();  //email not accepted show error message
            $("#emailPass").hide();   //hide pass message
            document.getElementById('email').style.borderColor = "red"  //change email input box red
            mailError = false;
            return false;   //Sets function to false
        } else {
            $("#emailError").hide();  //hides error message
            $("#emailPass").show();   //email is valid show pass message
            document.getElementById('email').style.borderColor = "grey"  //change border of input box to grey
            return true;  //set function to true
        }
    }


    $("#positionError").hide();  //hides error message
    $("#positionPass").hide();   //hides pass message
    let posError = true; 
    $("#positionError").keyup(function () {
        validatePosition();
    });

    //function to ensure a position is selected
    function validatePosition() {
        var position = document.getElementById('position');
        var invalid = position.value == "empty";

        if (invalid) {
            $("#positionError").show();  //position not selected show error message
            $("#positionPass").hide();   //hide pass message
            document.getElementById('position').style.borderColor = "red"  //change border color red
            posError = false;
            return false;   //set function to false
        } else {
            $("#positionError").hide();   //hide error message
            $("#positionPass").show();    //position selected show pass message
            document.getElementById('position').style.borderColor = "grey"  //change border to grey
            return true;  //set function to true
        }
    }


    $("#timeError").hide();  //hide error message
    $("#timePass").hide();   //hide pass message
    let typeError = true;
    $("#timeError").keyup(function () {
        validateTime();
    });

    //function to ensure full time or part time is checked
    function validateTime() {
        let timeValue = $("#time").val();
        if (part.checked == false && full.checked == false) {
            $("#timeError").show();  //not checked show error message
            $("#timePass").hide();   //hide pass message
            typeError = false; 
            return false;  //set function to false 
        } else {
            $("#timeError").hide(); //hide error message
            $("#timePass").show();  //checked show pass message
            return true;  //set function to true
        }
    }


//on submition click check all functions
    $("#submit").click(function () {
        validateUsername();
        validateEmail();
        validatePosition();
        validateTime();
        if (
            validateUsername() == true &&
            validateEmail() == true &&
            validatePosition() == true &&
            validateTime() == true
        ) {
            $("#form").css('width', 270); //changes form border width to starting size
            return true;  //form submits
        } else {
            $("#form").css('width', 500); //extends form border width to allow for error messages
            return false;  //form does not submit 
        }
    });
});