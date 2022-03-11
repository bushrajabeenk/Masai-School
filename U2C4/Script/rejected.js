var rejData = JSON.parse(localStorage.getItem("rejected")) || [];

displayData(rejData);

function displayData(rejData)
{
    rejData.map(function(item, index, array){

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

        row.append(col1, col2, col3, col4, col5);

        document.querySelector("tbody").append(row);

    })
}