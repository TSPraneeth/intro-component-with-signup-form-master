function validate(form) {
    var fname = form.first_name.value;
    var lname = form.last_name.value;
    var email = form.email.value;
    var pwd = form.password.value;
    var atSymbol = email.indexOf("@");
    var dot = email.indexOf(".");
    
    

    if (lname == null || lname == "") {
      document.getElementById("lname_error").innerHTML = "Name can't be blank";
      document.getElementById("lname").style.border = "1px solid red";
      document.getElementById("ico2").style.display = "block";

    }
    
    if (fname == null || fname == "") {
        document.getElementById("fname_error").innerHTML = "Name can't be blank";
        document.getElementById("fname").style.border = "1px solid red";
        document.getElementById("ico1").style.display = "block";

      }


    if (pwd.length < 8) {
      document.getElementById("pwd_error").innerHTML = "Password must be at least 8 characters long.";
      document.getElementById("pwd").style.border = "1px solid red";
      document.getElementById("ico4").style.display = "block";

    }

    if (email != "" || atSymbol < 1 || dot <= atSymbol + 2 || dot === email.length - 1) {
        document.getElementById("email_error").innerHTML = "Looks like this is not an email";
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById("ico3").style.display = "block";
      }
     
  }