function openModal() {
  /* Note that you do NOT have to do a document.getElementById anywhere in this exercise. Use the elements below */
  const myInput = document.getElementById("psw");
  const confirmMyInput = document.getElementById("cpsw");
  const letter = document.getElementById("letter");
  const capital = document.getElementById("capital");
  const number = document.getElementById("number");
  const length = document.getElementById("length");
  const match = document.getElementById("match");

  // When the user starts to type something inside the password field
  myInput.onkeyup = function () {
    console.log("hello");

    /* TODO: Question 1.1: Starts here */
    const lowerCaseLetters = /[a-z]/g; // : Fill in the regular experssion for lowerCaseLetters
    const upperCaseLetters = /[A-Z]/g; // : Fill in the regular experssion for upperCaseLetters
    const numbers = /[0-9]/g; // : Fill in the regular experssion for digits
    const minLength = 8; // : Change the minimum length to what what it needs to be in the question
    /* TODO: Question 1.1: Ends here */

    /* TODO: Question 1.2:  Starts here */
    /*
         - So first read up on classList.  
         - Perform a console.log(letter.classList) and check the array that you see. By default the first time, there should be just 1 element and it should be
         "invalid". "invalid" is a class that is present in login.css. 
         - Below, there are a bunch of if blocks and else blocks.
         - Each if block means that some successful condition is satisfied for our password conditon. So the red cross need to be converted to a check mark.
         - Each else block stands for a failed condition, so the green check mark needs to be a red cross again.
         - All that you need to do is, in each of the blocks, fill in the correct classNames for the remove and the add methods.
         */

    // Validate lowercase letters
    if (myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }

    // Validate capital letters
    if (myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    if (myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= minLength) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
    /* TODO: Question 1.2:  Ends here */
  };
  /* TODO Question 1.3: Starts here */
  confirmMyInput.onkeyup = function () {
    // Validate password and confirmPassword
    if (myInput.value === confirmMyInput.value) {
      match.classList.remove("invalid");
      match.classList.add("valid");
    } else {
      match.classList.remove("valid");
      match.classList.add("invalid");
    }
    /* TODO Question 1.3: Starts here */

    // Disable or Enable the button based on the elements in classList
    enableButton(
      letter.classList.contains("valid") &&
        capital.classList.contains("valid") &&
        number.classList.contains("valid") &&
        length.classList.contains("valid") &&
        myInput.value === confirmMyInput.value
    );
  };
}

function enableButton(enabled) {
  document.getElementById("my_submit_button").disabled = !enabled;
}

function onClickFunction() {
  alert("Hey! I'm all green! Well done.");
}
