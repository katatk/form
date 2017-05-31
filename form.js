        // validate a form
        // create an error list ul for each field
        var errorListEmail = document.createElement("ul");
        var errorListName = document.createElement("ul");
        var errorListAge = document.createElement("ul");
        var errorListMovie = document.createElement("ul");
        var errorListGender = document.createElement("ul");

        // create an empty string for error list
        var errorListContentEmail = "";
        var errorListContentName = "";
        var errorListContentAge = "";
        var errorListContentMovie = "";
        var errorListContentGender = "";

        // grab the form groups to append error lists to
        var emailGroup = document.getElementById("email-group");
        var nameGroup = document.getElementById("name-group");
        var ageGroup = document.getElementById("age-group");
        var movieGroup = document.getElementById("movie-group");
        var genderGroup = document.getElementById("gender-group");

        function validateForm() {

            // get the form field values on button click
            var strEmailAddress = document.getElementById("email").value;
            var strFullName = document.getElementById("full-name").value;
            var strAge = document.getElementById("age").value;
            var numAge = parseFloat(strAge);
            var selectMovie = document.getElementById("movie");
            var radioGenders = document.querySelectorAll('input[type=radio]');


            // validate email
            if (strEmailAddress == "") {
                errorListContentEmail = "<li>Please enter an email address</li>";
                // add invalid class
                errorListEmail.className = "invalid";
            } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(strEmailAddress)) {
                errorListContentEmail = "<li>" + strEmailAddress + " is NOT a valid email address</li>";
                // add invalid class
                errorListEmail.className = "invalid";
            }

            if (strEmailAddress != "" && /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(strEmailAddress)) {
                errorListContentEmail = "<li>" + strEmailAddress + " is a valid email address</li>";
                // add valid class
                errorListEmail.className = "valid";
            }

            // validate full name
            if (strFullName == "") {
                errorListContentName += "<li>Please enter a name</li>";

                // add valid class
                errorListName.className = "invalid";
            } else if (!/^[a-zA-Z]+\s[a-zA-Z]+$/.test(strFullName)) {
                errorListContentName += "<li>" + strFullName + " is NOT a valid first and last name</li>";

                // add valid class
                errorListName.className = "invalid";
            }

            if (strFullName != "" && strFullName.match(/^[a-zA-Z]+\s[a-zA-Z]+$/)) {
                errorListContentName = "<li>" + strFullName + " is a valid name</li>";
                // add valid class
                errorListName.className = "valid";
            }

            // validate age
                if (strAge == "") {
                    errorListContentAge = "<li>Please enter an age</li>";
                    // add valid class
                    errorListAge.className = "invalid";
                } else if (numAge) {
                    errorListContentAge = "<li>" + strAge + " is a valid age</li>";
                    // add valid class
                    errorListAge.className = "valid";

                } else {
                    errorListContentAge = "<li>" + strAge + " is a NOT valid age, please enter a number</li>";
                    // add valid class
                    errorListAge.className = "invalid";
                }

            // validate movie - if dropdown is not the blank (first) option
            if (selectMovie.selectedIndex > 0) {
                
                errorListContentMovie = "<li>" + selectMovie[selectMovie.selectedIndex].value + " is a great movie :D</li>";
                // add valid class
                errorListMovie.className = "valid";


            } else {
                errorListContentMovie = "<li>Please choose a movie</li>";
                // add invalid class
                errorListMovie.className = "invalid";
            }

            // validate gender - if any of the radio buttons are checked
            var checked = false;
            for (x = 0; x < radioGenders.length; x++) {

                if (radioGenders[x].checked == true) {
                    checked = true;
                    errorListContentGender = "<li>Good choice</li>";
                    // add valid class
                    errorListGender.className = "valid";
                }
            }

            if (checked == false) {
                errorListContentGender = "<li>Please select a gender</li>";
                // add invalid class
                errorListGender.className = "invalid";
            }

            // set innerHTML of the error list ul to content (string)  
            errorListEmail.innerHTML = errorListContentEmail;
            errorListName.innerHTML = errorListContentName;
            errorListAge.innerHTML = errorListContentAge;
            errorListMovie.innerHTML = errorListContentMovie;
            errorListGender.innerHTML = errorListContentGender;

            // append error list ul to form group
            emailGroup.appendChild(errorListEmail);
            nameGroup.appendChild(errorListName);
            ageGroup.appendChild(errorListAge);
            movieGroup.appendChild(errorListMovie);
            genderGroup.appendChild(errorListGender);

            // set error lists to empty, to be rebuilt when validateForm runs
            errorListContentEmail = "";
            errorListContentName = "";
            errorListContentAge = "";
            errorListContentMovie = "";
            errorListContentGender = "";

        }
