
var stuArr = JSON.parse(localStorage.getItem("studentDataBase")) || [];

document.querySelector("#submit").addEventListener("click", myForm);

function myForm(event)
{
    event.preventDefault();

    var name = document.querySelector("#name").value;
    var age = document.querySelector("#age").value;
    var gender = document.querySelector("#gender").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;

    var stuObj = {
        stuName: name,
        stuAge: age,
        stuGender: gender,
        stuEmail: email,
        stuPhone: phone,
    };
    console.log(stuObj);

    stuArr.push(stuObj);
    console.log(stuArr);

    localStorage.setItem("studentDataBase", JSON.stringify(stuArr));
}