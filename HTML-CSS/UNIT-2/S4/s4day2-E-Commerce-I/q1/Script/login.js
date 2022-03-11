  document.querySelector("#form").addEventListener("submit", formSubmit);
  var regdUsers = JSON.parse(localStorage.getItem("signUpDetails"));
  //console.log(regdUsers);

  var form = document.querySelector("#form");
  //console.log(form.user.value);
  // form.id.value
  function formSubmit(event) 
  {
    event.preventDefault();

    var user = form.user.value;
    var pass = form.pass.value;
    console.log(user, pass);

    var flag = false;
    for (var i = 0; i < regdUsers.length; i++) {
      if (regdUsers[i].user == user && regdUsers[i].pass == pass) {
        flag=true;
      } 
      else 
      {
        flag=false;
      }
    }
    if(flag == true)
    {
      console.log("Login Success");
    }
    else
    {
      console.log("Login Failed");
    }
  }


  // whenever you want to store multiple objects
