
    document.querySelector("#form").addEventListener("submit", formSubmit);
    var prodArr = JSON.parse(localStorage.getItem("Bozaz")) || [];
    dispData(prodArr);

    function formSubmit(event)
    {
        event.preventDefault();
        var prodObj = {
            prodCategory: document.querySelector("#category").value,
            prodTitle: document.querySelector("#title").value,
            prodDescription: document.querySelector("#description").value,
            prodPrice: document.querySelector("#price").value,
        };
        
        prodArr.push(prodObj);
        

        localStorage.setItem("Bozaz", JSON.stringify(prodArr));
    }
    console.log(prodArr);

    function dispData(prodArr)
    {
        var num = 1;
        prodArr.map(function(elem, index, array)
        {
            var row = document.createElement("tr");
            var col1 = document.createElement("td");
            col1.innerText = num++;
            col1.style.fontWeight = "bold";
            var col2 = document.createElement("td");
            col2.innerText = elem.prodCategory;
            var col3 = document.createElement("td");
            col3.innerText = elem.prodTitle;
            var col4 = document.createElement("td");
            col4.innerText = elem.prodDescription;
            var col5 = document.createElement("td");
            col5.innerText = elem.prodPrice;

            row.append(col1, col2, col3, col4, col5);
            document.querySelector("tbody").append(row);
        });
    }
    
    
      
    

