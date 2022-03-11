
var stuArr = JSON.parse(localStorage.getItem("studentDataBase")) || [];

var admitted = JSON.parse(localStorage.getItem("admitted")) || [];

var rejected = JSON.parse(localStorage.getItem("rejected")) || [];

displayData(stuArr);

function displayData(stuArr)
{
    stuArr.map(function(item, index, array)
    {
        var row = document.createElement("tr");

        var col1 = document.createElement("td");
        col1.innerText = item.stuName;

        var col2 = document.createElement("td");
        col2.innerText = item.stuAge;

        var col3 = document.createElement("td");
        col3.innerText = item.stuGender;

        var col4 = document.createElement("td");
        col4.innerText = item.stuEmail;

        var col5 = document.createElement("td");
        col5.innerText = item.stuPhone;

        var col6 = document.createElement("td");
        var btn1 = document.createElement("input");
        btn1.setAttribute("type", "submit");
        btn1.setAttribute("value", "Accept");
        btn1.addEventListener("click", function(){
            console.log(item);
            accept(item);
        })
        col6.append(btn1);

        var col7 = document.createElement("td");
        var btn2 = document.createElement("input");
        btn2.setAttribute("type", "submit");
        btn2.setAttribute("value", "Reject");
        btn2.addEventListener("click", function(){
            console.log(item);
            reject(item);
        })
        col7.append(btn2);

        row.append(col1, col2, col3, col4, col5, col6, col7);

        document.querySelector("tbody").append(row);
    })
}


function accept(item)
{
    console.log(item)
    admitted.push(item);
    localStorage.setItem("admitted", JSON.stringify(admitted));
}

function reject(item)
{
    console.log(item)
    rejected.push(item);
    localStorage.setItem("rejected", JSON.stringify(rejected));
}