  document.querySelector("#form").addEventListener("submit", myFormSubmit);

  var signupArr = JSON.parse(localStorage.getItem("signUpDetails")) || [];
  function myFormSubmit(event) 
  {
    event.preventDefault();
    var signupObj = {
      email: document.querySelector("#email").value,
      user: document.querySelector("#user").value,
      pass: document.querySelector("#pass").value,
    };
    
    signupArr.push(signupObj);
    console.log(signupArr);
    localStorage.setItem("signUpDetails", JSON.stringify(signupArr));

// after sigmup, we need to go to the login page, to do that we need to
// use window.location.href

// we need to be redirected to login page when clicked submit on signup package
// to get the submit button, we use attribute selector to refer to <input type="submit">,
// document.querySelector("input[type='submit']")

    document
      .querySelector("input[type='submit']")
      .addEventListener("click", function () {
        window.location.href = "login.html";
      });
  }